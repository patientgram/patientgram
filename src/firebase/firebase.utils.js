import "firebase/firestore";
import firebase from "./firebase";

const db = firebase.firestore();

/*
Get contact, patient, or provider info
*/

export async function getContact(contactId) {
  const contact = await db.collection("contacts").doc(contactId).get();
  return contact.data();
}

export async function getPatient(patientId) {
  const patient = await db.collection("patients").doc(patientId).get();
  return patient.data();
}

export async function getProvider(providerId) {
  const provider = await db.collection("providers").doc(providerId).get();
  return provider.data();
}

/*
Add new contact, patient, or provider
*/

export async function addContact(contactId, firstName, lastName, phoneNumber) {
  await db
    .collection("contacts")
    .doc(contactId)
    .set({ id: contactId, firstName, lastName, phoneNumber });
}

export async function addPatient(patientId, contactId, firstName, lastName) {
  await db
    .collection("patients")
    .doc(patientId)
    .set({ id: patientId, contactId, firstName, lastName });
}

export async function addProvider(providerId, firstName, lastName) {
  await db
    .collection("providers")
    .doc(providerId)
    .set({ id: providerId, firstName, lastName });
}

/**
 * Gets all updates for given patient id
 * @param {*} patientId
 */
export async function getUpdatesForPatient(patientId) {
  const patient = await getPatient(patientId);
  const promises = [];
  for (let update of patient.updates) {
    promises.push(db.collection("updates").doc(update).get());
  }
  const updates = await Promise.all(promises);
  return updates.map((update) => update.data());
}

/**
 * Adds new update with update message, patient id, and provider id. Updates the patient document.
 * @param {*} patientId
 * @param {*} providerId
 * @param {*} updateMessage
 */
export async function addUpdate(patientId, providerId, updateMessage) {
  const updateId = Date.now().toString();
  // update updates db
  const update = {
    id: updateId,
    addedBy: providerId,
    date: "Sept 5 2020",
    update: updateMessage,
  };
  await db.collection("updates").doc(updateId).set(update);

  // update patient db
  const patient = await getPatient(patientId);
  patient.updates.push(updateId);
  db.collection("patients")
    .doc({ updates: patient.updates })
    .set(patient, { merge: true });
}

/**
 * Adds new patient for given provider.
 * @param {*} patientId
 * @param {*} providerId
 */
export async function addPatientForProvider(patientId, providerId) {
  const provider = await getProvider(providerId);
  provider.patients.push(patientId);
  db.collection("providers")
    .doc(providerId)
    .set({ patients: provider.patients }, { merge: true });
}

/**
 * Adds new patient for given contact.
 * @param {*} patientId
 * @param {*} contactId
 */
export async function addPatientForContact(patientId, contactId) {
  const contact = await getContact(contactId);
  contact.patients.push(patientId);
  db.collection("providers")
    .doc(contactId)
    .set({ patients: contact.patients }, { merge: true });
}

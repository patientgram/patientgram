import "firebase/firestore";
import firebase from "./firebase";

const db = firebase.firestore();

export async function getUpdatesForPatient(patientId) {
  const patient = await getPatient(patientId);
  const promises = [];
  for (let update of patient.updates) {
    promises.push(db.collection("updates").doc(update).get());
  }
  const updates = await Promise.all(promises);
  return updates.map((update) => update.data());
}

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
  db.collection("patients").doc(patientId).set(patient, { merge: true });
}

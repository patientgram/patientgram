import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DashboardItemTitle from "../dashboard-item-title/dashboard-item-title";

export default function Patients({patients, setSelectedPatient, isProvider}) {
  return (
    <React.Fragment>
      <DashboardItemTitle>Patients (Click to see {isProvider ? "and write" : null} updates)</DashboardItemTitle>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Patient ID</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          patients ?
          patients?.map((patient) => (
            <TableRow 
              key={patient.id} 
              onClick={() => setSelectedPatient(patient)}
            >
              <TableCell>{patient.id}</TableCell>
              <TableCell>{patient.firstName} {patient.lastName}</TableCell>
            </TableRow>
          ))
          :
          <TableRow><TableCell>No patients yet</TableCell></TableRow>
        }
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

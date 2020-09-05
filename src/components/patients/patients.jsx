import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DashboardItemTitle from "../dashboard-item-title/dashboard-item-title";

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Patients({patients, setSelectedPatient}) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <DashboardItemTitle>Patients</DashboardItemTitle>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Patient ID</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patients.map((patient) => (
            <TableRow 
              key={patient.patientId} 
              onClick={() => setSelectedPatient(patient)}
            >
              <TableCell>{patient.patientId}</TableCell>
              <TableCell>{patient.patientName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

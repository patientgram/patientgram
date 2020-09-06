import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DashboardItemTitle from "../dashboard-item-title/dashboard-item-title";

// Generate Update Data
function createData(id, patientId, date, name, update) {
  return { id, patientId, date, name, update };
}

const rows = [
  createData(0, "abc", "16 Mar, 2019", "Elvis Presley", "Blah blah"),
  createData(1, "def", "16 Mar, 2019", "Paul McCartney", "Blah blah"),
  createData(2, "ghi", "16 Mar, 2019", "Tom Scholz", "Blah blah"),
  createData(3, "jkl", "16 Mar, 2019", "Michael Jackson", "Blah blah"),
  createData(4, "mno", "15 Mar, 2019", "Bruce Springsteen", "Blah blah"),
];

export default function Updates({updates, setSelectedPatient}) {
  return (
    <React.Fragment>
      <DashboardItemTitle>Updates for </DashboardItemTitle>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Added By</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell>{row.addedBy}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.update}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DashboardItemTitle from "../dashboard-item-title/dashboard-item-title";

// import { getProvider } from "../../firebase/firebase.utils";

export default function Updates({updates}) {
  return (
    <React.Fragment>
      <DashboardItemTitle>Updates</DashboardItemTitle>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Added By</TableCell>
            <TableCell>Date</TableCell>
            <TableCell align="right">Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          updates ?
          updates?.map((update) => (
            <TableRow
              key={update.id}
            >
              <TableCell>
              {
                update.addedBy
              }
              </TableCell>
              <TableCell>{update.date}</TableCell>
              <TableCell align="right">{update.update}</TableCell>
            </TableRow>
          ))
          :
          <TableRow><TableCell>No updates yet</TableCell></TableRow>
        }
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

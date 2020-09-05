import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, patientId, date, name, update) {
  return { id, patientId, date, name, update };
}

const rows = [
  createData(0, 'abc', '16 Mar, 2019', 'Elvis Presley', 'Blah blah'),
  createData(1, 'def', '16 Mar, 2019', 'Paul McCartney', 'Blah blah'),
  createData(2, 'ghi', '16 Mar, 2019', 'Tom Scholz', 'Blah blah'),
  createData(3, 'jkl', '16 Mar, 2019', 'Michael Jackson', 'Blah blah'),
  createData(4, 'mno', '15 Mar, 2019', 'Bruce Springsteen', 'Blah blah'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Patients</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Patient ID</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.patientId}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.update}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more patients
        </Link>
      </div>
    </React.Fragment>
  );
}

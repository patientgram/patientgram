import React from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PeopleIcon from "@material-ui/icons/People";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import DashboardItemTitle from "../../components/dashboard-item-title/dashboard-item-title";
import Updates from "../../components/updates/updates";
import Patients from "../../components/patients/patients";

import {getPatient, getUpdatesForPatient, addUpdate} from "../../firebase/firebase.utils";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Patientgram
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

function ProviderDashboard(props) {
  const {user, isProvider, signOut} = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [selectedPatient, setSelectedPatient] = React.useState(null);
  const [allPatients, setAllPatients] = React.useState([]);
  const [allUpdates, setAllUpdates] = React.useState([]);
  const [textAreaText, setTextAreaText] = React.useState("");
  const refreshUpdates = () => {
    if (selectedPatient) {
      const fetchUpdates = async () => {
        const us = await getUpdatesForPatient(selectedPatient.id)
        setAllUpdates(us);
      }
      fetchUpdates();
    }
  }
  // const mockPatients = [
  //   {
  //     patientId: 1,
  //     patientName: "Alpha Bravo",
  //     phoneNumber: 1231231234,
  //     contactId: 1,
  //     providerId: 1
  //   },
  //   {
  //     patientId: 2,
  //     patientName: "Charlie Delta",
  //     phoneNumber: 1231231235,
  //     contactId: 2,
  //     providerId: 1
  //   },
  //   {
  //     patientId: 3,
  //     patientName: "Echo Foxtrot",
  //     phoneNumber: 1231231236,
  //     contactId: 3,
  //     providerId: 1
  //   }
  // ];
  let patientIds = user.patients;
  // let updateIds = selectedPatient.updates;

  React.useEffect(() => {
    const fetchPatients = async () => {
      const ps = [];
      for (const patientId of patientIds) {
        const p = await getPatient(patientId);
        ps.push(p);
        // .catch(err => console.log(err))
      }
      setAllPatients(ps);

      // let us = [];
    }
    fetchPatients();
  }, []);

  React.useEffect(() => {
    console.log("inside");
    if (selectedPatient) {
      const fetchUpdates = async () => {
        let us = [];
        // for (const updateId of updateIds) {
          us = await getUpdatesForPatient(selectedPatient.id);
          // ps.push(p);
          // console.log(p);
          // console.log("after set");
          // console.log(allPatients);
          // .catch(err => console.log(err))
        // }
        setAllUpdates(us);
      }
      fetchUpdates();
    }
  }, [selectedPatient, allUpdates]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          {
            selectedPatient ?
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Patient: {selectedPatient.firstName} {selectedPatient.lastName} ({selectedPatient.id}) | Provider Dashboard
            </Typography>
            :
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Provider Dashboard
            </Typography>
          }
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={() => setSelectedPatient(null)}>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Patients" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        {
          selectedPatient ?
          <Grid container spacing={3}>
            {/* Display updates for selected patient */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Updates updates={allUpdates} />
              </Paper>
              <Paper className={classes.paper}>
                <DashboardItemTitle>Enter your update below</DashboardItemTitle>
                <TextField 
                  multiline
                  rows={5}
                  onChange={(e) => setTextAreaText(e.target.value)}
                />
                <Button
                  type="submit"
                  // fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={(e) => {
                    e.preventDefault();
                    addUpdate(selectedPatient.id, user.id, textAreaText);
                    refreshUpdates();
                  }}
                >
                  Send Update
                </Button>
              </Paper>
            </Grid>
          </Grid>
          :
          <Grid container spacing={3}>
            {/* Display assigned patients */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Patients patients={allPatients} setSelectedPatient={setSelectedPatient} isProvider={isProvider} />
              </Paper>
            </Grid>
          </Grid>
        }
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}

export default ProviderDashboard;

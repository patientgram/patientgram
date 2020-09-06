import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import homepagePicture from "./homepage-picture.jpg";
import Header from "./header";

const useStyles = makeStyles((theme) => ({
  description: {
    fontSize: "18px",
    padding: "30px 150px",
    textAlign: "left",
  },
  image: {
    width: "75%",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Header title="PatientGram" />
      <div>
        <img className={classes.image} src={homepagePicture}></img>
      </div>
      <div className={classes.description}>
        <p>
          At PatientGram, we believe that keeping your loved ones updated is an
          essential part of patient care. This platform allows you to receive
          direct updates from doctors when there are changes to their care plan.
          Simply create an account and get updates about your loved ones care
          progress.
        </p>
        <h3>How It Works</h3>
        <p>
          A medical provider working with the patient will provide frequent
          updates. As the contact person for the patient, you will get a
          notification when there is a new update.
        </p>
      </div>
    </div>
  );
}

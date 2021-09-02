import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useHistory} from "react-router-dom";

function NewMeetupPage() {
    const history = useHistory();
    
  function addNewMeetupHandler(meetupsData) {
    fetch(
      "https://react-learn-academind-b0959-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupsData),
        headers: { "Content-Type": "application/json" },
      }
    ).then(() =>{
        history.replace('/')
    } );
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addNewMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;

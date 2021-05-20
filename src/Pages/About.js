import React from "react";
import { useHistory } from "react-router-dom";

function About() {
  let history = useHistory();
  return (
    <div>
      This is the about page
      <button
        onClick={() => {
          history.push("/projects");
        }}
      >
        Go To the Projects Page
      </button>
    </div>
  );
}

export default About;

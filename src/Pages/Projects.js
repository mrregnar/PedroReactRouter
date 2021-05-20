import React from "react";
import { useHistory } from "react-router-dom";

function Projects() {
  let history = useHistory();
  return (
    <div>
      This is the projects page.
      <button
        onClick={() => {
          history.push("/about");
        }}
      >
        Go To the About Page
      </button>
    </div>
  );
}

export default Projects;

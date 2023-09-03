import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Avatar from "./components/Avatar";
import Intro from "./components/Intro";
import SkillList from "./components/SkillList";
import ProjectList from "./components/ProjectList";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <div className="card-container">
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </div>
      <div className="card expand-card">
        <div className="data">
          <ProjectList/>
        </div>
      </div>
      {/* <div className="card">
        <Intro />
      </div> */}
    </div>
    <Footer/>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

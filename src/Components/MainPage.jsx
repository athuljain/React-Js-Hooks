import { useNavigate } from "react-router-dom";
import "../Styles/MainPage.css";
import Footer from "./Footer";
import Header from "./Header";

export default function MainPage() {
  const navigate = useNavigate();

  function UseStatePage() {
    console.log("useSate button Click");
    navigate("/useState");
  }
  function UseEffectPage() {
    navigate("/useEffect");
  }
  function UseContextPage() {
    navigate("/useContext");
  }
  function UseRefPage() {
    navigate("/useRef");
  }
  function PropsPage() {
    navigate("/useProps");
  }

  return (
    <div className="mainpage-container">
      <Header />
      <div className="mainPage-sub-container">
        <h1 className="mainPageHEading">React js Hooks</h1>
      </div>
      <div className="mainPageSubDiv">
        <p className="mainPageSubParagraph">
          React.js, often referred to as React, is an open-source JavaScript
          library for building user interfaces.
          <br />
          It was developed by Facebook and is commonly used for creating web
          applications with dynamic and interactive user interfaces.
          <br />
          React allows developers to build reusable UI components and
          efficiently update the user interface when data changes,
          <br />
          making it a popular choice for building modern web applications.
        </p>

        <h3 className="mainPageSubH3">
          {" "}
          Hooks make it easier to write and maintain React code,
          <br />
          as they allow you to reuse stateful logic without changing your
          component's structure into a class.
        </h3>
      </div>

      <div className="HooksBtns">
        <button onClick={UseStatePage}>useState</button>
        <button onClick={UseEffectPage}>useEffect</button>
        <button onClick={UseContextPage}>useContext</button>
        <button onClick={UseRefPage}>useRef</button>
        <button onClick={PropsPage}>Props</button>
      </div>
      <Footer />
    </div>
  );
}

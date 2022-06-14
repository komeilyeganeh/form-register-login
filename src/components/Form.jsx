import { useState } from "react";
import "./Form.css";
import Login from "./Login";
import Register from "./Register";

const Form = () => {
  const [showForm, setShowForm] = useState("register");

  return (
    <div className="container">
      <div className="buttons">
        <button
          className={`login_btn ${showForm && "active"}`}
          onClick={() =>
            setShowForm(showForm === "login" ? "register" : "login")
          }
        >
          {showForm === "login" ? "Register" : "Login"}
        </button>
      </div>
      {showForm === "login" ? (
        <Login />
      ) : (
        <Register />
      )}
    </div>
  );
};

export default Form;

import React, { useState } from "react";

import Button from "./FormElements/Button";
import Modal from "./UIElements/Modal";
import RegForm from "./RegForm";
import "./Register.css";

const Register = props => {
  const [showRegForm, setShowRegForm] = useState(false);

  const openFormHandler = () => setShowRegForm(true);

  const closeFormHandler = () => setShowRegForm(false);

  return (
    <React.Fragment>
      <Modal
        show={showRegForm}
        onCancel={closeFormHandler}
        onSubmit={closeFormHandler}
      >
        <div className="form-container">
          <RegForm />
        </div>
      </Modal>
      <Button inverse onClick={openFormHandler}>
        Sign Up
      </Button>
    </React.Fragment>
  );
};

export default Register;

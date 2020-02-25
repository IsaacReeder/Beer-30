import React, { useState } from "react";

import Button from "./FormElements/Button";
import Modal from "./UIElements/Modal";
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
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeFormHandler}>CLOSE</Button>}
      >
        <div className="form-container">
          {/* <Map center={props.coordinates} zoom={16} /> */}
          <h2>Reg Form</h2>
        </div>
      </Modal>
      <li className="place-item">
        <Button inverse onClick={openFormHandler}>
          Sign Up
        </Button>
      </li>
    </React.Fragment>
  );
};

export default Register;

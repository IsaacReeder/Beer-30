import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
// import Register from "../Register";

import Backdrop from "./Backdrop";
import "./Modal.css";

const ModalOverlay = props => {
  const content = (
    <div className={`modal ${props.className}`}>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : event => event.preventDefault()
        }
      >
        <div>{props.children}</div>
      </form>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = props => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
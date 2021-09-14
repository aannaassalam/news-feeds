import React from "react";
import "./modal.css";
import man from "../../assets/man.jpg";
import moment from "moment";

function Modal({ item, modal, setModal }) {
  return (
    modal && (
      <div className="background" onClick={setModal}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <i className="fas fa-times" onClick={setModal}></i>
          <img src={man} alt="" />
          <div className="contents">
            <h3>{item.title}</h3>
            <span>{moment().format("ddd, D MMM YYYY h:mm a")}</span>
            <p>{item.body}</p>
          </div>
        </div>
      </div>
    )
  );
}

export default Modal;

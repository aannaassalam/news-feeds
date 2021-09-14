import React, { useState } from "react";
import "./card.css";
import moment from "moment";
import { ReactComponent as Close } from "../../assets/x.svg";
import man from "../../assets/man.jpg";
import Modal from "../modal/modal";

function Card({ item, view, removeItem }) {
  const [modal, setModal] = useState(false);

  return (
    <>
      {view === "card" ? (
        <div className="card" onClick={() => setModal(true)}>
          <Close color="#FF9090" className="cross" onClick={removeItem} />
          <h4>{item.title.slice(0, 30) + "..."}</h4>
          <p>{item.body.slice(0, 30) + "..."}</p>
          <span>{moment().format("ddd, D MMM YYYY h:mm a")}</span>
          <img src={man} alt="" />
        </div>
      ) : (
        <div className="card-list" onClick={() => setModal(true)}>
          <div className="sub-div">
            <img src={man} alt="" />
            <div>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
              <span>{moment().format("ddd, D MMM YYYY h:mm a")}</span>
            </div>
          </div>
          <span className="cross">
            <Close color="#FF9090" onClick={removeItem} />
          </span>
        </div>
      )}
      <Modal item={item} modal={modal} setModal={() => setModal(false)} />
    </>
  );
}

export default Card;

import { useEffect } from "react";
import "./ModalView.css";

export default function ModalView({ item, onClose, openModal }) {
  useEffect(
    function () {
      if (openModal) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "unset";
      }

      return () => {
        document.body.style.overflowY = "unset";
      };
    },
    [openModal],
  );

  return (
    <div className="overlay">
    <div className="modalView">
      <span className="closeBtn" onClick={onClose}>
        &#10005;
      </span>
      <div className="modalContent">
        <div className="itemImgWrapper">
          <img src={item.image} alt="productImage" />
        </div>
        <div className="itemDetails">
          <div className="itemTitle">{item.title}</div>
          <div className="itemCategory">{item.category}</div>
          <div className="itemDescription">{item.description}</div>
          <div className="itemPrice">Price: {item.price} L.E.</div>
        </div>
      </div>
    </div>
    </div>
  );
}

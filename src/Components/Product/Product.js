import { useState } from "react";
import Button from "../Button/Button";
import ModalView from "../ModalView/ModalView";
import "./Product.css";

export default function Product({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal(){
    setIsModalOpen((m)=> !m);
  }
  return (
   
    <div className="productCard"> 
    { isModalOpen && <ModalView openModal={isModalOpen} onClose={openModal} item={product}/>}
      <div className="imageWrapper">
        <img
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="textWrapper">
        <h3> {product.title}</h3>
        <p>{product.description.split(" ").slice(0, 10).join(" ")}</p>
        <span>${product.price}</span>
      </div>
      <Button className={'viewProductBtn'} productCategory={product.category} item={product} onClick={openModal}>View Product</Button>
    </div>
  );
}

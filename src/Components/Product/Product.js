import Button from "../Button/Button";
import "./Product.css";

export default function Product({ product }) {
  return (
    <div className="productCard">
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
      <Button className={'viewProductBtn'} productCategory={product.category}>View Product</Button>
    </div>
  );
}

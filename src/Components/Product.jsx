const productCardStyling = {
  border: "1px solid #000",
  borderRadius: "5px",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContents: "space-between",
};

export default function Product({ product }) {
  return (
    <div style={productCardStyling}>
      <div>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "100px", objectFit: "cover" }}
        />
      </div>
      <div>
        <h3> {product.title}</h3>
        <p>{product.description.split(" ").slice(0, 10).join(" ")}</p>
        <span>${product.price}</span>
      </div>
    </div>
  );
}

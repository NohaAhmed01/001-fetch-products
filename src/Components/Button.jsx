export default function Button({ children, productCategory, onClick }) {
    return (
      <button
        style={{
          margin: "10px",
          backgroundColor: productCategory === children ? "red" : "grey",
          color: productCategory === children ? "white" : "black",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
        }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
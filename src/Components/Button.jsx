export default function Button({ children, productCategory, onClick }) {
    return (
      <button
        style={{
          margin: "10px",
          backgroundColor: productCategory === children ? "var(--color-red)" : "var(--color-text-dark)",
          color: productCategory === children ? "white" : "black",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          fontSize: "18px"
        }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
import "./Button.css";

export default function Button({ className, children, productCategory, onClick }) {
    return (
      <button
        className={`btn ${className}`}
        style={{
          backgroundColor: productCategory === children ? "var(--color-red)" : "var(--color-text-dark)",
          color: productCategory === children ? "white" : "black",
        }}
        onClick={onClick}
      >
        {children.charAt(0).toUpperCase() + children.slice(1)}
      </button>
    );
  }
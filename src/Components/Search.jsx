export default function Search({ search, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search"
      style={{
        marginTop: "20px",
        display: "block",
        width: "50%",
      }}
      value={search}
      onChange={onChange}
    />
  );
}

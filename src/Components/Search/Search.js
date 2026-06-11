import "./Search.css";

export default function Search({ search, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search"
      name="searchQuery"
      value={search}
      onChange={onChange}
    />
  );
}

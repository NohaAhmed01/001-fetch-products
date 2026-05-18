export default function Search({ search, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search"
      name="searchQuery"
      style={{
        backgroundColor: 'var(--color-text)',
        padding: '5px 8px',
        borderRadius: '8px',
        minWidth: '250px',
        border: 'none'
      }}
      value={search}
      onChange={onChange}
    />
  );
}

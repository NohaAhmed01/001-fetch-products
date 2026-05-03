import { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  /* const searchResult = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  ); */

  const filteredProducts = products.filter((item) => {
    const matchingCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchingSearch = item.title.toLowerCase().includes(search.toLowerCase());

    return matchingCategory&&matchingSearch;
  })
    /* search === ""
      ? (selectedCategory === "all"
          ? products
          : products.filter((product) => product.category === selectedCategory)
        )
      : searchResult; */

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Error fetching products");
        setIsLoading(false);
      });
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        style={{
          marginInline: "auto",
          marginTop: "20px",
          display: "block",
          width: "50%",
        }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br />

      <Button
        productCategory={selectedCategory}
        onClick={() => setSelectedCategory("all")}
      >
        all
      </Button>
      <Button
        productCategory={selectedCategory}
        onClick={() => setSelectedCategory("men's clothing")}
      >
        men's clothing
      </Button>
      <Button
        productCategory={selectedCategory}
        onClick={() => setSelectedCategory("women's clothing")}
      >
        women's clothing
      </Button>
      <Button
        productCategory={selectedCategory}
        onClick={() => setSelectedCategory("jewelery")}
      >
        jewelery
      </Button>
      <Button
        productCategory={selectedCategory}
        onClick={() => setSelectedCategory("electronics")}
      >
        electronics
      </Button>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredProducts.map((product) => (
          <Products product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}

function Products({ product }) {
  return (
    <div>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100px", objectFit: "cover" }}
      />
      <div>{product.title}</div>
    </div>
  );
}

function Button({ children, productCategory, onClick }) {
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

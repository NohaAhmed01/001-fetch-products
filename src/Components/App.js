import { useEffect, useState } from "react";
import Button from './Button';
import Product from "./Product";
import Search from "./Search";


const layoutStyling = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '1280px',
  marginInline: 'auto'
}
const productsGridStyling = {
  display: "grid",
  gridTemplateColumns: 'auto auto auto',
  gap: "20px",
}

export default function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  function APIcalling() {
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
  }
  APIcalling();

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  const filteredProducts = products.filter((item) => {
    const matchingCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchingSearch = item.title.toLowerCase().includes(search.toLowerCase());
    return matchingCategory && matchingSearch;
  })

  const cat = products.map(cat => cat.category)
  cat.unshift("all");
  const uniqueCategories = Array.from(new Set(cat));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (

    <div style={layoutStyling}>
      <Search search={search} onChange={handleSearch} />
      <div>
        {
          uniqueCategories.map((cat, index) =>
            <Button key={index} productCategory={selectedCategory} onClick={() => setSelectedCategory(cat)}>{cat}</Button>
          )
        }
      </div>
      <div style={productsGridStyling}>
        {filteredProducts.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}




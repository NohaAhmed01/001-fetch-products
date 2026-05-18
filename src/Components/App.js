import { useEffect, useState } from "react";
import Button from './Button';
import Product from "./Product";
import Search from "./Search";


const layoutStyling = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginInline: 'auto'
}
const productsGridStyling = {
  display: "grid",
  gridTemplateColumns: '1fr 1fr 1fr',
  maxWidth: '1280px',
  gap: "20px",
}

export default function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(function () {
    async function ProductsFetch() {
      try {
        setIsLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");

        if (!res.ok) throw new Error("An Error occured while fetching");

        const data = await res.json();

        setProducts(data);
        
      }
      catch (err) {
        setError(err.message);
        console.error(err.message)
      } finally {
        setIsLoading(false);
      }
    }
    ProductsFetch();
  }, []);


  function handleSearch(e) {
    setSearch(e.target.value)
  }

  const filteredProducts = products.filter((item) => {
    const matchingCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchingSearch = item.title.toLowerCase().includes(search.toLowerCase());
    return matchingCategory && matchingSearch;
  })

  /* if(search!=="" && !filteredProducts[0]) return <Error message={'no product found'} />  */

  const cat = products.map(cat => cat.category)
  cat.unshift("all");
  const uniqueCategories = Array.from(new Set(cat));

  return (

    <div style={layoutStyling}>
      <Header>
        <Search search={search} onChange={handleSearch} />
      </Header>
      <div>
        {!isLoading &&
          uniqueCategories.map((cat, index) =>
            <Button key={index} productCategory={selectedCategory} onClick={() => setSelectedCategory(cat)}>{cat}</Button>
          )
        }
      </div>
      <div style={productsGridStyling}>
        {/* {filteredProducts.map((product) => (
          <Product product={product} key={product.id} />
        ))} */}
        {isLoading && <Loader />}
        {error && <Error message={error} />}
        {search!=="" && !filteredProducts[0] && <Error message={'no product found'} />}
        {!isLoading && !error && filteredProducts.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

function Loader() {
  return <p style={{gridColumn: '2 / 3'}}>Loading...</p>
}

function Error({ message }) {
  return <p style={{gridColumn: '2 / 3'}}>
    <span>🚨</span> {message}
  </p>
}

function Header({ children }) {
  return <div className="Header">
    {children}
  </div>
}

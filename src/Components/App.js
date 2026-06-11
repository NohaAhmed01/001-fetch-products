import { useEffect, useState } from "react";
import Product from "./Product/Product";
import Search from "./Search/Search";
import Footer from "./Footer";
import Loader from "./Loader/Loader";
import Logo from "./Logo";
import Header from "./Header";
import Error from "./Error";
import FilterTabs from "./FilterTabs/FilterTabs";


export default function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(function () {
    async function ProductsFetch() {
      try {
        setError('');
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

  let cat = products.map(cat => cat.category)
  cat = ['all', ...cat];
  //cat.unshift("all");
  const uniqueCategories = Array.from(new Set(cat));

  return (
    <>
      <div>
        <Header>
          <Logo />
          <Search search={search} onChange={handleSearch} />
        </Header>
        <div className="mainContent">
          <FilterTabs isLoading={isLoading} uniqueCategories={uniqueCategories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
          <div className="productsGrid">
            {isLoading && <Loader />}
            {error && <Error message={error} />}
            {search !== "" && !filteredProducts[0] && <Error message={'no product found'} />}
            {!isLoading && !error && filteredProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}



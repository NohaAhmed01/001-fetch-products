import Button from "../Button/Button";
import "./FilterTabs.css";

export default function FilterTabs({ isLoading, uniqueCategories, selectedCategory, setSelectedCategory }) {
    return <div className="filterTabs">
        {!isLoading &&
            uniqueCategories.map((cat, index) => <Button key={index} productCategory={selectedCategory} onClick={() => setSelectedCategory(cat)}>{cat}</Button>
            )}
    </div>;
}

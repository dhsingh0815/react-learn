import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <FilterableProductTable products={PRODDUCTS} />
    </div>
  );
}

/* data*/
const PRODDUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "DragonFruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "PassinFruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: true, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: false, name: "Peas" },
];
// Components
function ProductRowCategory({ category }) {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <th>{name}</th>
      <th>{product.price}</th>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  // Prepare UI Components
  const preparedUIComponents = [];
  let currentCategory = null;
  products.forEach((product) => {
    // Iterate over product, prepare
    if (product.category !== currentCategory) {
      //add ProductRowCategory Components
      preparedUIComponents.push(
        <ProductRowCategory
          category={product.category}
          key={product.category}
        />
      );
    }
    //console.log(filterText.trim() === "");
    if (
      filterText.trim() !== "" &&
      product.category.toUpperCase().includes(filterText.toUpperCase()) &&
      product.stocked === inStockOnly
    ) {
      preparedUIComponents.push(
        <ProductRow product={product} key={product.name} />
      );
    }
    currentCategory = product.category;
  });
  // first write structure you want to return
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{preparedUIComponents}</tbody>
    </table>
  );
}
// Search Bar
function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search ..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />

      <label>
        <input
          type="checkbox"
          value={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        {""}
        Only show products in stock
      </label>
    </form>
  );
}
// Main Component
function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, SetInStockOnly] = useState(false);
  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={SetInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

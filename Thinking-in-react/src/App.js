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

function ProductTable({ products }) {
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
    preparedUIComponents.push(
      <ProductRow product={product} key={product.name} />
    );
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
function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search ..." />
      <br />
      <label>
        <input type="checkbox" />
        {""}
        Only show products in stock
      </label>
    </form>
  );
}
// Main Component
function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

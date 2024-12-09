import "./styles.css";

const PRODDUCTS = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

export default function App() {
  return (
    <div className="App">
      <h1>Loaded success</h1>
      <ShoppingList products={PRODDUCTS} />
    </div>
  );
}

function ShoppingList({ products }) {
  let listitems = [];
  products.forEach((product) => {
    listitems.push(
      <li
        key={product.id}
        style={{ color: product.isFruit ? "magenta" : "darkgreen" }}
      >
        {product.title}
      </li>
    );
  });

  return <ul>{listitems}</ul>;
}

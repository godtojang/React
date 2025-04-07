import Item from "./Item";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Item itemPrice={20000} />
      <Item itemPrice={15000} />
      <Item itemPrice={35000} />
      <Item itemPrice={50000} />
    </div>
  );
}

export default App;

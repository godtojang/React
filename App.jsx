import Option from "./tway/Option";
import Price from "./tway/Price";
import Title from "./tway/Title";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #efefef",
      }}
    >
      <Title></Title>
      <Option></Option>
      <Price></Price>
    </div>
  );
}

export default App;

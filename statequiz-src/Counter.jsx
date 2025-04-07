const Counter = (props) => {
  const buttonStyle = {
    padding: "10px 10px",
    fontSize: "20px",
    border: "none",
  };

  return (
    <div
      style={{
        border: "1px solid #efefef",
        borderRadius: "4px",
        width: "fit-content",
        display: "flex",
      }}
    >
      <button
        onClick={() => {
          props.setNum((prev) => (prev == 1 ? 1 : prev - 1));
        }}
        style={{ ...buttonStyle, color: props.num == 1 ? "#e0e8e8" : "black" }}
      >
        -
      </button>
      <span
        style={{
          padding: "6px 10px",
          textAlign: "center",
        }}
      >
        {props.num}
      </span>
      <button
        onClick={() => {
          props.setNum((prev) => prev + 1);
        }}
        style={{ buttonStyle }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;

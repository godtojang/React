const Input = (props) => {
  return (
    <input
      onChange={(e) => {
        props.func((prev) => e.target.value);
      }}
      type="text"
    />
  );
};

export default Input;

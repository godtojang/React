const Option = (props) => {
  const optionObj = {
    confirm: { color: "#4c5b35", backgroundColor: "#e9f3dc" },
    complete: { color: "9ba1a5", backgroundColor: "#e9edf0" },
    need: { color: "7d4c55", backgroundColor: "#fee9ec" },
  };

  const { color, backgroundColor } = optionObj[props.status];

  return (
    <span
      style={{
        borderRadius: "20px",
        padding: "3px 12px",
        backgroundColor,
        color,
      }}
    >
      {props.contents}
    </span>
  );
};

export default Option;

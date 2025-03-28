const April = (props) => {
  const day = ["일", "월", "화", "수", "목", "금", "토"];
  const color = {
    6: "blue",
    0: "red",
  };

  return (
    <span style={{ color: color[props.dayNum] || "black" }}>
      {day[props.dayNum]}
    </span>
  );
};

export default April;

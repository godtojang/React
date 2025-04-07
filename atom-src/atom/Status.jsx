const Status = (props) => {
  const statusObj = {
    confirm: { name: "확정", color: "#5d7d2b" },
    complete: { name: "완료", color: "#9ba1a5" },
    need: { name: "확정필요", color: "#ea0029" },
  };

  return (
    <span
      style={{
        fontSize: "14px",
        fontWeight: "bold",
        color: statusObj[props.status].color,
      }}
    >
      {statusObj[props.status].name}
    </span>
  );
};

export default Status;

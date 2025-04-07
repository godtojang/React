import Address from "../atom/Address";
import Option from "../atom/Option";
import Status from "../atom/Status";
import Time from "../atom/Time";

const Card = (props) => {
  const cardObj = {
    confirm: "#f5fdeb",
    complete: "#f2f4f6",
    need: "#fff5f6",
  };

  return (
    <div
      style={{
        backgroundColor: cardObj[props.status],
        width: "320px",
        height: "160px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "12px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Time time={props.time} />
        <Status status={props.status} />
      </div>
      <Address address={props.address}></Address>
      <div style={{ display: "flex", gap: "5px" }}>
        {props.options.map((v) => (
          <Option status={props.status} contents={v} />
        ))}
      </div>
    </div>
  );
};

export default Card;

import April from "./April";
import Date from "./Date";

const Calendar = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <April dayNum={props.dayNum} />
      <Date date={props.date} />
    </div>
  );
};

export default Calendar;

import { MdAirlineSeatReclineExtra } from "react-icons/md";

const Seat = () => {
  return (
    <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
      <MdAirlineSeatReclineExtra />
      <span>이코노미 좌석</span>
    </div>
  );
};

export default Seat;

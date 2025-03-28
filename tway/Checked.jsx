import { RiLuggageCartFill } from "react-icons/ri";

const Checked = () => {
  return (
    <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
      <RiLuggageCartFill />
      <span>없음</span>
    </div>
  );
};

export default Checked;

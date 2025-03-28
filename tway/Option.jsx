import Cabin from "./Cabin";
import Checked from "./Checked";
import Seat from "./Seat";

const Option = () => {
  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column" }}>
      <Seat></Seat>
      <Checked></Checked>
      <Cabin></Cabin>
    </div>
  );
};

export default Option;

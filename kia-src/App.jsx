import { useState } from "react";
import CarStatus from "./featured/carstatus/CarStatus";
import NextButton from "./featured/linkbutton/NextButton";

function App() {
  // const [CarStatuses, setCarStatues] = useState([
  //   { title: "후드", status: [false, false, false] },
  //   { title: "프론트펜터(Left)", status: [false, false, false] },
  //   { title: "프론트펜터(Rigft)", status: [false, false, false] },
  // ]);

  const [carStatuses, setCarStatues] = useState([
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ]);

  const click = (x, y) => {
    setCarStatues((prev) => {
      const newPrev = [...prev].map((v) => {
        v[x][y];
      });
      newPrev[x][y] = !newPrev[x][y];
      return newPrev;
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
      <CarStatus
        title="후드"
        statuses={CarStatuses[0]}
        clicked={click}
        row={0}
      />
      <CarStatus
        title="프론트펜터(Left)"
        tatuses={CarStatuses[1]}
        clicked={click}
        row={1}
      />
      <CarStatus
        title="프론트펜터(Rigft)"
        statuses={CarStatuses[2]}
        clicked={click}
        row={2}
      />
      <NextButton />
    </div>
  );
}

export default App;

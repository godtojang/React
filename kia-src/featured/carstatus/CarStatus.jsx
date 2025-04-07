import StatusButton from "./StatusButton";
import StatusChecked from "./StatusChecked";
import StatusTitle from "./StatusTitle";
import { useState } from "react";

const CarStatus = (props) => {
  const typeList = ["덴트", "판금", "교환"];

  return (
    <section>
      <StatusTitle title={props.title} />
      <div style={{ display: "flex" }}>
        {typeList.map((v, i) => (
          <StatusButton
            status={v}
            isClicked={props.statuses[i]}
            setIsClicked={() => {
              props.clicked(props.row, i);
            }}
          />
        ))}
      </div>
      <StatusChecked />
    </section>
  );
};

export default CarStatus;

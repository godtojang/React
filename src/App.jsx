import { useState } from "react";
import Text from "./Text";
import Input from "./Input";

function App() {
  const [value, setValue] = useState("글자 입력");

  const validLength = (value) => 4 <= value.length && value.length <= 12;
  const validSpecial = (value) => [..."!@#&*"].some((v) => value.includes(v));
  const vaildHasNum = (value) =>
    [..."0123456789"].some((v) => value.includes(v));

  return (
    <>
      <Input func={setValue}></Input>
      <Text valid={validLength(value)} text={"글자 길이 4 ~ 12"}></Text>
      <Text
        valid={validSpecial(value)}
        text={"글자에 !,@,#,&,* 중 하나 반드시 포함"}
      ></Text>
      <Text valid={vaildHasNum(value)} text={"글자에 반드시 숫자 포함"}></Text>
    </>
  );
}

export default App;

// input에 입력한 값의 길이가 4 ~ 10글자 넘어가면
// 입력한 값이 유효하지 않음
// 아니면 입력한 값이 유효함

// const [inputValue, setinputValue] = useState("글자 입력");

// return (
//   <>
//     <input
//       onChange={(e) => {
//         setinputValue((prev) =>
//           4 < e.target.value.length && e.target.value.length < 10
//             ? "입력값이 유효"
//             : "입력값이 유효하지 않음"
//         );
//       }}
//       type="text"
//     />
//   </>

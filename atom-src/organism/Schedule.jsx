import Card from "../molecules/Card";

const Schedule = () => {
  const cardsInfo = [
    {
      status: "confirm",
      time: "오전 10:00",
      address: "인천시 부평구 시장로 7 5층",
      options: ["비대면", "셀토스 145마1845"],
    },
    {
      status: "complete",
      time: "오후 7:00",
      address: "신촌 마포구 연세대입구",
      options: ["비대면", "모닝 115마1234", "간지 쩖"],
    },
    {
      status: "need",
      time: "오전 4:00",
      address: "우리집 컴퓨터 앞",
      options: ["대면", "리버풀의 배신자 알렉산더 아놀드", "빨리 쳐 나가라"],
    },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {cardsInfo.map((v) => (
        <Card {...v} />
      ))}
    </div>
  );
};

export default Schedule;

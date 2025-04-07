const Size = (props) => {
  const sizeObj = {
    xSmall: "XS",
    small: "S",
    medium: "M",
    large: "L",
    xLarge: "XL",
    xxLarge: "XXL",
  };

  return <span>{sizeObj[props.size] || "M"}</span>;
};

export default Size;

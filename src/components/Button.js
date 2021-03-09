const Button = ({
  color = "white",
  background = "#333",
  handleClickFunction,
}) => {
  const insideValue = "butonun içindeki bir değer";
  return (
    <input
      type="button"
      value="Save"
      onClick={() => handleClickFunction(insideValue)}
      style={{
        width: 100,
        height: 50,
        backgroundColor: background,
        color,
        borderRadius: 8,
      }}
    />
  );
};

export default Button;

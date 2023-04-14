type Props = {
  style: "green" | "red";
  value: string;
  callBack?: Function;
};

const Button: React.FC<Props> = ({ style, value, callBack = () => {} }) => {
  const buttonStyle =
    style === "green"
      ? "bg-green-800 rounded-full p-2 text-sm border hover:bg-green-700 active:border-black"
      : "bg-red-800 rounded-full p-2 text-sm border hover:bg-red-700 active:border-black";

  const onClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    callBack();
  };

  return (
    <button onClick={onClickHandler} className={buttonStyle}>
      {value}
    </button>
  );
};

export default Button;

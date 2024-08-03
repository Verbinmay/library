import sprite from "../images/sprite.svg";
import s from "./Button.module.css";

type ButtonPropsType = {
  style: {
    backgroundColor?: string;
  };
  iconId: string;
};

export const Button = (props: ButtonPropsType) => {
  return (
    <button className={s.btn} style={props.style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <use xlinkHref={`${sprite}#${props.iconId}`}></use>
      </svg>
    </button>
  );
};

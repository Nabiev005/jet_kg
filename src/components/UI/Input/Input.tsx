import { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ ...props }: InputProps) => {
  return <input className={styles.input} {...props} />;
};

export default Input;

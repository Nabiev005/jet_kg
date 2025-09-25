import { ButtonHTMLAttributes } from "react";  // 👈 кошуу керек
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button = ({ children, variant = "primary", ...props }: ButtonProps) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;

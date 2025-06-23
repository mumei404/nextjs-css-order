import {ReactNode} from "react"
import styles from "./button.module.css";

type Props = {
	className?: string;
	children: ReactNode;
}

export function Button({className = "", children}: Props) {
  return (
		<button type="button" className={`${styles.btn} ${className}`}>
			{children}
		</button>
  );
}

import {Button} from "@/components/button";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
		<main className={styles.main}>
			<h1>app router top</h1>
			<div>
				<Button className={styles.btn_override}>sample</Button>
			</div>
			<Link href="/about">go to app router about</Link>
		</main>
  );
}

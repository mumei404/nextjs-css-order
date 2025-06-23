import {Button} from "@/components/button";
import styles from "./index.module.css";
import Link from "next/link";

export default function Index() {
  return (
		<main className={styles.main}>
			<h1>pages router top</h1>
			<div>
				<Button className={styles.btn_override}>sample</Button>
			</div>
			<Link href="/pages/about">go to pages router about</Link>
		</main>
  );
}

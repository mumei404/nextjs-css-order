import {Button} from "@/components/button";
import styles from "./page.module.css";
import Link from "next/link";

export default function About() {
  return (
		<main className={styles.main}>
			<h1>app router about</h1>
			<div>
				<Button>sample</Button>
			</div>
			<Link href="/">go to app router top</Link>
		</main>
  );
}

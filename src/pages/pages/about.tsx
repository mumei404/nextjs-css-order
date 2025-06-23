import {Button} from "@/components/button";
import styles from "./about.module.css";
import Link from "next/link";

export default function About() {
  return (
		<main className={styles.main}>
			<h1>pages router about</h1>
			<div>
				<Button>sample</Button>
			</div>
			<Link href="/">go to pages router top</Link>
		</main>
  );
}

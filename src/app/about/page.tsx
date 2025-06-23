import {Button} from "@/components/button";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
		<main className={styles.main}>
			<h1>about</h1>
			<div>
				<Button>sample</Button>
			</div>
			<Link href="/">go to top</Link>
		</main>
  );
}

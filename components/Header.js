import Link from "next/link";
import styles from '@/styles/Header.module.css'
export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>
            <Link href='/'>Bloody Buddy</Link>
        </div>
        <nav>
            <ul>
                <li>
                    <Link href='/blood-groups'>Available Buddies</Link>
                </li>
                <li>
                    <Link href='/buddy/add'>Add Buddy</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

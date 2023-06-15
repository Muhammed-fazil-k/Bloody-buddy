import styles from '@/styles/Footer.module.css'
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; {(new Date()).getFullYear()}</p>
    </footer>
  )
}

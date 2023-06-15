import Head from "next/head";
import styles from '@/styles/Layout.module.css'
import Header from "./Header";
import Footer from "./Footer";
export default function Layout({ children, title, keywords, description }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header/>
      <div className={styles.container}>

      {children}

      </div>
      <Footer/>
    </div>
  );
}

Layout.defaultProps = {
  title: "Bloody Buddy || Donate blood , Be a Hero",
  keywords:
    "blood,donation,hero,bloody buddy,donation camp,a positive, b positive",
  description:
    "Bloody Buddy is a comprehensive web application designed to streamline and enhance the process of blood donation management. With a user-friendly interface and powerful features, Bloody Buddy serves as the ultimate platform for connecting blood donors, recipients, and blood banks in a seamless and efficient manner. ",
};

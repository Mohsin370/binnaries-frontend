import React from "react";
import styles from "./home.module.css";
import Navbar from '../../components/navbar/navbar';
import HomeSVG from '../../assets/images/home.svg'

function Home() {
  return(
  <div className={styles.main}>
    <Navbar></Navbar>
    <div className={styles.test}>Home</div>
    <img src={HomeSVG} className={styles.HomeSvg}/>
  </div>
  )
}

export default Home;

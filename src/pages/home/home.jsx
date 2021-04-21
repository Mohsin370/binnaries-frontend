import React from "react";
import styles from "./home.module.css";
import Navbar from '../../components/navbar/navbar'

function Home() {
  return(
  <div>
    <Navbar></Navbar>
    <div className={styles.test}>Home</div>
  </div>
  )
}

export default Home;

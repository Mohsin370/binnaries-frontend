import React from "react";
import styles from "./home.module.css";
import Navbar from '../../components/navbar/navbar';
import HomeSVG from '../../assets/images/home.svg';
import { Button } from 'react-bootstrap'

function Home() {
  return (
    <div className={styles.main}>
      <Navbar></Navbar>
      <div className="row m-auto pl-5">
        <div className={[styles.animation_main, "col-md-6 text-center p-5"].join(" ")}>
          <div className={styles.landing_text}>Grow & Manage Business</div>
          <h4 className="m-auto w-75 pt-5">Binaries is a platform where you can manage your business
          deals, records and your documents. Let's make the
          business in flow. </h4>
          <Button type="button" className="btn btn-primary mt-5 btn-lg">Get Started</Button>
        </div>
        <div className="col-md-6 d-none d-sm-block text-center">
          <img src={HomeSVG} className={styles.HomeSvg} alt="business Logo" />
        </div>
      </div>
    </div>
  )
}

export default Home;

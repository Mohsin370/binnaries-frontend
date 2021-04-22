import React from "react";
import styles from './dashboard.module.css';
import {connect} from 'react-redux'

function Dashboard() {
  return <div className={styles.test}>Dashboard</div>;
}

const mapPropsToStore = (state)=>{
  return{
    state
  }
}

export default connect(mapPropsToStore)(Dashboard);

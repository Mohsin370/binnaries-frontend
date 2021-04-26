import React from "react";
import styles from './dashboard.module.css';
import { connect } from 'react-redux';
import { addCounter } from '../../redux/actions/actions';
import SideNav from '../../components/dashboard_Nav/sideNav'

function Dashboard(props) {

  const updateCounter = () => {
    console.log(props);
    props.testme()
  }

  return (
    <div className={styles.dashboardMain}>
      <div className="row m-auto h-100">
        <div className="col-md-3 col-xl-2 p-0" style={{backgroundColor:"#0d2e70"}}>
          <SideNav></SideNav>
        </div>
        <div className="col-md-9 col-xl-10">
          <div>{props.loginReducer.counter}</div>
          <button className="mt-5" onClick={updateCounter}>Add Counter</button>
        </div>
      </div>
    </div>
  )

}



const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, addCounter)(Dashboard);

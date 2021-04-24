import React from "react";
// import styles from './dashboard.module.css';
import { connect } from 'react-redux'
import {addCounter} from '../../redux/actions/actions'

function Dashboard(props) {

  const updateCounter = () => {
    console.log(props);
    props.testme()
  }

  return (
    <div className="text-center mt-5">
      <div>{props.loginReducer.counter}</div>
      <button className="mt-5" onClick={updateCounter}>Add Counter</button>
    </div>
  )

}



const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, addCounter)(Dashboard);

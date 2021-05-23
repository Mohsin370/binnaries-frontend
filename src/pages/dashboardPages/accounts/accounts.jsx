import React,{useState} from 'react';
import DashboardHOC from '../dashboardHOC';
import { Button } from 'react-bootstrap';
import AccountsModal from '../../../components/accounts_Modal/accountsModal';

function Accounts() {
  const [show, setShow] = useState(false);

  const closeModal = () =>{
    setShow(false)
  }

  return (
    <div>
      <span className="float-right m-4">
        <Button onClick={() => setShow(true)} >Add Bank Account</Button>
        <AccountsModal show={show} closeModal = {closeModal}></AccountsModal>
      </span>

    </div>
  )
}


export default DashboardHOC(Accounts);
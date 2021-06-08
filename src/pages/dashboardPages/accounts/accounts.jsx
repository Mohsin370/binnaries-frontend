import React, { useState, useEffect } from 'react';
import DashboardHOC from '../dashboardHOC';
import { Button } from 'react-bootstrap';
import AccountsModal from '../../../components/accounts_Modal/accountsModal';
import AccountCard from '../../../components/account_card/accountCard';
import {getAccounts} from '../../../api/api';
function Accounts() {
  const [show, setShow] = useState(false);

  const closeModal = () => {
    setShow(false)
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    getAccounts(token).then((res) => {
      if (res.data.message === "success") {

      } else if (res.data.message === "exists") {
      }

    }).catch((err) => {
      console.log({ err })
    })
  }, [])

  return (
    <div className="mt-3">
      <AccountsModal show={show} closeModal={closeModal}></AccountsModal>
      <h3 className="text-center">Manage your bank accounts here</h3>
      <div className="text-right m-4">
        <Button onClick={() => setShow(true)} >Add Bank Account</Button>
      </div>
      <div className="mt-5 pt-5 ml-5">
        <AccountCard cardNo="0291100686321010"></AccountCard>
      </div>
    </div>
  )
}


export default DashboardHOC(Accounts);
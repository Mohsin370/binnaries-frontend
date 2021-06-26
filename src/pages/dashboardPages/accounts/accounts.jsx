import React, { useState, useEffect } from "react";
import DashboardHOC from "../dashboardHOC";
import { Button, Row } from "react-bootstrap";
import AccountsModal from "../../../components/accounts_Modal/accountsModal";
import AccountCard from "../../../components/account_card/accountCard";
import { getAccounts, deleteAccounts } from "../../../api/api";
function Accounts() {
  const [show, setShow] = useState(false);
  const [accountDetails, setAccountDetails] = useState([]);
  const [EditData, setEditData] = useState({});

  const closeModal = () => {
    setShow(false);
  };

  useEffect(() => {
    getUserAccounts();
  }, []);

  const getUserAccounts = () => {
    const token = localStorage.getItem("token");
    getAccounts(token)
      .then((res) => {
        if (res.data.message === "success") {
          setAccountDetails(res.data.accounts);
        } else if (res.data.message === "exists") {
        }
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  const deleteCard = (id) => {
    const token = localStorage.getItem("token");
    const data = {
      token,
      id,
    };
    deleteAccounts(data)
      .then((res) => {
        if (res.data.message === "success") {
          getUserAccounts();
        } else if (res.data.message === "exists") {
        }
      })
      .catch((err) => {
        console.log({ err });
      });
  };
  const editCard = (data) => {
    setShow(true);
    setEditData(data);
  };

  return (
    <div className="mt-3">
      <AccountsModal
        show={show}
        closeModal={closeModal}
        updateData={getUserAccounts}
        data={EditData}
      ></AccountsModal>
      <h3 className="text-center">Manage your bank accounts here</h3>
      <div className="text-right m-4">
        <Button
          onClick={() => {
            setShow(true);
            setEditData("");
          }}
        >
          Add Bank Account
        </Button>
      </div>
      <Row>
        {accountDetails.map((res) => {
          return (
            <div className="mt-5 pt-5 ml-5">
              <AccountCard
                cardNo={res.card_no}
                accTitle={res.acc_title}
                bankName={res.bank_name}
                accNo={res.acc_no}
                deleteItem={() => deleteCard(res.id)}
                editItem={() => editCard(res)}
              ></AccountCard>
            </div>
          );
        })}
      </Row>
    </div>
  );
}

export default DashboardHOC(Accounts);

import "./App.css";
import ExpeneList from "./component/ExpeneList";
import ExpenseForm from "./component/ExpenseForm";
import Alert from "./component/Alert";
import uuid from "react-uuid";
import React, { useState } from "react";
import { MdSetMeal } from "react-icons/md";
const myData = [
  { id: uuid(), charge: "rent", amount: 2000 },
  { id: uuid(), charge: "car amount", amount: 1500 },
  { id: uuid(), charge: "credit", amount: 1000 },
];
console.log(myData);
function App() {
  const [expense, setexpense] = useState(myData);
  const [amount, setamount] = useState("");
  const [charge, setcharge] = useState("");
  const [alert, setalert] = useState({ show: false });
  const [edit, setedit] = useState(false);
  const [id, setid] = useState(0);
  const clearall = () => setexpense([]);

  const handleCharge = (e) => {
    setcharge(e.target.value);
  };

  const handleEdit = (id) => {
    let edititem = expense.find((item) => item.id === id);
    let { charge, amount } = edititem;
    setcharge(charge);
    setamount(amount);
    setedit(true);
    setid(id);
  };
  const handleDelete = (id) => {
    const newitems = expense.filter((el) => el.id !== id);
    handleAlert({
      text: "item deleted",
      type: "danger",
    });
    setexpense(newitems);
  };

  const handleAmount = (e) => {
    setamount(e.target.value);
  };
  const handleAlert = ({ text, type }) => {
    setalert({ show: true, text, type });
    setTimeout(() => {
      setalert({ show: false });
    }, 3000);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        let elmemtAfter = expense.map((el) => {
          return el.id === id ? { ...el, charge, amount } : el;
        });
        setexpense(elmemtAfter);
        setedit(false);
      } else {
        const single = { id: uuid(), charge, amount };
        setexpense([...expense, single]);
        handleAlert({ text: "Item Added", type: "success" });
      }

      setcharge("");
      setamount("");
    } else {
      handleAlert({
        text: "charge can't be empety value and amount has to bigger than 0",
        type: "danger",
      });
    }
  };
  return (
    <div>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handlesubmit={handlesubmit}
          edit={edit}
        />
        <ExpeneList
          expenses={expense}
          clearall={clearall}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </main>
      <h1>
        Total spending"
        <span className="total">
          $
          {expense.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
    </div>
  );
}

export default App;

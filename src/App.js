import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { addCashAction, getCashAction } from "./store/cashReducer";
import {
  addCustomerAction,
  removeCustomerAction,
} from "./store/customerReducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);
  console.log(customers);

  const addCash = (cash) => {
    dispatch(addCashAction(cash));
  };

  const getMoney = (cash) => {
    dispatch(getCashAction(cash));
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };
  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div className="block">
      <div
        style={{
          display: "flex",
        }}
      >
        <div style={{ paddingRight: "10px", fontSize: "45px" }}>{cash}</div>
        <button onClick={() => addCash(Number(prompt("Введите сумму")))}>
          Добавить
        </button>
        <button onClick={() => getMoney(Number(prompt("Введите сумму")))}>
          Убавить
        </button>
        <button onClick={() => addCustomer(prompt("Введите имя"))}>
          Добавить пользователя
        </button>
      </div>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div onClick={() => removeCustomer(customer)}>{customer.name}</div>
          ))}
        </div>
      ) : (
        <div style={{ fontSize: "2rem", paddingTop: "10px" }}>
          Нет клиентов !
        </div>
      )}
    </div>
  );
}

export default App;

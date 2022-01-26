import { useDispatch, useSelector } from "react-redux";
import "./index.css";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);
  console.log(customers);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getMoney = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch({ type: "ADD_CUSTOMER", payload: customer });
  };
  const removeCustomer = (customer) => {
    dispatch({ type: "REMOVE_CUSTOMERS", payload: customer.id });
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
        <button onClick={() => getMoney(Number(prompt("Введите сумму")))}>
          Удалить пользователя
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

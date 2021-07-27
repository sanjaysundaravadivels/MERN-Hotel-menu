import React from "react";
import { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Alert from "./Alert";
import Payment from "./Payment";
const Orders = ({ listitem, settingList }) => {
  const [items, setItems] = useState(listitem);
  const [orders, setOrders] = useState({});
  const [alert, setAlert] = useState({ state: false, id: 0 });
  const [final, setFinal] = useState(false);
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState({
    show: false,
    msg: "",
    type: "",
    height: "",
    width: "",
  });

  const [ids, setIds] = useState(0);
  let dict = {};
  items.map((item) => {
    dict[item[0]._id] = 0;
  });
  let dict1 = {};
  items.map((item) => {
    dict1[item[0]._id] = 0;
  });
  items.map((item) => {
    dict[item[0]._id]++;
  });

  const trash = (id, title) => {
    const newlist = items.filter((item) => item[0]._id !== id);
    setItems(newlist);
    settingList(newlist);
    showAlert(true, "The item removed successfully", "");
  };
  const edit = (id) => {
    setAlert({ state: true, id: id });
    setCount(dict[id]);
  };
  const change = (e) => {
    e.preventDefault();
    let newAlter = items.filter((item) => item[0]._id !== ids);
    var i;
    for (i = 0; i < count; i++) {
      let temp = items.filter((item) => item[0]._id === ids);
      newAlter.push(temp[0]);
    }
    setItems(newAlter);
    setAlert({ state: false, id: 0 });
  };
  const showAlert = (show = false, msg = "", type = "") => {
    var element = document.getElementById("listss");
    var positionInfo = element.getBoundingClientRect();
    var height = positionInfo.height;
    var width = positionInfo.width;

    setMessage({ show, msg, type, height, width });
  };
  const setAll = (id) => {
    showAlert(true, "The changes have done successfully", "");
    setIds(id);
  };

  let amount = 0;

  const confirm = () => {
    const order = [];
    items.map((item) => {
      const title = item[0].title;
      const count = dict[item[0]._id];
      const price = item[0].price * count;

      const temp = {
        title,
        count,
        price,
      };
      order.push(temp);
    });
    const temp = { order, amount };

    setOrders(temp);
    setFinal(true);
  };

  if (final) {
    return <Payment orders={orders} />;
  }

  return (
    <>
      <h4>
        <b>
          <i>Your Orders</i>
        </b>
      </h4>

      {message.show && <Alert {...message} removeAlert={showAlert} />}

      <br />
      <br />
      <div className="list" id="listss">
        {items.map((list) => {
          const item = list[0];

          dict1[item._id]++;
          const { id, title, img, price } = item;
          const myArr = img.split("/");
          const url = `https://drive.google.com/thumbnail?id=${myArr[5]}`;
          amount += price;

          if (dict1[item._id] === dict[item._id]) {
            return (
              <article key={id} className="menu-item">
                <img src={url} alt={title} className="photo" />
                <div className="item-info">
                  <header>
                    <h4>{title}</h4>
                    <h4 className="price">₹. {price * dict[item._id]}</h4>
                  </header>
                  <p className="item-text">
                    <i>No of Items :{dict[item._id]}</i>

                    {alert.state && item._id === alert.id && (
                      <form onSubmit={change}>
                        <input
                          type="number"
                          className="form"
                          value={count}
                          onChange={(e) => setCount(e.target.value)}
                        />
                        <button
                          type="submit"
                          className="form-btn"
                          onClick={() => setAll(item._id)}
                        >
                          {" "}
                          Confirm
                        </button>
                      </form>
                    )}
                    <div className="butt">
                      <button
                        className="but"
                        onClick={() => {
                          edit(item._id);
                        }}
                      >
                        <FaEdit />
                      </button>
                      &nbsp; &nbsp;
                      <button
                        type="button"
                        className="but"
                        onClick={() => trash(item._id, item.title)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </p>
                </div>
              </article>
            );
          }
        })}
      </div>
      <br />
      <br />
      <br />
      <h4 className="amount">
        <b>
          <i>Total amount is : ₹ {amount}</i>
        </b>
      </h4>
      <br />
      <br />
      <br />
      {amount !== 0 && (
        <button className="amount filter-btn" onClick={() => confirm()}>
          Confirm your order
        </button>
      )}
    </>
  );
};

export default Orders;

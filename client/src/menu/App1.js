import React, { useEffect, useState } from "react";
import axios from "axios";
import Menu from "./Menu";
import Orders from "./Orders";
import Categories from "./Categories";
import Spinner from "./Spinner";
import { FaTimes } from "react-icons/fa";
import { useGlobalCOntext } from "./context";
import { FaBars } from "react-icons/fa";

function App1() {
  const { isSidebarOpen, openSidebar, closeSidebar } = useGlobalCOntext();
  const [num, setnum] = useState(0);
  const [alert, setAlert] = useState(false);
  const [list, setList] = useState([]);
  const [items, setItems] = useState([]);
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await axios.get("/api/menu");
      setItems(res.data);
      setMenu(res.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  const allCategories = ["all", ...new Set(items.map((item) => item.category))];

  const setting = (id) => {
    const newList = items.filter((item) => item.title === id);
    setList([...list, newList]);
  };

  const yourOrders = () => {
    const newal = !alert;

    setAlert(newal);
  };
  const filterItems = (category) => {
    if (category === "all") {
      setMenu(items);
      return;
    }
    const newItem = items.filter((item) => item.category === category);
    setMenu(newItem);
  };
  const settingList = (nl) => {
    setList(nl);
  };
  const reload = () => {
    window.location.reload(1);
  };
  if (items.length === 0) {
    return (
      <main>
        <section className="menu section">
          <div className="gbb">
            <div className="bgg">
              <div className="title">
                <h2>Our menu</h2>

                <div className="underline"></div>
                <div className="sidebar-toggle ">
                  {isSidebarOpen || (
                    <button className="side" onClick={openSidebar}>
                      <FaBars />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Spinner />
        </section>
      </main>
    );
  }

  return (
    <main className="menu-page">
      <section className="menu section">
        <div className="gbb">
          <div className="bgg">
            <div className="title">
              <h2>Our menu</h2>

              <div className="underline"></div>
              <div className="sidebar-toggle ">
                {isSidebarOpen || (
                  <button className="side" onClick={openSidebar}>
                    <FaBars />
                  </button>
                )}
              </div>
            </div>
            <Categories
              yourOrders={yourOrders}
              filterItems={filterItems}
              categories={allCategories}
              alert={alert}
            />
          </div>
        </div>
        {alert ? (
          <Orders
            listitem={list}
            settingList={settingList}
            yourOrders={yourOrders}
          />
        ) : (
          <Menu mitems={menu} setting={setting} />
        )}
      </section>
    </main>
  );
}

export default App1;

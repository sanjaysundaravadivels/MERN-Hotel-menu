import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalCOntext } from "./context";
import { Link } from "react-router-dom";

const Categories = ({ filterItems, categories, yourOrders, alert }) => {
  const { isSidebarOpen, closeSidebar } = useGlobalCOntext();

  return (
    <div className={isSidebarOpen ? `btn-container sidebar` : `btn-container`}>
      <Link to="/">
        <button className="filter-btn">Home</button>
      </Link>
      {alert ||
        categories.map((category, index) => {
          return (
            <button
              className="filter-btn"
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          );
        })}
      <button className="filter-btn" onClick={() => yourOrders()}>
        {alert ? "Back to Menu" : "Your Orders"}
      </button>
      {alert ||
        (isSidebarOpen && (
          <button type="button" onClick={closeSidebar} className="close">
            <FaTimes />
          </button>
        ))}
    </div>
  );
};

export default Categories;

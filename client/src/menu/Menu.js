import React from "react";

const Menu = ({ mitems, setting }) => {
  return (
    <div className="section-center">
      {mitems.map((item) => {
        const { id, title, img, desc, price } = item;
        const myArr = img.split("/");
        const url = `https://drive.google.com/thumbnail?id=${myArr[5]}`;
        return (
          <article key={id} className="menu-item">
            <img src={url} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">₹ {price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
            <button className="filter-btn" onClick={() => setting(title)}>
              Order
            </button>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;

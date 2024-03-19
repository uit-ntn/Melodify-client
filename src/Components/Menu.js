import React, { useEffect } from "react";

function Menu({ title, menuObject }) {
  useEffect(() => {
    const allLi = document.querySelectorAll(".MenuContainer ul li");

    function changeMenuActive() {
      allLi.forEach((li) => {
        li.classList.remove("active");
      });
      this.classList.add("active");
    }

    allLi.forEach((li) => {
      li.addEventListener("click", changeMenuActive);
    });
  }, []);

  return (
    <div className="MenuContainer">
      <p className="title">{title}</p>
      <ul>
        {menuObject &&
          menuObject.map((menu) => (
            <li key={menu.id}>
              <a href="#">
                <i>{menu.icon}</i>
                <span>{menu.name}</span>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export { Menu };

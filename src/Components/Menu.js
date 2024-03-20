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
    <div className="MenuContainer my-2.5 mx-0 bg-[rgba(34,34,34,0.6)] backdrop-blur-[10px] w-full p-[20px_25px] rounded-[10px] mb-2">
      <p className="text-gray-500 text-base font-bold mb-2.5 uppercase">
        {title}
      </p>
      <ul className="w-full p-0">
        {menuObject &&
          menuObject.map((menu) => (
            <li
              key={menu.id}
              className="list-none m-[5px_0] w-3/5 p-[5px_0] relative"
            >
              <a
                href="#"
                className="no-underline text-[#848484] flex items-center text-base hover:text-white"
              >
                <i className="text-lg mr-4 translate-y-[2px]">{menu.icon}</i>
                <span>{menu.name}</span>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export { Menu };

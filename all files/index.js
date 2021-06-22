 const hamburgermenu = document.getElementById("hamburgermenu");
      const mobileNavDropDown = document.querySelector(
        ".mobile__navbar__items"
      );
      window.addEventListener("click", () => {
        if (mobileNavDropDown.classList.contains("hamburger__menu__close"))
          return mobileNavDropDown.classList.remove("hamburger__menu__close");
        return mobileNavDropDown.classList.add("hamburger__menu__close");
      });
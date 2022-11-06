import * as S from "./HeaderStyled";
import { useState } from "react";
import logo from "../assets/logo.svg";
import user from "../assets/fi_user.png";
import fav from "../assets/fi_fav.png";
import search from "../assets/fi_search.png";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState("disabled");
  const [menuScroll, setMenuScroll] = useState("fixed");

  document.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      setMenuScroll("scrolled");
    } else {
      setMenuScroll("fixed");
    }
  });

  const toggleState = () => {
    if (toggleMenu === "disabled") {
      setToggleMenu("active");
    } else {
      setToggleMenu("disabled");
    }
  };

  //window.scrollTo(0, 750)
  const scrollTop = (param) => {
    window.scrollTo(0, param);
    setToggleMenu("disabled");
  };

  return (
    <S.Header id="header" className={menuScroll}>
      <S.HeaderLogo>
        <S.ImgHeader
          src={logo}
          alt="logo-empresa"
          onClick={() => scrollTop(0)}
        />
        Homeyou
      </S.HeaderLogo>
      <S.Nav id="nav" className={toggleMenu}>
        <S.BtnMobile
          onClick={() => toggleState()}
          aria-label="Abrir Menu"
          id="btn-mobile"
          aria-haspopup="true"
          aria-controls="menu"
          aria-expanded="false"
        >
          <S.Hamburger id="hamburger"></S.Hamburger>
        </S.BtnMobile>
        <S.MenuUl id="menu" role="menu">
          <li>
            <S.MenuA href="#" onClick={() => setToggleMenu("disabled")}>
              Início
            </S.MenuA>
          </li>
          <li>
            <S.MenuA href="#" onClick={() => setToggleMenu("disabled")}>
              Galeria
            </S.MenuA>
          </li>
          <li>
            <S.MenuA href="#" onClick={() => setToggleMenu("disabled")}>
              Contato
            </S.MenuA>
          </li>
          <li>
            <S.MenuA href="#" onClick={() => setToggleMenu("disabled")}>
              <img src={user} alt="icone de user" />
            </S.MenuA>
          </li>
          <li>
            <S.MenuA href="#" onClick={() => setToggleMenu("disabled")}>
              <img src={fav} alt="icone de favorito" />
            </S.MenuA>
          </li>
          <li>
            <S.MenuA href="#" onClick={() => setToggleMenu("disabled")}>
              <img src={search} alt="icone de pesquisa" />
            </S.MenuA>
          </li>
        </S.MenuUl>
      </S.Nav>
    </S.Header>
  );
};

export default Header;

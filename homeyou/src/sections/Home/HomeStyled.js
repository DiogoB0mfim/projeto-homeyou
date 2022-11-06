import styled from "styled-components";

// *Estilização do container principal
export const ContainerHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6%;
  background-color: #e7e7e7;

  @media (max-width: 1680px) {
    gap: 9%;
  }

  @media (max-width: 1440px) and (min-width: 1237px) {
    gap: 15%;
  }

  @media (max-width: 768px) {
    height: 50vh;
  }
`;

// *Estilização do container de informações
export const ContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;

  @media (max-width: 1237px) and (min-width: 768px) {
    width: 40%;
  }

  @media (max-width: 768px) {
    width: 85%;
  }
`;

// *Estilização do H2 do container de informações
export const H2Infos = styled.h2`
  font-weight: 600;
  font-size: 2.3rem;

  @media (max-width: 1680px) {
    font-size: 2rem;
  }

  @media (max-width: 1440px) and (min-width: 1237px) {
    font-size: 1.8rem;
  }

  @media (max-width: 1237px) and (min-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

// *Estilização do P do container de informações
export const PInfos = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: #797979;

  @media (max-width: 1440px) and (min-width: 1237px) {
    font-size: 1.1rem;
  }

  @media (max-width: 1237px) and (min-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

// *Estilização da imagem da section
export const ImgHero = styled.img`
  @media (max-width: 1680px) and (min-width: 768px) {
    width: 35%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

// *Estilização da div dos botões
export const DivButton = styled.div`
  display: flex;
  gap: 30px;
`;

// *Estilização do botão de contato
export const ButtonContact = styled.button`
  background-color: #272727;
  border: none;
  color: #ffff;
  padding: 12px 32px;
  font-weight: 600;
  cursor: pointer;
  transform: skew(0deg);

  &:before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    width: 0;
    height: 100%;
    background-color: #000;
    z-index: -1;
    transition: 1000ms;
  }
  &:hover::before {
    width: 100%;
  }
`;

// *Estilização do botão de mais sobre nós
export const ButtonAbout = styled.button`
  background-color: transparent;
  border: none;
  font-weight: 600;
  border-bottom: 1px solid #000;
  cursor: pointer;
`;

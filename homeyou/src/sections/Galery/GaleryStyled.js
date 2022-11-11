import styled from "styled-components";

// *Estilização do container de informações
export const ContainerInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #f9f9f9;
`;

// *Estilização do H2 do container de informações
export const H2infos = styled.h2`
  color: #272727;
`;

// *Estilização do P do container de informações
export const Pinfos = styled.p`
  font-size: 18px;
  text-align: center;
  color: #797979;
  width: 40%;
  margin-top: -3px;
  padding-bottom: 10px;

  @media (max-width: 1440px) and (min-width: 768px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

// *Estilização do container de swipe
export const ContainerSwiper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  background-color: #f9f9f9;
  padding-bottom: 50px;

  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;

// *Estilização de cada swipe
export const Project = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// *Estilização de cada imagem do swipe
export const ImgSwiper = styled.img`
  margin-left: 10px;

  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;

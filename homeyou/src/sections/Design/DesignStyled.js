import styled from "styled-components";

// *Estilização do Container principal
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12%;
  height: 70vh;

  @media (max-width: 768px) {
    height: 45vh;
  }
`;

// *Estilização do Container de informações
export const ContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;

  @media (max-width: 768px) {
    width: 85%;
    align-items: center;
  }
`;

// *Estilização da div com informações
export const DivInfos = styled.div`
  background-color: #272727;
  color: #ffff;
  padding: 20px;

  @media (max-width: 768px) {
    width: 95%;
    text-align: center;
  }
`;

// *Estilização do H2 das informações
export const H2Infos = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;

  @media (max-width: 1440px) and (min-width: 1080px) {
    font-size: 1.4rem;
  }

  @media (max-width: 1080px) and (min-width: 768px) {
    font-size: 1.3rem;
  }
`;

// *Estilização do P das informações
export const PInfos = styled.p`
  font-size: 1.1rem;
  text-align: justify;

  @media (max-width: 1440px) and (min-width: 1080px) {
    font-size: 1rem;
  }

  @media (max-width: 1080px) and (min-width: 768px) {
    font-size: 0.86rem;
  }
`;

// *Estilização da tag A das informações
export const AncoraAbout = styled.a`
  color: #272727;
  width: 55%;
  cursor: pointer;
  font-size: 1.13rem;
  width: 100%;
  padding-top: 15px;

  @media (max-width: 1440px) and (min-width: 1080px) {
    font-size: 1rem;
  }

  @media (max-width: 1080px) and (min-width: 768px) {
    font-size: 0.86rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

// *Estilização da imagem da section
export const ImgDesign = styled.img`
  @media (max-width: 1440px) and (min-width: 769px) {
    width: 35%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

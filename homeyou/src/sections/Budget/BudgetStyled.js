import styled from "styled-components";

// *Estilização do Container
export const ContainerBudget = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  height: 30vh;
`;

// *Estilização da tag H2 do Container
export const h2Budget = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;

  @media (max-width: 1440px) and (min-width: 1080px) {
    font-size: 1.4rem;
  }

  @media (max-width: 1080px) and (min-width: 768px) {
    font-size: 1.3rem;
  }
`;

// *Estilização da tag P do Container
export const PBudget = styled.p`
  font-size: 1.1rem;
  text-align: justify;
  color: #797979;
  margin-top: -3px;
  padding-top: 10px;

  @media (max-width: 1440px) and (min-width: 1080px) {
    font-size: 1rem;
  }

  @media (max-width: 1080px) and (min-width: 768px) {
    font-size: 0.86rem;
  }

  @media (max-width: 768px) {
    width: 90%;
    text-align: center;
  }
`;

// *Estilização do Button
export const ButtonBudget = styled.button`
  background-color: #ffff;
  border: none;
  color: #000;
  padding: 12px 32px;
  font-weight: 500;
  cursor: pointer;
  transform: skew(0deg);
  font-size: 1.1rem;
  border: 1px solid black;
  transition: 1000ms;

  &:before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    width: 0;
    height: 100%;
    background-color: #272727;
    z-index: -1;
    transition: 1000ms;
  }
  &:hover::before {
    width: 100%;
  }

  &:hover {
    color: white;
    transition: 1000ms;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

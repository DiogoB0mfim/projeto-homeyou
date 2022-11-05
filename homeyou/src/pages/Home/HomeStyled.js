import styled from "styled-components"

export const ContainerHero = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6%;
    background-color: #E7E7E7;

    @media (max-width: 1680px) {
        gap: 9%;
    }

    @media (max-width: 1440px) and (min-width: 1237px) {
        gap: 15%;
    }
`

export const ContainerInfos = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%; 
`

export const H2Infos = styled.h2`
    font-weight: 600;
    font-size: 2.3rem;

    @media (max-width: 1680px) {
        font-size: 2rem;
    }

    @media (max-width: 1440px) and (min-width: 1237px) {
        font-size: 1.8rem;
    }
`

export const PInfos = styled.p`
    font-weight: 500;
    font-size: 18px;
    color: #797979;

    @media (max-width: 1440px) and (min-width: 1237px) {
        font-size: 1.1rem;
    }
`

export const ImgHero = styled.img`
    @media (max-width: 1680px) {
        width: 35%;
    }
`
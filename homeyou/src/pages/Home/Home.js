import * as S from "./HomeStyled";
import homeHeroSection from "../../assets/img-hero-section.png";

const Home = () => {
  return (
    <>
      <S.ContainerHero>
        <S.ContainerInfos>
          <S.H2Infos>
            Ajudar você a encontrar o melhor conforto, é nossa prioridade.
          </S.H2Infos>
          <S.PInfos>
            Encontre uma variedade de propriedades que combinam com você.
            Esqueça todas as dificuldades em encontrar uma residência
          </S.PInfos>
          <div>
            <button>Entre em contato</button>
            <button>Mais sobre nós</button>
          </div>
        </S.ContainerInfos>
        <S.ImgHero src={homeHeroSection} alt="imagem de uma casa" />
      </S.ContainerHero>
    </>
  );
};

export default Home;

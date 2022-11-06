import * as S from "./DesignStyled";
import imgSection from "../../assets/img-design-section.png";

const Design = () => {
  return (
    <>
      <S.Container>
        <S.ImgDesign src={imgSection} alt="imagem de uma sala" />
        <S.ContainerInfos>
          <S.DivInfos>
            <S.H2Infos>Design Minimalista</S.H2Infos>
            <S.PInfos>
              Móveis apenas essenciais e com design moderno, além de
              revestimentos bonitos e em cores neutras para manter a casa sempre
              com um estilo clean e suave.
            </S.PInfos>
          </S.DivInfos>
          <S.AncoraAbout href="loremipsumdolorsitamet.com" target="blank">
            Quero saber mais sobre os designs
          </S.AncoraAbout>
        </S.ContainerInfos>
      </S.Container>
    </>
  );
};

export default Design;

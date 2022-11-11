import * as S from "../Footer/FooterStyled";

const Footer = () => {
  return (
    <>
      <S.ContainerFooter>
        <div>
          <S.H3Footer>Produtos</S.H3Footer>
          <S.PFooter>Mobilia</S.PFooter>
          <S.PFooter>Segurança</S.PFooter>
          <S.PFooter>Design Interior</S.PFooter>
        </div>
        <div>
          <S.H3Footer>Mais Informações</S.H3Footer>
          <S.PFooter>Contrato</S.PFooter>
          <S.PFooter>Sobre nós</S.PFooter>
          <S.PFooter>Termos e Condições</S.PFooter>
        </div>
        <div>
          <S.H3Footer>Redes Sociais</S.H3Footer>
          <S.PFooter>Pinterest</S.PFooter>
          <S.PFooter>Facebook</S.PFooter>
          <S.PFooter>Instagram</S.PFooter>
        </div>
      </S.ContainerFooter>
    </>
  );
};

export default Footer;

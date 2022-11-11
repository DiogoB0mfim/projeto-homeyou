// *Imports do swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper";

// *Imagens da section
import galery1 from "../../assets/galery_img1.png";
import galery2 from "../../assets/galery_img2.png";
import galery3 from "../../assets/galery_img3.png";

// *Import de estilização
import * as S from "./GaleryStyled";

const Galery = () => {
  return (
    <>
      <S.ContainerInfo>
        <S.H2infos>Galeria</S.H2infos>
        <S.Pinfos>
          Se você está entediado com a aparência da decoração de interiores da
          casa comuns, trabalhamos com designs diferentes e inovadores.
        </S.Pinfos>
      </S.ContainerInfo>
      <S.ContainerSwiper>
        <Swiper
          breakpoints={{
            600: {
              slidesPerView: 1,
            },

            750: {
              slidesPerView: 2,
            },

            1185: {
              slidesPerView: 3,
              width: 1185,
              spaceBetween: 100,
            },
          }}
          spaceBetween={50}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide>
            <S.Project>
              <S.ImgSwiper src={galery1} alt="imagem de móvel" />
            </S.Project>
          </SwiperSlide>
          <SwiperSlide>
            <S.Project>
              <S.ImgSwiper src={galery2} alt="imagem de móvel" />
            </S.Project>
          </SwiperSlide>
          <SwiperSlide>
            <S.Project>
              <S.ImgSwiper src={galery3} alt="imagem de móvel" />
            </S.Project>
          </SwiperSlide>
        </Swiper>
      </S.ContainerSwiper>
    </>
  );
};

export default Galery;

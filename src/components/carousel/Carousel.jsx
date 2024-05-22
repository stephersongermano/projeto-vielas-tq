import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";


import { CarouselContainer } from "./carouselStyle";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";

const Carousel = () => {
  const listImages = [
    {
      id: "1",
      image: image1,
      description:
        "pauta-com-o-ngks-no-jardim-amalia-capao-redondo---zona-sul---sp2021_leu-britto",
    },
    {
      id: "2",
      image: image2,
      description:
        "manoel--um-dos-moradores-mais-antigos-da-favela-do-linho-no-morro-do-pullman-zona-sul-de-so-paulo-ele--cadeirante-e-depende-de-ajuda-do-auxlio-e-doaes-para-sobreviver",
    },
    {
      id: "3",
      image: image3,
      description:
        "crianas-da-ocupao-jardim-julieta-na-vila-medeiros-zona-norte-de-so-paulo",
    },
  ];
  return (
    <>
      <CarouselContainer>
        <Swiper slidesPerView={1} modules={[Autoplay]} autoplay={{ delay: 3000 }}>
          {listImages.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt={item.description} />
            </SwiperSlide>
          ))}
        </Swiper>
      </CarouselContainer>
    </>
  );
};

export default Carousel;

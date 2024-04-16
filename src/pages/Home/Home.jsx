import Search from "../../components/search/Search";
import {
  HomeContainer,
  HomeHashTags,
  HomeMiddle,
  HomeMiddleDiv,
  HomeGrid,
} from "./homeStyle";
import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/footer/Footer";
import Carousel from "../../components/carousel/Carousel";
import Grid from "../../components/grid/Grid";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";
import image6 from "../../assets/images/image6.jpg";

const Home = () => {
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
    {
      id: "4",
      image: image4,
      description:
        "feira-pretos-em-conexo-no-beco-do-robin_guarulhos_sp2022_lu-britto",
    },
    {
      id: "5",
      image: image5,
      description: "oitava-do-br-na-copa-no-jd-ubirajara_leu-britto",
    },
    {
      id: "6",
      image: image6,
      description:
        "operao-baixas-temperaturas-na-praa-floriano-peixoto-em-santo-amaro_zona-sul-de-sp_lu-britto",
    },
  ];

  return (
    <>
      <HomeContainer>
        <Navbar />
        <Search />
        <HomeHashTags>
          <h3>#Paraísopolis</h3>
          <h3>#Saúde</h3>
          <h3>#Hospitais</h3>
          <h3>#Coperifa</h3>
          <h3>#CasaDeCultura</h3>
          <h3>#Eleições2022</h3>
          <h3>#Urnas</h3>
        </HomeHashTags>
        <HomeMiddle>
          <HomeMiddleDiv>
            <p>
              Um banco de imagens pensado para mostrar a diversidade das
              periferias de São Paulo. Nascido nas quebradas e fomentado por
              quem vive e pensa nelas.
            </p>
            <h1>VIELAS</h1>
          </HomeMiddleDiv>
          <Carousel />
        </HomeMiddle>
        <HomeGrid>
          <Grid images={listImages} />
        </HomeGrid>
        <Footer />
      </HomeContainer>
    </>
  );
};

export default Home;

import Search from "../../components/search/Search";
import {
  HomeContainer,
  HomeHashTags,
  HomeMiddle,
  HomeMiddleDiv,
} from "./homeStyle";
import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/footer/Footer";
import Carousel from "../../components/carousel/Carousel";

const Home = () => {
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
        <Footer />
      </HomeContainer>
    </>
  );
};

export default Home;

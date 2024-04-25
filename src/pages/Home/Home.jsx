import Search from "../../components/search/Search";
import {
  HomeContainer,
  HomeHashTags,
  HomeMiddle,
  HomeMiddleDiv,
  HomeColleciton,
  HomeImagesCollection,
} from "./homeStyle";
import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/footer/Footer";
import Carousel from "../../components/carousel/Carousel";
import Grid from "../../components/grid/Grid";

import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";
import image6 from "../../assets/images/image6.jpg";

const Home = () => {
  const listImages = [
    {
      id: "4",
      image: image4,
      title: "Feira em Guarulhos",
      description:
        "feira pretos em conexo no beco do robin_guarulhos_sp2022_lu britto",
    },
    {
      id: "5",
      image: image5,
      title: "Oitava",
      description: "oitava do br na copa no jd ubirajara_leu britto",
    },
    {
      id: "6",
      image: image6,
      title: "Baixas Temperaturas",
      description:
        "operao baixas temperaturas na praa floriano peixoto em santo amaro_zona sul de sp_lu britto",
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
        <HomeColleciton>
          <h1>COLEÇÕES</h1>
          <HomeImagesCollection>
            {listImages.map((item) => (
              <div key={item.id}>
                <img src={item.image} alt={item.description} />
                <h2>{item.title}</h2>
                <h3>{item.description}</h3>
              </div>
            ))}
          </HomeImagesCollection>
          <hr />
        </HomeColleciton>
        <Grid />
        <Footer />
      </HomeContainer>
    </>
  );
};

export default Home;

import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import { GridContainer, GridSection } from "./gridStyle";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";
import image6 from "../../assets/images/image6.jpg";

const Grid = () => {
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
    <GridSection>
      {listImages.map((item) => (
        <GridContainer key={item.id}>
          <img src={item.image} alt={item.description} />
        </GridContainer>
      ))}
    </GridSection>
  );
};

export default Grid;

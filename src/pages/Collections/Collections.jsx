import { CollectionContainer, ImagesCollection } from "./collectionsStyle";

import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";
import image6 from "../../assets/images/image6.jpg";

const Collections = () => {
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
    <CollectionContainer>
      <h1>COLEÇÕES</h1>
      <ImagesCollection>
        {listImages.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.description} />
            <h2>{item.title}</h2>
            <h3>{item.description}</h3>
          </div>
        ))}
      </ImagesCollection>
      <hr />
    </CollectionContainer>
  );
};

export default Collections;

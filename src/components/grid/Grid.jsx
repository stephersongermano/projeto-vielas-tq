import { GridSection } from "./gridStyle";

const Grid = ({ images }) => {
  return (
    <GridSection>
      {images.map((item) => {
        <img src={item.image} />;
      })}
    </GridSection>
  );
};

export default Grid;

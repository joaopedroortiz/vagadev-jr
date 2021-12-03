import { Container, Label, LeftEdge } from "./style";
import Line from "../../../assets/svgs/line3.svg"

const Banner = ({ image }) => {
  return (
    <Container image={`url(${image.imagePath})`}>
      <Label>
        <LeftEdge/>
        <small> {image.label} </small>
        <img src={Line} alt={`line`}/>
      </Label>
    </Container>
  );
};

export default Banner;

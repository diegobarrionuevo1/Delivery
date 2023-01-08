import { Container, FlexWrap } from "./styled";
import About from "./../../components/about";
import Cafes from "../../components/cafes";
import data from "../../data/data";
export default function Home() {
  return (
    <Container>
      <About />
      <FlexWrap>
        {data?.map((item, index) => (
          <div key={index}>
            <Cafes
              img={item.srcImg}
              tag={item.tags}
              valor={item.price}
              cardTitulo={item.title}
              sobre={item.description}
            />
          </div>
        ))}
      </FlexWrap>
    </Container>
  );
}

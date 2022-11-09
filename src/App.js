import "./App.css";
import datas from "./data.json";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

const App = () => {
  return (
    <div className="App">
      <h1>Splide Carousel</h1>
      <Splide
        aria-label="Carousel"
        options={{
          autoplay: true,
          type: "fade",
          autoScroll: {
            speed: 1,
          },
        }}
      >
        {datas.map((data) => {
          return (
            <SplideSlide key={data.id}>
              <div className="images">
                <h2>{data.image_name}</h2>
                <img src={data.url} alt={data.image_name} />
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default App;

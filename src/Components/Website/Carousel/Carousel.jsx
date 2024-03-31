import React, { useEffect, useReducer, useRef } from 'react'
import { Container } from 'react-bootstrap'
import './carousel.css'
import img1 from '../../../assets/carousel/behrouz-sasani-6OGml3UomZw-unsplash (2).jpg'
import img2 from '../../../assets/carousel/marcus-loke-xXJ6utyoSw0-unsplash.jpg'
import img3 from '../../../assets/carousel/osarugue-igbinoba-c2BcE2zPXjc-unsplash.jpg'
import img4 from '../../../assets/carousel/taras-chernus--au3XMzfhro-unsplash.jpg'
import img5 from '../../../assets/carousel/hamza-nouasria--EDIWTbLyYk-unsplash.jpg'
import img6 from '../../../assets/carousel/jackson-david-vQ1KsEOXkKg-unsplash.jpg'
import img7 from '../../../assets/carousel/rodrigo-summer-FzazLnJ9Yks-unsplash.jpg'

const slides = [
  {
    title: "Machu Picchu",
    subtitle: "Peru",
    description: "Adventure is never far away",
    image:  img1 ,
  },
  {
    title: "Chamonix",
    subtitle: "France",
    description: "Let your dreams come true",
    image: img2 ,
  },
  {
    title: "Mimisa Rocks",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:  img3 ,
  },
  {
    title: "Four",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:  img4 ,
  },
  {
    title: "Four",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:  img5 ,
  },
  {
    title: "Four",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:  img6 ,
  },
  {
    title: "Four",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:  img7 ,
  },

];

function useTilt(active) {
  const ref =useRef(null);

 useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0,
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div
        className="slideBackground"
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      />
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      >
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <p className="slideDescription">{slide.description}</p>
        </div>
      </div>
    </div>
  );
}


const Carousel = () => {
    

  const [state, dispatch] =useReducer(slidesReducer, initialState);
console.log(state)
  return (
    <Container className="overflow-hidden text-center pt-5">
      <div className="section-header">
        <p className="m-0" style={{ color: "wheat", fontSize: "24px" }}>
          top selling products for you{" "}
        </p>
        <h1
          style={{
            color: "var(--mycolor)",
            fontWeight: "bold",
            margin: 0,
            fontSize: "2.875rem",
          }}
        >
          Products
        </h1>
        <p style={{ color: "var(--subtitle)" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          incidunt aut, odit veniam reiciendis eius.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: " 6rem 0",
        }}
      >
        <div className="slides position-relative">
          <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

          {[...slides, ...slides, ...slides].map((slide, i) => {
            let offset = slides.length + (state.slideIndex - i);
            return <Slide slide={slide} offset={offset} key={i} />;
          })}
          <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
        </div>
      </div>
    </Container>
  );}

export default Carousel

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Product.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import ProductSale from "./ProductSale";

import img1 from "../../../assets/New folder/crewneck_sicoca_silk_blend_sweater_1_270x341_crop_top.avif";
import img11 from "../../../assets/New folder/crewneck_sicoca_silk_blend_sweater_2_270x341_crop_top.avif";
import img2 from "../../../assets/New folder/josefina_boyfriend_jeans_bright_light_broken_twill_1_270x341_crop_top.avif";
import img22 from "../../../assets/New folder/josefina_boyfriend_jeans_bright_light_broken_twill_2_270x341_crop_top.avif";
import img3 from "../../../assets/New folder/bing_trim_fit_cotton_jersey_polo_1_270x341_crop_top.avif";
import img33 from "../../../assets/New folder/bing_trim_fit_cotton_jersey_polo_2_270x341_crop_top.avif";
import img4 from "../../../assets/New folder/4.avif";
import img44 from "../../../assets/New folder/44.avif";
import img5 from "../../../assets/New folder/5.avif";
import img55 from "../../../assets/New folder/55.avif";
import img6 from "../../../assets/New folder/6.avif";
import img66 from "../../../assets/New folder/66.avif";
import img7 from "../../../assets/New folder/7.avif";
import img77 from "../../../assets/New folder/77.avif";

const products = [
  {
    id: 1,
    name: "JOSEFINA BOYFRIEND JEANS BRIGHT LIGHT BROKEN TWILL",
    price: "$20.00",
    rating: "4",
    image: img1,
    hoverImage: img11,
  },
  {
    id: 2,
    name: "NEW YORK CLASSIC FIT WOOL SUIT",
    price: "$30.00",
    rating: "5",
    image: img2,
    hoverImage: img22,
  },
  {
    id: 3,
    name: "NEW FRAY DAY' POLO",
    price: "$30.00",
    rating: "3",
    image: img3,
    hoverImage: img33,
  },
  {
    id: 4,
    name: "NEW YORK CLASSIC FIT WOOL SUIT",
    price: "$30.00",
    rating: "5",
    image: img4,
    hoverImage: img44,
  },
  {
    id: 5,
    name: "NEW YORK CLASSIC FIT WOOL SUIT",
    price: "$30.00",
    rating: "4",
    image: img5,
    hoverImage: img55,
  },
  {
    id: 6,
    name: "MATCHBOX' SLIM FIT JEANS",
    price: "$30.00",
    rating: "5",
    image: img6,
    hoverImage: img66,
  },
  {
    id: 7,
    name: "MIXED MEDIA TOP",
    price: "$30.00",
    rating: "3",
    image: img7,
    hoverImage: img77,
  },
];

export default function SalesProducts() {
  return (
    <div className="SwiperBody p-5 container">
      
        <h3>popular products</h3>
        <div className="custom-navigation">
          <button className="prev-button">Previous</button>
          <button className="next-button">Next</button>
        </div>
    

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        navigation={{
          nextEl: ".next-button",
          prevEl: ".prev-button",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {products.map((product, key) => (
          <SwiperSlide key={key}>
            <ProductSale product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

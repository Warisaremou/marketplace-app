import { useEffect } from "react";
import { UserLogged } from "./../context/UserLoggedContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image1 from "../assets/images/shop.jpg";
import image2 from "../assets/images/shop-2.jpg";
import image3 from "../assets/images/banner-img.jpg";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import CTO from "../assets/images/CTA.png";
import { Link } from "react-router-dom";
import Features from "../components/Features";

function Home() {
  const { meData } = UserLogged();

  const slidersItems = [
    {
      image: image1,
      title: "Hello world 1",
    },
    {
      image: image2,
      title: "Hello world 2",
    },
    {
      image: image3,
      title: "Hello world 3",
    },
  ];

  return (
    <div className="px-4 md:px-20">
      <>
        {/* SearchBar for mobile */}
        <div className="relative md:hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input
            className="search-input w-full"
            placeholder="Rechercher un produit"
            type="search"
          />
        </div>
      </>

      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="pt-5 relative mySwiper"
      >
        {slidersItems.map((item) => (
          <SwiperSlide key={item.title} className="SwiperSlide">
            <div className="overlay"></div>
            <p>{item.title}</p>
            <img
              src={item.image}
              alt=""
              className="block relative w-full h-[30vh] md:h-[60vh] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Popular articles Section */}
      <section>
        <h2 className="section-title">Articles populaires</h2>
      </section>

      {/* Features Section */}
      <section>
        <Features />
      </section>

      {/* Call To Action Section */}
      <section className="bg-gray-100 overflow-x-hidden mb-20">
        <div className="container px-4 mx-auto relative">
          <div className="absolute inset-0 bg-blue-200 my-8 -ml-4 -mr-4"></div>
          <div className="relative bg-blue-300 overflow-hidden">
            <div className="relative flex flex-wrap items-center bg-blue-400">
              <div className="w-full md:w-4/6 p-4 lg:pl-6">
                <h2 className="mt-0 mb-5 text-base md:text-xl font-semibold uppercase text-white">
                  Cliquez ici pour vendre ou acheter rapidement et facilement sur notre plateforme
                  de e-commerce !
                </h2>
                <Link to="/sell-product">
                  <button className="button">
                    <span className="button_lg">
                      <span className="button_sl"></span>
                      <span className="button_text">Vendre sur market</span>
                    </span>
                  </button>
                </Link>
              </div>
              <img
                className="relative ml-auto w-full md:w-2/6 h-96 object-cover"
                src={CTO}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

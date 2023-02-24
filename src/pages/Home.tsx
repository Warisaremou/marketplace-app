import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image1 from "../assets/images/shop.jpg";
import image2 from "../assets/images/shop-2.jpg";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import { UserLogged } from "./../context/UserLoggedContext";

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
      image: image1,
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
        spaceBetween={2}
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
          <SwiperSlide key={item.title}>
            <div className="absolute bottom-0 h-full w-full bg-gray-800 opacity-40"></div>
            <p>{item.title}</p>
            <img src={item.image} alt="" className="block w-full md:h-[60vh] object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Articles populaires */}
      <section>
        <h2 className="section-title">Articles populaires</h2>
      </section>
    </div>
  );
}

export default Home;

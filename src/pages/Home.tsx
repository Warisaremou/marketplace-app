// import { UserLogged } from "../context/UserLoggedContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import image1 from "../assets/images/shop.jpg";
import image2 from "../assets/images/shop-2.jpg";
import "swiper/css";
import "swiper/css/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Home() {
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
    <div className="px-4">
      <>
        <h1 className="text-xl text-blue-color font-semibold pb-4">MARKET</h1>
        <div className="relative md:hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
          <input className="search-input" placeholder="Rechercher un produit" type="search" />
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
          clickable: true,
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

      <h2 className="pt-10">Ajout récent</h2>
    </div>
  );
}

export default Home;

import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { fadeIn, fadeleft, faderight } from "../../Utils/Motion/motion";
import { useTranslation } from "react-i18next";
import DataHero from "../../Assets/DataHero/DataHero";
const Home = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="hero-swiper">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {DataHero.map((item) => (
            <SwiperSlide>
              <div className="hero center">
                <div className="img-hero">
                  <img src={item.img} />
                </div>
                <div className="text-hero center">
                  <div className="p-hero">
                    <motion.p
                      variants={fadeIn}
                      initial="initial"
                      animate="animate"
                      transition={{
                        duration: 1.5,
                      }}
                    >
                      {t(item.title)}
                    </motion.p>
                  </div>
                  <div className="svg-hero center">
                    <motion.img
                      variants={fadeleft}
                      initial="initial"
                      animate="animate"
                      transition={{
                        duration: 1.5,
                      }}
                      src={item.logo}
                    />
                    <motion.p
                      variants={faderight}
                      initial="initial"
                      animate="animate"
                      transition={{
                        duration: 1.5,
                      }}
                    >
                      {t(item.desc)}
                    </motion.p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
export default Home;

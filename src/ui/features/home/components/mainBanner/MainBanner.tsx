import { useLanguage } from "../../../../../libs";
import { useState } from "react";
import "./styles.css";
import { TextBody, Title } from "../../../../components";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Pagination, Navigation } from "swiper/modules";

export const MainBanner = () => {
  const [isSwiperActive, setIsSwiperActive] = useState(true);
  const {
    content: { home },
  } = useLanguage();

  return (
    <div
      style={{
        height: "100vh",
        overflow: isSwiperActive ? "hidden" : "auto", // Lock scrolling during Swiper
      }}
    >
      {isSwiperActive ? (
        <Swiper
          direction={"horizontal"}
          slidesPerView={1}
          spaceBetween={0}
          effect="fade"
          speed={1500}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          grabCursor
          scrollbar={{ draggable: true }}
          modules={[Navigation, Mousewheel, Pagination, Autoplay]}
          style={{ height: "100vh" }}
          onReachEnd={() => {
            setIsSwiperActive(false); // Allow page scrolling
          }}
          navigation={{
            nextEl: ".swiper-button-next", // Class for the next button
            prevEl: ".swiper-button-prev", // Class for the previous button
          }}
        >
          {home.home.map((hero) => {
            return (
              <SwiperSlide style={{ width: "100%" }}>
                <div
                  className={clsx("slide w-full h-fullViewport relative")}
                  key={hero.id}
                >
                  <img
                    src={`/globalEthix/public/images/${hero.img}`} // Local image path in the public folder
                    alt="Example Image"
                    style={{ width: "100%", height: "100%" }}
                    width={1}
                    height={1}
                    className="!h-full aspect-1/1"
                  />
                  <div
                    className={clsx(
                      "absolute w-full p-3 bottom-2 desktopS:bottom-auto desktopS:w-half flex flex-col gap-0.5 desktopS:left-2"
                    )}
                  >
                    <Title
                      text={hero.title}
                      fontSize={"title3"}
                      TagName="h3"
                      color={"primary-inverse-fixed"}
                      className="w-full"
                    />
                    <Title
                      text={hero.subtitle}
                      color={"tertiary-inverse-fixed"}
                      fontSize={"title5"}
                      className="pl-0.25 w-full"
                    />
                    <TextBody
                      text={hero.description}
                      color={"primary-inverse-fixed"}
                      className="tablet:text-justify pl-0.25 line-clamp-4 desktopS:line-clamp-none"
                    />
                    <div className="pt-0.75 pl-0.25">
                      <button className="Stripe group">
                        <TextBody
                          TagName="span"
                          text="Explorez"
                          className="Text relative z-[2] text-text-primary-inverse group-hover:text-text-primary"
                        />
                        <svg
                          className="Arrow relative z-[2]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          width="16"
                          height="16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"
                          ></path>
                        </svg>
                        <svg
                          className="Arrow-Hover relative z-[2]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          width="16"
                          height="16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <div
          className={clsx("slide w-full h-fullViewport relative")}
          key={home.home[home.home.length - 1].id}
        >
          <img
            src={`/globalEthix/public/images/${
              home.home[home.home.length - 1].img
            }`} // Local image path in the public folder
            alt="Example Image"
            style={{ width: "100%", height: "100%" }}
            width={1}
            height={1}
            className="!h-full aspect-1/1"
          />
          <div
            className={clsx(
              "absolute w-full p-3 bottom-2 desktopS:bottom-auto desktopS:w-half flex flex-col gap-0.5 desktopS:left-2"
            )}
          >
            <Title
              text={home.home[home.home.length - 1].title}
              fontSize={"title3"}
              TagName="h3"
              color={"primary-inverse-fixed"}
              className="w-full"
            />
            <Title
              text={home.home[home.home.length - 1].subtitle}
              color={"tertiary-inverse-fixed"}
              fontSize={"title5"}
              className="pl-0.25 w-full"
            />
            <TextBody
              text={home.home[home.home.length - 1].description}
              color={"primary-inverse-fixed"}
              className="tablet:text-justify pl-0.25 line-clamp-4 desktopS:line-clamp-none"
            />
            <div className="pt-0.75 pl-0.25">
              <button className="Stripe group">
                <TextBody
                  TagName="span"
                  text="Explorez"
                  className="Text relative z-[2] text-text-primary-inverse group-hover:text-text-primary"
                />
                <svg
                  className="Arrow relative z-[2]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"
                  ></path>
                </svg>
                <svg
                  className="Arrow-Hover relative z-[2]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

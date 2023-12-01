// external
import Link from "next/link";
import { useState } from "react";
// internal
import VideoPopup from "@/modals/video-popup";

// content
const content = {
  sub_title: "Välkommen till Skånes Sjukvårdstjänst",
  title: (
    <>
      HLR räddar liv <br />
      - varje dag - varje minut
    </>
  ),
  des: (
    <>
      Vitala kurser som räddar liv. Vi erbjuder även utbildning inom{" "}
      <br />
      Hot & Våld / Brandutbildning / Alkohol & Drogupplysning / Krishantering-Avlastande samtal
    </>
  ),
  btn_text1: "Våra kurser",
  btn_text2: "Om oss",
};
const { sub_title, title, des, btn_text1, btn_text2 } = content;

// hero_box
const hero_box = [
  {
    id: 1,
    icon: "flaticon-rating",
    des: "100% nöjda kunder",
    color: "",
  },
  {
    id: 2,
    icon: "flaticon-target",
    des: "Bemaning 24/7",
    color: "pink-icon",
    border: "pink-border",
  },
  {
    id: 3,
    icon: "flaticon-premium-badge",
    des: "Trygga och säkra utbildningar",
    color: "green-icon",
    border: "green-border",
  },
];

const HeroBanner = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="banner-area p-relative pt-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <div className="banner__content pt-145 mb-135">
                <span className="banner__sub-title mb-20">{sub_title}</span>
                <h2 className="banner__title mb-30">{title}</h2>
                <p>{des}</p>
                <div className="banner__btn">
                  <Link className="tp-btn" href="/contact">
                    {btn_text1}
                  </Link>
                  <Link className="tp-btn-second ml-25" href="/about">
                    {btn_text2}
                  </Link>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="bannerscroll d-none d-xl-block">
          <div className="banner-scroll-btn">
            <a className="bannerscroll-icon" href="#tp-about-scroll">
              <i className="fa-light fa-computer-mouse"></i>
              <span>Scrolla ner</span>
            </a>
          </div>
        </div>
        <div className="banner__shape d-none d-lg-block">
          <img src="/assets/img/banner/hero-1.jpeg" alt="banner-img" />
          
        </div>
      </section>
      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"d8w5SICzzxc"}
      />
      {/* video modal end */}
    </>
  );
};

export default HeroBanner;

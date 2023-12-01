import SocialLinks from "@/common/social-links";
import Link from "next/link";
import React from "react";

const footer_content = {
  footer_info: [
    {
      id: 1,
      title: "Länkar",
      cls: "footer-col-2",
      links: [
        { name: "Kontakta oss", link: "/contact-us" },
        { name: "Om oss", link: "/about" },
        { name: "Vilkor & Policy", link: "/shop-details" },
        { name: "Våra kunder", link: "/about" },
        { name: "Utbildningar", link: "/service" },
      ],
    },
    {
      id: 2,
      title: "Kontakt information",
      cls: "footer-col-3",
      links: [
        { name: "Skånes Sjukvårdstjänst AB" },
        { name: "Sockervägen 1, 244 39 Kävlinge" },
        { name: "info@skanessjukvardstjanst.se" },
        { name: "Tel: 0705-88 87 42" },
        { name: "Öppentider: Dygnet runt" },
      ],
    },
  ],
  contact_info: [
    {
      id: 1,
      title: "Snabblänkar",
      support_info: [
        " 27 Division St, New York, NY 10002, USA",
        "(+880)52462545632",
        " support@example.com",
      ],
      office_time: "Office Hours: 9AM - 4PM",
      off_day: " Friday - Wekend Day",
    },
  ],
  copy_right_text: (
    <>
      © Copyright © {new Date().getFullYear()}
      <Link href="/"> Skånes SjukvårdsTjänst AB</Link>.<i> All Rights Reserved</i>.
      <Link href="https://www.pixaria.se"> Skapad av Pixaria</Link>.
    </>
  ),
};

const { footer_info, copy_right_text } = footer_content;
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-area theme-bg pt-100 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="footer-widget footer-col-1 mb-50 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <h4 className="footer-widget__title mb-30">
                    <a href="index">
                      <img src="/assets/img/logo/sst_vit_logo.png" alt="logo" />
                    </a>
                  </h4>
                  <p>
                    Trygg sjukvårdsutbildning, HLR utbildning och mer.
                    Erbjuder bemanning av Sjukvårdspersonal
                  </p>
                  <div className="footer-widget__social">
                    <SocialLinks />
                  </div>
                </div>
              </div>
              {
                footer_info.map(item =>  <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className={`footer-widget ${item.cls} mb-50 wow fadeInUp`}
                  data-wow-delay=".4s"
                >
                  <h4 className="footer-widget__title mb-20">{item.title}</h4>
                  <div className="footer-widget__links">
                    <ul>

                      {
                        item.links.map((link, i) => <li key={i}>
                        <Link href={`${link?.link ? link.link : "/"}`}>{link.name}</Link>
                      </li> )
                      }
                    
                    </ul>
                  </div>
                </div>
              </div>)
              }
              {/* <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="footer-widget footer-col-2 mb-50 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <h4 className="footer-widget__title mb-20">Useful links</h4>
                  <div className="footer-widget__links">
                    <ul>
                      <li>
                        <Link href="/contact">Contact us</Link>
                      </li>
                      <li>
                        <Link href="/about">Help & About us</Link>
                      </li>
                      <li>
                        <Link href="/shop-details">Shipping & Returns</Link>
                      </li>
                      <li>
                        <Link href="/shop-details">Refund Policy</Link>
                      </li>
                      <li>
                        <Link href="/about">About us</Link>
                      </li>
                      <li>
                        <Link href="/services-details">Services</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="footer-widget footer-col-3 mb-50 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <h4 className="footer-widget__title mb-20">Contact info</h4>
                  <div className="footer-widget__info">
                    <ul>
                      <li>
                        <a href="#">Ta-134/A, Gulshan Badda Link </a>
                      </li>
                      <li>
                        <a href="tel:+9159008855">(+880)155 69569 365</a>
                      </li>
                      <li>
                        <a href="mailto:support@rstheme.com">
                          support@rstheme.com
                        </a>
                      </li>
                      <li>Office Hours: 8AM - 11PM</li>
                      <li>Sunday - Wekend Day</li>
                    </ul>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="footer-area-bottom theme-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                <div className="footer-widget__copyright">
                  <span>{copy_right_text}</span>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                <div className="footer-widget__copyright-info info-direction">
                  <ul className="d-flex align-items-center">
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

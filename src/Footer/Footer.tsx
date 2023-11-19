import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons/faApple";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons/faSquareInstagram";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="lg:block hidden ">
      <div className="footer__top bg-black py-6">
        <div className="myContainer">
          <div className="footer__top-left">
            <div className="footer__community flex justify-start">
              <h2 className="font-orelega text-textColor font-normal text-3xl">
                Join the Community !
              </h2>
              <div className="footer__social ml-4 flex justify-start">
                <Link
                  to="#"
                  className="flex justify-center items-center bg-buttonColor rounded-full w-10 h-10 mx-2 hover:bg-blue-600"
                >
                  <FontAwesomeIcon
                    className="text-textColor text-lg"
                    icon={faFacebookF}
                  />
                </Link>

                <Link
                  to="#"
                  className="flex justify-center items-center bg-buttonColor rounded-full w-10 h-10 mx-2 hover:bg-blue-600"
                >
                  <FontAwesomeIcon
                    className="text-textColor text-lg"
                    icon={faSquareInstagram}
                  />
                </Link>

                <Link
                  to="#"
                  className="flex justify-center items-center bg-buttonColor rounded-full w-10 h-10 mx-2 hover:bg-blue-600"
                >
                  <FontAwesomeIcon
                    className="text-textColor text-lg"
                    icon={faXTwitter}
                  />
                </Link>

                <Link
                  to="#"
                  className="flex justify-center items-center bg-buttonColor rounded-full w-10 h-10 mx-2 hover:bg-blue-600"
                >
                  <FontAwesomeIcon
                    className="text-textColor text-lg"
                    icon={faYoutube}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="footer__lists   -mt-5 flex justify-around  items-end">
            <div className="footer__first3lists basis-3/4 flex justify-around">
              <div className="footer__company">
                <h1 className="font-orelega capitalize text-3xl text-footHeader">
                  company
                </h1>
                <ul className="list-none px-4">
                  <li className="my-1">
                    <Link
                      to="#"
                      className="disabled capitalize font-orelega text-xl text-bottomNavBg hover:text-footHeader"
                    >
                      about us
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link
                      to="#"
                      className="disabled capitalize font-orelega text-xl text-bottomNavBg hover:text-footHeader"
                    >
                      contact us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="footer__customer-service ">
                <h1 className="font-orelega capitalize text-3xl text-footHeader">
                  Policy Info
                </h1>
                <ul className="list-none px-4">
                  <li className="my-1">
                    <Link
                      to="#"
                      className="disabled capitalize font-orelega text-xl text-bottomNavBg hover:text-footHeader"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link
                      to="#"
                      className="disabled capitalize font-orelega text-xl text-bottomNavBg hover:text-footHeader"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link
                      to="#"
                      className="disabled capitalize font-orelega text-xl text-bottomNavBg hover:text-footHeader"
                    >
                      Shipping & Billing
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="footer__customer-support ">
                <h1 className="font-orelega capitalize text-3xl text-footHeader">
                  Customer Support
                </h1>
                <ul className="list-none px-4">
                  <li className="my-1 mb-8">
                    <p className=" capitalize font-orelega text-xl text-bottomNavBg">
                      We are available all days from: <br /> OPEN 10AM - 10PM
                    </p>
                  </li>
                  <li className="my-1">
                    <a
                      href="tel:+00201006464041"
                      className="disabled capitalize font-orelega text-xl text-bottomNavBg hover:text-footHeader"
                    >
                      <FontAwesomeIcon
                        className="text-xl text-footHeader mr-2"
                        icon={faPhone}
                      />
                      00201006464041
                    </a>
                  </li>
                  <li className="my-1">
                    <a
                      href="mailto:b-touch@outlook.com"
                      className="disabled capitalize font-orelega text-xl text-bottomNavBg hover:text-footHeader "
                    >
                      <FontAwesomeIcon
                        className="text-xl text-footHeader mr-2"
                        icon={faEnvelope}
                      />
                      <span className="decoration-solid">
                        customercare@b-touch.com
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__download   basis-1/4">
              <h1 className="font-orelega capitalize text-3xl text-footHeader">
                Download The App
              </h1>
              <ul className="list-none px-4">
                <li className="my-3 apple-store">
                  <Link
                    to="#"
                    className="disabled capitalize font-orelega text-xl bg-textColor hover:bg-gray-300 rounded-lg  w-9/12  p-2 flex "
                  >
                    <FontAwesomeIcon
                      className="text-4xl text-iconColor "
                      icon={faApple}
                    />
                    <div className="apple-text mx-2">
                      <p className="text-xs font-normal text-iconColor">
                        Download on the
                      </p>
                      <h5 className="text-xl font-normal text-iconColor">
                        APP Store
                      </h5>
                    </div>
                  </Link>
                </li>
                <li className="my-3 play-store">
                  <Link
                    to="#"
                    className="disabled capitalize font-orelega text-xl bg-textColor hover:bg-gray-300 rounded-lg w-9/12  p-2 flex "
                  >
                    <svg
                      width="33"
                      height="41"
                      viewBox="0 0 33 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.2415 27.0436C28.3029 24.437 31.3817 22.4507 31.6471 22.2962C32.496 21.7686 33.3727 20.3718 31.6471 19.2869C31.0899 18.9457 28.0902 17.0213 24.2415 14.5396L18.9062 20.838L24.2415 27.0435V27.0436Z"
                        fill="#FFD900"
                      />
                      <path
                        d="M18.9062 20.8379L1.91797 40.8517C2.31672 40.9134 2.7669 40.7898 3.29765 40.4487C4.41195 39.7357 16.2246 32.1951 24.2415 27.045L18.9062 20.8379Z"
                        fill="#F43249"
                      />
                      <path
                        d="M18.9062 20.8377L24.2415 14.5703C24.2415 14.5703 4.49256 1.97189 3.29768 1.22819C2.84751 0.916528 2.34303 0.82395 1.8916 0.916528L18.9062 20.8377Z"
                        fill="#00EE76"
                      />
                      <path
                        d="M18.9059 20.8377L1.89127 0.916504C1.20074 1.10312 0.617188 1.81626 0.617188 3.27469V38.4933C0.617188 39.8281 1.06874 40.7896 1.91767 40.8823L18.9059 20.8377Z"
                        fill="#00D3FF"
                      />
                    </svg>

                    <div className="apple-text mx-2">
                      <p className="text-xs font-normal text-iconColor">
                        Get it on
                      </p>
                      <h5 className="text-xl font-normal text-iconColor">
                        Google Play
                      </h5>
                    </div>
                  </Link>
                </li>
                <li className="my-3 apple-store">
                  <Link
                    to="#"
                    className="disabled capitalize font-orelega text-xl bg-textColor hover:bg-gray-300 rounded-lg w-9/12  p-2 flex "
                  >
                    <img
                      src="images/appGallery.png"
                      className="block w-10 h-10"
                      alt="appGallery"
                    />
                    <div className="apple-text mx-2">
                      <p className="text-xs font-normal text-iconColor">
                        Download on the
                      </p>
                      <h5 className="text-xl font-normal text-iconColor">
                        AppGallery
                      </h5>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom bg-mainBgColor py-2">
        <div className="myContainer flex justify-between">
          <p className="font-roboto font-bold text-base italic text-white">
            Copyright &copy; 2022 B-Touch
          </p>
          <p className="font-roboto font-bold text-base italic text-white">
            powered by ICON
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import LOGO from "../../public/upscaled-2x-image-upscaled__6_-removebg-preview.png";

const HeroSection = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="relative min-h-screen bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link
              href="/"
              className="-m-1.5 p-1.5 text-white font-bold text-2xl"
            >
              <img src={LOGO} alt="" width={100} />
            </Link>
          </div>
          <div className="flex lg:hidden ">
            <Button
              onClick={toggleMenu}
              variant="ghost"
              size="icon"
              className="text-white"
            >
              {open ? (
                <MdOutlineRestaurantMenu className="h-6 w-6" />
              ) : (
                <IoMenu className="h-6 w-6" />
              )}
            </Button>
            {open && (
              <div className=" bg-black w-full h-full rounded-xl text-white flex flex-col  z-50 origin-top-right transform p-2 transition ">
                <ul className="bottom-3">
                  <li>
                    <a href="#menu">Menu</a>
                  </li>
                  <li>
                    <a href="#reservation">Reservations</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a
              href="#menu"
              className="text-sm font-semibold leading-6 text-white"
            >
              Menu
            </a>
            <a
              href="#reservation"
              className="text-sm font-semibold leading-6 text-white"
            >
              Reservations
            </a>
            <a
              href="#about"
              className="text-sm font-semibold leading-6 text-white"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold leading-6 text-white"
            >
              Contact
            </a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            Experience Culinary Excellence
          </h1>
          <p className="text-lg leading-8 text-gray-300 mb-8">
            Indulge in a symphony of flavors at Gusto. Our passionate chefs
            craft each dish with precision, using only the finest
            locally-sourced ingredients to create an unforgettable dining
            experience.
          </p>
          <a href="#reservation">
            <Button className="bg-white text-black hover:bg-gray-200 text-lg py-6 px-8">
              Reserve a Table
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import React, { useState, useContext, createContext } from "react";
import { Link } from "react-router-dom";
import ApatizerMenu from "../components/services/ApatizerMenu";
import CoffeeMenu from "../components/services/CoffeeMenu";
import NonCoffeeMenu from "../components/services/NonCoffeeMenu";
import FoodsMenu from "../components/services/FoodsMenu";

// Asset
import coffeeLate from "../assets/coffee-late.png";
import americano from "../assets/americano.png";
import cappucino from "../assets/cappucino.png";

// Buat konteks sederhana untuk menyimpan currentUser
const AuthContext = createContext();

const ProductsApatizer = () => {
  // State untuk currentUser
  const [currentUser, setCurrentUser] = useState(null);

  // State untuk menentukan jenis menu yang sedang ditampilkan
  const [isApatizer, setApatizer] = useState(true);
  const [isCoffee, setCoffee] = useState(false);
  const [isNonCoffee, setNonCoffee] = useState(false);
  const [isFoods, setFoods] = useState(false);

  // Fungsi untuk menampilkan menu Apatizer
  const handleApatizer = () => {
    setApatizer(true);
    setCoffee(false);
    setNonCoffee(false);
    setFoods(false);
  };

  // Fungsi untuk menampilkan menu Coffee
  const handleCoffee = () => {
    setApatizer(false);
    setCoffee(true);
    setNonCoffee(false);
    setFoods(false);
  };

  // Fungsi untuk menampilkan menu Non Coffee
  const handleNonCoffee = () => {
    setApatizer(false);
    setCoffee(false);
    setNonCoffee(true);
    setFoods(false);
  };

  // Fungsi untuk menampilkan menu Foods
  const handleFoods = () => {
    setApatizer(false);
    setCoffee(false);
    setNonCoffee(false);
    setFoods(true);
  };

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      <>
        <div className="flex flex-col sm:flex-row mt-8">
          {/* Favorite Menu */}
          <div className="basis-1/3 flex flex-col sm:border">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-lg sm:text-2xl font-bold my-1">
                Favorite Menu
              </h1>
              <p className="text-xs sm:text-sm text-[#707070] my-2">
                The following are the favorite menus at Coffeetopia
              </p>
            </div>
            <div className="flex ms-10 sm:ms-5 items-center">
              <img
                src={coffeeLate}
                alt=""
                className="w-[75px] sm:w-[120px] m-1 me-4"
              />
              <h2 className="text-lg font-bold ms-4">Caffe Latte</h2>
            </div>
            <div className="flex justify-center my-2">
              <div className="line sm:w-[85%] h-[1px] bg-[#707070]"></div>
            </div>
            <div className="flex ms-10 sm:ms-5 items-center">
              <img
                src={americano}
                alt=""
                className="w-[90px] sm:w-[135px] m-1"
              />
              <h2 className="text-lg font-bold ms-4">Americano</h2>
            </div>
            <div className="flex justify-center my-2">
              <div className="line sm:w-[85%] h-[1px] bg-[#707070]"></div>
            </div>
            <div className="flex ms-10 sm:ms-5 items-center">
              <img
                src={cappucino}
                alt=""
                className="w-[100px] sm:w-[145px]"
              />
              <h2 className="text-lg font-bold ms-4">Cappuccino</h2>
            </div>
          </div>
          {/* Content Menu*/}
          <div className="sm:basis-2/3 flex flex-col mt-5 sm:mt-0">
            {/* Tombol untuk memilih jenis menu */}
            <div className="flex h-[50px] w-full sm:w-[70%] justify-evenly items-center">
              <button
                className={`text-base sm:text-lg ${
                  isApatizer
                    ? "font-medium text-[#591E0A] border-b border-[#591E0A]"
                    : ""
                }`}
                onClick={handleApatizer}
              >
                <p>Apatizer</p>
              </button>
              <button
                className={`text-base sm:text-lg ${
                  isCoffee
                    ? "font-medium text-[#591E0A] border-b border-[#591E0A]"
                    : ""
                }`}
                onClick={handleCoffee}
              >
                <p>Coffee</p>
              </button>
              <button
                className={`text-base sm:text-lg ${
                  isNonCoffee
                    ? "font-medium text-[#591E0A] border-b border-[#591E0A]"
                    : ""
                }`}
                onClick={handleNonCoffee}
              >
                <p>Non Coffee</p>
              </button>
              <button
                className={`text-base sm:text-lg ${
                  isFoods
                    ? "font-medium text-[#591E0A] border-b border-[#591E0A]"
                    : ""
                }`}
                onClick={handleFoods}
              >
                <p>Foods</p>
              </button>

              {currentUser && currentUser.role === "admin" && (
                <Link
                  to="/addcategory"
                  className="text-base font-bold bg-[#F4991A] border-1 border-[#321313] rounded-md px-[10px] py-[5px] flex justify-center items-center"
                >
                  <p>Add Category +</p>
                </Link>
              )}
            </div>
            {/* Menu */}
            {isApatizer ? <ApatizerMenu /> : ""}
            {isCoffee ? <CoffeeMenu /> : ""}
            {isNonCoffee ? <NonCoffeeMenu /> : ""}
            {isFoods ? <FoodsMenu /> : ""}
          </div>
        </div>
      </>
    </AuthContext.Provider>
  );
};

// Custom hook untuk mengakses currentUser dari mana saja dalam komponen produk
export const useAuth = () => {
  return useContext(AuthContext);
};

export default ProductsApatizer;

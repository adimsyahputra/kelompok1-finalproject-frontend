import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
// Asset
import kulitAyam from "../../assets/kulitAyam.png";
import lumpia from "../../assets/lumpia.png";
import tahuGejrot from "../../assets/tahuGejrot.png";

const ApatizerMenu = () => {
  // State untuk menentukan apakah user sudah login
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // State untuk mengelola item yang ditambahkan ke keranjang
  const [cart, setCart] = useState([]);

  // Fungsi untuk menangani penambahan item ke keranjang
  const handleOrderClick = (product) => {
    if (!isLoggedIn) {
      // Menampilkan alert jika user belum login
      Swal.fire({
        title: "Silahkan sign in untuk memesan pesanan!",
        icon: "info",
        confirmButtonText: "Ok",
      });
    } else {
      // Menambahkan produk yang dipilih ke keranjang
      setCart([...cart, product]);
      // Menampilkan alert sukses
      Swal.fire({
        title: "Product telah ditambahkan",
        icon: "success",
        confirmButtonText: "Ok",
      });
    }
  };

  // Daftar produk apatizer
  const products = [
    { name: "Tahu Gejrot", price: "IDR 15.000", image: tahuGejrot },
    { name: "Lumpia Rebung", price: "IDR 17.000", image: lumpia },
    { name: "Kulit Ayam Krispy", price: "IDR 20.000", image: kulitAyam },
  ];

  return (
    <>
      <div className="flex sm:justify-start justify-center w-[100%]">
        <table className="table-auto">
          <tbody className="flex flex-col w-[100%]">
            {/* Loop melalui setiap produk dan tampilkan dalam bentuk baris */}
            {products.map((product, index) => (
              <tr
                key={index}
                className="flex w-[100%] justify-start items-center"
              >
                <td className="basis-1/4">
                  {/* Menampilkan gambar produk */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="mx-2 w-[100px] sm:mx-10 my-5 sm:w-[130px]"
                  />
                </td>
                <td className="basis-1/4">
                  {/* Menampilkan nama produk */}
                  <p className="mx-5 sm:text-start text-center text-xs sm:text-base sm:mx-10 my-5">
                    {product.name}
                  </p>
                </td>
                <td className="basis-1/4">
                  {/* Menampilkan harga produk */}
                  <p className="mx-5 sm:text-start text-center text-xs sm:text-base sm:mx-10 my-5">
                    {product.price}
                  </p>
                </td>
                <td className="basis-1/4">
                  {/* Tombol untuk menambahkan produk ke keranjang */}
                  <button
                    onClick={() => handleOrderClick(product)}
                    className="rectangle w-[40px] h-[40px] bg-[#F4991A] border border-[#747474] mx-4 sm:mx-12 my-5"
                  >
                    <p className="text-2xl text-white">+</p>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end pe-10 w-[100%] my-5">
        {/* Link ke halaman checkout */}
        <Link
          to="/checkout"
          className="text-base sm:text-2xl font-bold bg-[#F4991A] border border-[#321313] w-[120px] h-[40px] flex justify-center items-center"
        >
          <p>Next &gt;</p>
        </Link>
      </div>
    </>
  );
};

export default ApatizerMenu;
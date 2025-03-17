import React from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

export default function PhnHome() {
  return (
    <div className="bg-green-100 min-h-screen flex flex-col items-center p-6">
      {/* Banner */}
      <motion.div 
        className="relative w-full max-w-4xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="http://acatea.vn/Content/uploads/product/backBanner.png"
          alt="Trà"
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white text-2xl font-bold">
          Chào mừng đến với Thế Giới Trà Thảo Mộc 🍵
        </div>
      </motion.div>

      {/* Hiệu ứng trượt ảnh */}
      <div className="mt-6 w-full max-w-3xl">
        <h3 className="text-xl font-semibold text-green-700 mb-3">Sản phẩm nổi bật</h3>
        <Swiper 
          modules={[Autoplay]} 
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={10} 
          slidesPerView={3} 
          loop
        >
          <SwiperSlide>
            <img src="tra-den.jpg" alt="Trà 1" className="rounded-lg shadow-md" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="tra-xanh.jpg" alt="Trà 2" className="rounded-lg shadow-md" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://via.placeholder.com/150" alt="Trà 3" className="rounded-lg shadow-md" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://via.placeholder.com/150" alt="Trà 4" className="rounded-lg shadow-md" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Nút điều hướng */}
      <div className="text-center p-6">
        <motion.button
          className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-600 hover:scale-105 transition"
          whileHover={{ scale: 1.1 }}
        >
          Khám phá ngay
        </motion.button>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-sm text-gray-600">
      </footer>
    </div>
  );
}
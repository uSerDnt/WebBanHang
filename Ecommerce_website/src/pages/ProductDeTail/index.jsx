import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import womenImage from "../../assets/women2.jpg";
import Footer from "../../components/Footer/index";

const colorOptions = ["#3498db", "#e74c3c", "#2ecc71", "white", "black"];
const sizeOptions = ["S", "M", "L", "XL"];

const ProductDetail = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);
  const [selectedSize, setSelectedSize] = useState(sizeOptions[0]);

  const handleLoginModal = () => {
    setOpenLoginModal(!openLoginModal);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = Math.max(1, Math.floor(Number(event.target.value)));
    setQuantity(newQuantity);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleBuyNow = () => {
    // Handle logic for "Buy Now" button click, e.g., redirect to checkout page or trigger purchase process
    console.log("Buy Now clicked!");
  };

  const similarProducts = [
    {
      id: 1,
      title: "Similar Product 1",
      image: womenImage,
      price: 59.99,
    },
    {
      id: 2,
      title: "Similar Product 2",
      image: womenImage,
      price: 64.99,
    },
    {
      id: 3,
      title: "Similar Product 3",
      image: womenImage,
      price: 74.99,
    },
    {
      id: 4,
      title: "Similar Product 4",
      image: womenImage,
      price: 89.99,
    },
  ];

  const productDetails = {
    title: "Áo Sweater Dệt Kim Cao Cấp",
    description: "Áo Sweater Dệt Kim Cao Cấp Thiết Kế Rách Phong Cách Retro Mỹ Thời Trang Thu Đông Cho Nam Giới",
    price: 99.99,
    brand: "Fashion Brand",
    material: "Chất liệu cao cấp",
    careInstructions: "Giặt tay, không sử dụng chất tẩy rửa mạnh, là ở nhiệt độ thấp",
  };

  return (
    <div>
      <Navbar handleLoginModal={handleLoginModal} />
      <div className="bg-white rounded-lg shadow-lg">
        <div className="flex">
          <div className="w-1/3 pl-4 flex items-center justify-center mt-4 mb-4">
            <img
              className="w-full h-auto object-cover rounded-l-lg"
              src={womenImage}
              alt="Product"
            />
          </div>
          <div className="w-2/3 p-6">
            <h2 className="text-2xl font-bold mb-4">{productDetails.title}</h2>

            {/* Product Description */}
            <p className="text-gray-700 mb-4">{productDetails.description}</p>

            {/* Size Options */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Size:</label>
              <div className="flex space-x-4">
                {sizeOptions.map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeClick(size)}
                    className={`text-sm py-2 px-4 border ${selectedSize === size ? 'border-blue-500' : 'border-gray-300'} rounded`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Số lượng:</label>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-16 border rounded-md py-2 px-3 text-sm"
              />
            </div>

            {/* Color Options */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Màu sắc:</label>
              <div className="flex space-x-4">
                {colorOptions.map((color) => (
                  <button
                    key={color}
                    onClick={() => handleColorClick(color)}
                    style={{
                      backgroundColor: color,
                      width: '30px',
                      height: '30px',
                      borderRadius: '5px',
                      border: selectedColor === color ? '2px solid #3498db' : '2px solid #ccc',
                      boxShadow: selectedColor === color ? '0 0 5px #3498db' : 'none',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">Chi tiết sản phẩm</h3>
              <p className="text-gray-700">
                <strong>Xuất xứ:</strong> {productDetails.brand}
              </p>
              <p className="text-gray-700">
                <strong>Chất liệu:</strong> {productDetails.material}
              </p>
              <p className="text-gray-700">
                <strong>Cách bảo quản:</strong> {productDetails.careInstructions}
              </p>
            </div>

            {/* Buy Now and Add to Cart Buttons */}
            <div className="mt-8 space-x-2">
              {/* Buy Now Button */}
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2" onClick={handleBuyNow}>
                <span className="hover:text-black">Mua ngay</span>
              </button>

              {/* Add to Cart Button */}
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link to="/cart" className="hover:text-black">Thêm vào giỏ hàng</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Products Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Sản phẩm tương tự</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {similarProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg p-4">
              <img
                className="w-full h-auto object-cover mb-4"
                src={product.image}
                alt={product.title}
              />
              <h4 className="text-lg font-bold">{product.title}</h4>
              <p className="text-gray-700">${product.price}</p>
              <Link to={`/product/${product.id}`} className="text-blue-500 hover:underline">
                Xem sản phẩm
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Add the Footer component at the end */}
      <Footer />
    </div>
  );
};

export default ProductDetail;
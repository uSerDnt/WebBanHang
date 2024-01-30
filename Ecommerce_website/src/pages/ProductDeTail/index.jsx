import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import womenImage from "../../assets/women2.jpg";
import { useSelector, useDispatch } from "react-redux";

const sizeOptions = ["S", "M", "L", "XL"];

const QuantitySelector = ({ value, onIncrease, onDecrease }) => {
  return (
    <div className="flex items-center">
      <button
        onClick={onDecrease}
        className="bg-primary text-white font-bold py-2 px-4 rounded-l"
      >
        {" "}
        -{" "}
      </button>
      <input
        type="text"
        value={value}
        readOnly
        className="w-12 border-t border-b border-gray-300 py-2 px-3 text-center text-sm"
      />
      <button
        onClick={onIncrease}
        className="bg-primary text-white font-bold py-2 px-4 rounded-r"
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { listProducts } = useSelector((state) => state.listProducts);
  console.log("listProducts", listProducts);
  console.log("id", id);

  useEffect(() => {
    if (listProducts && id) {
      const filterProduct = listProducts?.find((item) => item?.id === id);
      console.log("filterProduct", filterProduct);
    }
  }, []);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(sizeOptions[0]);

  const handleLoginModal = () => {
    setOpenLoginModal(!openLoginModal);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleBuyNow = () => {
    console.log("Buy Now clicked!");
  };

  const navigateToProductDetail = (productId) => {
    console.log(
      `Navigating to product detail page for productId: ${productId}`,
    );
  };

  const similarProducts = [
    {
      id: 1,
      title: "Ảnh tương tự 1",
      image: womenImage,
      price: 59.99,
    },
    {
      id: 2,
      title: "Ảnh tương tự 2",
      image: womenImage,
      price: 64.99,
    },
    {
      id: 3,
      title: "Ảnh tương tự 3",
      image: womenImage,
      price: 74.99,
    },
    {
      id: 4,
      title: "Ảnh tương tự 4",
      image: womenImage,
      price: 89.99,
    },
  ];

  const productDetails = {
    title: "Áo Sweater Dệt Kim Cao Cấp",
    description:
      "Áo Sweater Dệt Kim Cao Cấp Thiết Kế Rách Phong Cách Retro Mỹ Thời Trang Thu Đông Cho Nam Giới",
    price: 99.99,
    brand: "Fashion Brand",
    material: "Chất liệu cao cấp",
    careInstructions:
      "Giặt tay, không sử dụng chất tẩy rửa mạnh, là ở nhiệt độ thấp",
  };

  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg">
        <div className="flex">
          <div className="w-1/3 pl-4 flex items-center justify-center mt-4 mb-4">
            <img
              className="w-full h-auto object-cover rounded-l-lg rounded-r-lg"
              src={womenImage}
              alt="Product"
            />
          </div>
          <div className="w-2/3 p-6">
            <h2 className="text-2xl font-bold mb-4">{productDetails.title}</h2>

            {/* Mô tả Sản phẩm */}
            <p className="text-gray-700 mb-4">{productDetails.description}</p>

            {/* Tùy chọn kích thước */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Size:
              </label>
              <div className="flex space-x-4">
                {sizeOptions.map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeClick(size)}
                    className={`text-sm py-2 px-4 border ${
                      selectedSize === size
                        ? "border-primary text-white bg-primary"
                        : "border-gray-300 text-gray-700"
                    } rounded`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Số lượng */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Số lượng:
              </label>
              <QuantitySelector
                value={quantity}
                onIncrease={() => setQuantity(quantity + 1)}
                onDecrease={() => setQuantity(Math.max(1, quantity - 1))}
              />
            </div>

            {/* Thông tin chi tiết sản phẩm */}
            <div className="mb-4">
              <h3 className="text-lg font-bold mb-2">Chi tiết sản phẩm</h3>
              <p className="text-gray-700">
                <strong>Thương hiệu:</strong> {productDetails.brand}
              </p>
              <p className="text-gray-700">
                <strong>Chất liệu:</strong> {productDetails.material}
              </p>
              <p className="text-gray-700">
                <strong>Cách bảo quản:</strong>{" "}
                {productDetails.careInstructions}
              </p>
            </div>

            {/* Giá sản phẩm */}
            <div className="mb-4">
              <p className="text-lg font-bold text-gray-700">Giá:</p>
              <p className="text-xl font-bold text-black">
                ${productDetails.price}
              </p>
            </div>

            {/* Nút Mua ngay và thêm vào giỏ hàng */}
            <div className="mt-8 space-x-2">
              {/* Mua ngay */}
              <button
                className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded mx-2"
                onClick={handleBuyNow}
              >
                <span className="hover:text-black">Mua ngay</span>
              </button>

              {/* thêm vào giỏ hàng */}
              <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded">
                <Link to="/cart" className="hover:text-black">
                  Thêm vào giỏ hàng
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sản phẩm khác */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4 ml-4">Sản phẩm tương tự</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {similarProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg p-4">
              <Link
                to={`/product/${product.id}`}
                onClick={() => navigateToProductDetail(product.id)}
              >
                <img
                  className="w-full h-auto object-cover rounded-lg mb-4 cursor-pointer"
                  src={product.image}
                  alt={product.title}
                />
              </Link>
              <h1 className="text-lg font-bold">{product.title}</h1>
              <p className="text-gray-700">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

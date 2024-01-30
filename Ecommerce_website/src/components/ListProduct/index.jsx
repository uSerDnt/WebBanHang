import React, { useEffect, useState } from "react";
import { StarFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../../FirebaseConfig";

const ListProduct = ({ ProductsData }) => {
  const navigate = useNavigate();
  const handleProductDetail = (id) => {
    navigate(`/product/${id}`);
  };

  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       // Get a snapshot of the "products" collection
  //       const querySnapshot = await getDocs(collection(firestore, "Products"));

  //       // Extract product data from the snapshot
  //       const productsData = querySnapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }));

  //       setProducts(productsData);
  //     } catch (error) {
  //       console.error("Error fetching products: ", error);
  //     }
  //   };

  //   // Fetch products when the component mounts
  //   fetchProducts();
  // }, []);
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Sản phẩm bán chạy nhất dành cho bạn
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Các sản phẩm
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Thấu hiểu phong cách cá nhân tại Shopping Now - Đẳng cấp và Sáng
            tạo.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData?.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <button onClick={() => handleProductDetail(data.id)}>
                  <img
                    src={data.img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md"
                  />
                </button>
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    {/* <FaStar className="text-yellow-400" /> */}
                    <StarFilled className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              Xem Tất Cả
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;

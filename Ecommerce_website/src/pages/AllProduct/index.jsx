import React, { useContext, useEffect } from "react";
import myContext from "../../context/data/myContext";
import { StarFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const AllProduct = () => {
  const context = useContext(myContext);
  const {
    mode,
    product,
    searchkey,
    setSearchkey,
    filterType,
    setFilterType,
    filterPrice,
    setFilterPrice,
  } = context;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log("product", product);

  const navigate = useNavigate();
  const handleProductDetail = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
        {/* card section */}
        {product?.map((data) => (
          <div
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            key={data.id}
            className="space-y-3"
          >
            <button onClick={() => handleProductDetail(data.id)}>
              <img
                src={data.imageUrl}
                alt=""
                className="h-[220px] w-[150px] object-cover rounded-md"
              />
            </button>
            <div>
              <h3 className="font-semibold">{data.title}</h3>
              <p className="text-sm text-gray-600">{data.description}</p>
              <div className="flex items-center gap-1">
                {/* <FaStar className="text-yellow-400" /> */}
                <StarFilled className="text-yellow-400" />
                <span>{data.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProduct;

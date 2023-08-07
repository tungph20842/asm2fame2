import React from "react";
import { useGetProductsQuery } from "@/api/product";
import { Card, Skeleton } from "antd";
import { Link } from "react-router-dom";
const LayoutWebsite = () => {
  const { data: productData, isLoading } = useGetProductsQuery();

  return (
    <div>
    <div className="container">
      <div className=" header_section_top bg-gray-100 py-4 ">
        <div className="row">
          <div className="col-sm-12">
            <div className="custom_menu">
              <ul className="flex justify-center space-x-5 ">
                <li><a href="#" className="text-blue-500 hover:text-blue-700">Bán chạy nhất</a></li>
                <li><a href="#" className="text-blue-500 hover:text-blue-700">Ý tưởng quà tặng</a></li>
                <li><a href="#" className="text-blue-500 hover:text-blue-700">Bản phát hành</a></li>
                <li><a href="#" className="text-blue-500 hover:text-blue-700">Ưu đãi hôm nay</a></li>
                <li><a href="#" className="text-blue-500 hover:text-blue-700">Dịch vụ khách hàng</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="logo_section py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="logo flex items-center justify-center ml-auto pl-40">
              <a href="index.html">
                <img src="https://4192879.fs1.hubspotusercontent-na1.net/hub/4192879/hubfs/Blog%20Images/2022/May/Royalty%20free%20dance%20music%20.png?width=944&height=590&name=Royalty%20free%20dance%20music%20.png" alt="Logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center py-50">
    <h2 className="font-bold text-5xl py-6">danh sách sản phẩm</h2>
    </div>
    <div>
      {isLoading ? (
        <Skeleton active />
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {productData?.map(({ id, name, price, image }) => (
            <Card key={id} title={name} style={{ width: 300 }}>
              <img src={image} alt={name} style={{ width: "100%" }} />
              <Link to={`/${id}`}>
                <p>Giá: {price}</p>
              </Link>
            </Card>
          ))}
        </div>
      )}
    </div>
    <div className="bg-black">
      
    <div className="container py-10">
      <div className="">
        <div className="row">
          <div className="col-sm-12">
            <div className="custom_menu ml-auto pl-40">
              <ul className="flex justify-center space-x-5 ">
                <li><a href="#" className="text-white-500 hover:text-white-700">Bán chạy nhất</a></li>
                <li><a href="#" className="text-white-500 hover:text-white-700">Ý tưởng quà tặng</a></li>
                <li><a href="#" className="text-white-500 hover:text-white-700">Bản phát hành</a></li>
                <li><a href="#" className="text-white-500 hover:text-white-700">Ưu đãi hôm nay</a></li>
                <li><a href="#" className="text-white-500 hover:text-white-700">Dịch vụ khách hàng</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center ml-auto pl-10">
    <h2 className="text-white-500 hover:text-white-700">liên hệ:12345678</h2>
    </div>
    <div className="flex justify-center py-5 ml-auto pl-10">
    <h2 className="text-white-500 hover:text-white-700">© 2020 All Rights Reserved. Design by</h2>
    </div>
    </div>
    </div>  
    
  );
};

export default LayoutWebsite;
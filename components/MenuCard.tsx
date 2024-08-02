import React from "react";
import { FaHeart } from "react-icons/fa";

interface MenuItemCardProps {
  productKey: string;
  productName: string;
  productDescription: string;
  productImageUrl: string | null;
  productPrice: number;
}

const MenuCard: React.FC<MenuItemCardProps> = ({
  productName,
  productDescription,
  productImageUrl,
  productPrice,
}) => {
  return (
    <div
      className="flex flex-col rounded-xl border-1 bg-orange-300 h-full 
      ease-in-out delay-150 hover:-translate-y-1 hover:scale-15 hover:bg-orange-300 
      duration-300 relative" 
    >
      <div className="p-4 flex-grow">
        <h2 className="text-lg font-semibold text-white">{productName}</h2>
        <p className="text-black thin">{productDescription}</p>
        <div className="font-bold mt-4">
          <span>R {productPrice.toFixed(2)}</span>
        </div>
      </div>
      {productImageUrl ? (
        <div className="relative w-full h-40"> 
          <img
            src={productImageUrl}
            alt={productName}
            className="w-full h-full rounded-b-xl object-cover"
          />
        </div>
      ) : (
        <div className="w-full h-40">
          <img
            src="../../src/assets/placeholder-image.svg"
            alt="placeholder image"
            className="w-full h-full rounded-b-xl object-cover"
          />
        </div>
      )}
      <FaHeart className="absolute top-2 right-2 text-red-500 z-10 pt-2" size={30} /> {/* Moved outside of the main content */}
    </div>
  );
};

export default MenuCard;

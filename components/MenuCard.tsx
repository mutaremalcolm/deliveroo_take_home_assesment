import React from "react";

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
    <div className="flex flex-col rounded-xl border-1 bg-orange-300 h-full">
      <div className="p-4 flex-grow">
        <h2 className="text-lg font-semibold text-white">{productName}</h2>
        <p className="text-black thin">{productDescription}</p>
        <div className="font-bold mt-4">
          <span>R {productPrice.toFixed(2)}</span>
        </div>
      </div>
      {productImageUrl ? (
        <div className="w-full h-40">
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
    </div>
  );
};

export default MenuCard;

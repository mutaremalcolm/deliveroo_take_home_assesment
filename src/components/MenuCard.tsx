import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCirclePlus } from "react-icons/fa6";

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
    <Link
      href="/"
      className="flex flex-row w-full justify-between max-h-36 min-h-[90px] py-4 pb-4 gap-2 md:gap-3 border-b cursor-pointer transition duration-300 hover:scale-105"
    >
      <div className="flex h-20 overflow-hidden pb-4">
        {productImageUrl ? (
          <Image
            src={productImageUrl}
            alt={productName}
            width={100}
            height={100}
            className="rounded-2xl"
          />
        ) : (
          <Image
            src="/images/placeholder-image.svg"
            alt="placeholder image"
            width={80}
            height={100}
            className="px-6"
          />
        )}
      </div>
      <div className="flex flex-row w-full">
        <div className="flex flex-col w-full grow items-start space-y-1.5">
          <h3 className="font-medium line-clamp-2">{productName}</h3>
          <p className="text-xs text-gray-600 text-start font-light w-4/5 line-clamp-3">
            {productDescription}
          </p>
        </div>
        <div className="flex-none h-full font-medium">
          <div className="flex flex-col h-full w-full justify-between items-center text-sm">
            <span>R {productPrice.toFixed(2)}</span>
            <button>
              <FaCirclePlus
                className="bg-blue-900/30 rounded-full translate-x-3 -translate-y-2"
                size={16}
              />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MenuCard;

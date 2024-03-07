import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardImage,
} from "@/components/ui/card";

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
    <>
      <Card
        className="flex flex-row w-full max-h-40 min-h-[90px] rounded-lg my-2 transition duration-400
        hover:scale-95 hover:bg-secondary/80 cursor-pointer  bg-slate-50 hover:bg-slate-100"
      >
        <CardImage>
          {productImageUrl && (
            <img
              src={productImageUrl}
              alt={productName}
              className="w-full h-full  rounded-lg"
            />
          )}
        </CardImage>
        <div className="flex float-end place-content-end">
          <CardHeader className="flex items-center justify-center">
            <CardTitle className="flex items-center justify-center text-blue-900">
              {productName}
            </CardTitle>
            <CardDescription className="flex items-center justify-center text-blue-900">
              {productDescription}
            </CardDescription>
            <CardContent className="flex items-center justify-center text-blue-900">
              <p>${productPrice.toFixed(2)}</p>
            </CardContent>
          </CardHeader>
        </div>
      </Card>
    </>
  );
};

export default MenuCard;

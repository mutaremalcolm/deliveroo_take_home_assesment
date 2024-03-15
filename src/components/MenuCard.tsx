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
    <div className="w-full px-2 my-2">
      <Card className="flex flex-col h-full rounded-md border-blue-300 transition duration-400 hover:bg-transparent cursor-pointer bg-slate-200 sm:w-80">
        <CardHeader className="flex items-center h-full">
          {productImageUrl && (
            <CardImage className="min-w-0 w-40 h-40 lg:w-52 lg:h-52 md:w-44 md:h-44 sm:w-36 sm:h-36">
              <img
                src={productImageUrl}
                alt={productName}
                className="w-full h-full rounded-md object-cover"
              />
            </CardImage>
          )}
          <div className="flex flex-col flex-grow justify-center p-4">
            <div>
              <CardTitle className="text-blue-900">{productName}</CardTitle>
              <CardDescription className="text-blue-900">
                {productDescription}
              </CardDescription>
            </div>
            <div className="flex justify-center">
              <CardContent className="text-blue-900">
                <p>${productPrice.toFixed(2)}</p>
              </CardContent>
            </div>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default MenuCard;

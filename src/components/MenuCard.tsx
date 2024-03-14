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
      <Card
        // className="flex flex-row w-full justify-between max-h-36 min-h-[90px] py-4 pb-4 
        // gap-2 md:gap-3 border-b cursor-pointer transition duration-400 hover:scale-99"
      >
        <CardHeader className="flex items-center">
          <CardImage className="min-h-40 max-h-60">
            {productImageUrl && (
              <img
                src={productImageUrl}
                alt={productName}
                className="w-full h-full rounded-md object-fit-cover"
              />
            )}
          </CardImage>
          <div className="flex flex-col justify-center p-4">
            <CardTitle className="text-blue-900">{productName}</CardTitle>
            <CardDescription className="text-blue-900">
              {productDescription}
            </CardDescription>
            <CardContent className="text-blue-900">
              <p>${productPrice.toFixed(2)}</p>
            </CardContent>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default MenuCard;

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardImage
} from "@/components/ui/card";

import coke from "../assets/coke.jpeg";

const MenuCard = () => {
  return (
    <>
      <Card className="flex flex-row w-full max-h-40 min-h-[90px] my-2 transition duration-400
       hover:scale-95 hover:bg-secondary/80 cursor-pointer rounded-lg bg-slate-50 hover:bg-slate-100">
        <CardImage className="mt-0 flex items-center justify-center">
        <img src={coke} alt="image" className="h-40" />
        </CardImage>
        <CardHeader>
          <CardTitle className="flex items-center justify-center text-blue-900">Coke</CardTitle>
          <CardDescription className="flex items-center justify-center text-blue-900">330ml Can</CardDescription>
          <CardContent className="flex items-center justify-center text-blue-900">
          <p>$10.00</p>
        </CardContent>
        </CardHeader>
      </Card>
    </>
  );
};

export default MenuCard;

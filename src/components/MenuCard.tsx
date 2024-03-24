
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
    <div className="flex flex-row justify-between text-start rounded-xl border-2 mx-60">
      <div className="flex flex-col h-auto justify-between p-6">
        <div>
          <h2 className="text-lg font-semibold text-blue-900">{productName}</h2>
          <p className="text-blue-900/60 thin italic">{productDescription}</p>
        </div>

        <div className="font-bold ">
        <span>R {productPrice.toFixed(2)}</span>
        </div>
      </div>

      {productImageUrl ? (
        <div className="min-w-0 w-40 h-40 sm:w-36 sm:h-36 p-0.5">
          <img
            src={productImageUrl}
            alt={productName}
            className="w-full h-full rounded-xl object-cover"
          />
        </div>
      ) : (
        <div>
          <img
            src="../../src/assets/placeholder-image.svg" 
            alt="placehodler image"
            className="min-h-0 min-w-0 rounded-md object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default MenuCard;

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
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-xl border-2 mx-4 sm:mx-0">
      <div className="flex flex-col justify-between p-4 sm:p-6">
        <div>
          <h2 className="text-lg font-semibold text-blue-900">{productName}</h2>
          <p className="text-blue-900/60 thin italic">{productDescription}</p>
        </div>

        <div className="font-bold mt-4 sm:mt-0">
          <span>R {productPrice.toFixed(2)}</span>
        </div>
      </div>

      {productImageUrl ? (
        <div className="w-full sm:w-40 h-40 sm:h-auto sm:ml-4 p-0.5">
          <img
            src={productImageUrl}
            alt={productName}
            className="w-full h-full rounded-xl object-cover"
          />
        </div>
      ) : (
        <div className="w-20 h-20 sm:w-36 sm:h-36 p-0.5">
          <img
            src="../../src/assets/placeholder-image.svg" 
            alt="placeholder image"
            className="w-full h-full rounded-md object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default MenuCard;

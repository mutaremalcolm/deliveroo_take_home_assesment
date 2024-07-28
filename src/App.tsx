import "./App.css";
import Header from "./components/Header";
import { CardHeader } from "./components/ui/card";
import { apiDataFetch } from "../src/lib/apiDataFetch";
import MenuCard from "./components/MenuCard";

function App() {
  const { menuData } = apiDataFetch();

  return (
    <>
      <Header />
      {menuData ? (
        menuData.MenuSections.map((section) => {
          const sectionKey = section.MenuSectionId;

          const sectionCard = section.MenuItems ? (
            <div
              className="font-kumbh-sans rounded-lg border bg-card text-card-foreground shadow-sm border-none p-4 md:p-8 lg:p-12"
              key={sectionKey}
            >
              <CardHeader className="flex items-center gap-1 font-bold ">
                <span
                  className="text-2xl sm:text-3xl md:text-4xl capitalize 
                  tracking-wider font-khumb-sans text-blue-900"
                >
                  {section.Name}
                </span>
              </CardHeader>
              <div className="flex flex-col gap-6">
                {section.MenuItems.flatMap((product) => {
                  const {
                    Price,
                    PublicId,
                    Name,
                    Description,
                    ImageUrl,
                    MenuItemOptionSets,
                  } = product;

                  const checkMasterToggle = MenuItemOptionSets.find(
                    (masterItem) => masterItem.IsMasterOptionSet
                  );

                  if (checkMasterToggle) {
                    return checkMasterToggle.MenuItemOptionSetItems.map(
                      (secretItem) => (
                        <MenuCard
                          key={secretItem.PublicId}
                          productKey={PublicId}
                          productName={`${Name}: ${secretItem.Name}`}
                          productDescription={Description || ""}
                          productImageUrl={ImageUrl || ""}
                          productPrice={secretItem.Price || Price}
                        />
                      )
                    );
                  }

                  return (
                    <MenuCard
                      key={PublicId}
                      productKey={PublicId}
                      productName={Name}
                      productDescription={Description || ""}
                      productImageUrl={ImageUrl || ""}
                      productPrice={Price}
                    />
                  );
                })}
              </div>
            </div>
          ) : null;

          return sectionCard;
        })
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header";
import { Card, CardContent, CardHeader } from "./components/ui/card";
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
            <Card
              className="rounded-lg my-2 hover:scale-95 hover:bg-secondary/80 cursor-pointer bg-slate-50 hover:bg-slate-100"
              key={sectionKey}
            >
              <CardHeader className="flex gap-1 font-family: ui-serif font-bold md:flex-col">
                <span className="text-blue-900 text-2xl sm:text-3xl md:text-4xl items-center capitalize tracking-wider pb-2">
                  {section.Name}
                </span>
              </CardHeader>
              <CardContent className="flex flex-row justify-end">
                {section.MenuItems.flatMap((product) => {
                  const { Price, PublicId, Name, Description, ImageUrl, MenuItemOptionSets } = product;
                  
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
              </CardContent>
            </Card>
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

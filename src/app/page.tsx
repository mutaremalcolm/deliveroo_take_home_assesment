"use client";

import "./globals.css";
import Navigation from "../components/Navigation";
import MenuCard from "../components/MenuCard";
import { useApiDataFetch } from "../hooks/useApiDataFetch";
import React from "react";

function App() {
  const { menuData, loading, error } = useApiDataFetch();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Navigation />
      <div className="flex flex-col items-center mt-10 text-white font-bold text-lg" >
        {/* <h1>TODAY'S MENU</h1> */}
      </div>
      <div className="p-4 mt-5">
        {menuData
          ? menuData.MenuSections.map((section) => (
              <div
                key={section.MenuSectionId}
                className="mb-8 text-center text-white"
              >
                <h2 className="text-2xl font-semibold mb-4">{section.Name}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
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
            ))
          : null}
      </div>
    </>
  );
}

export default App;

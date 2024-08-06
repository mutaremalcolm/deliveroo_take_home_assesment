"use server";

import "./globals.css";
import Navigation from "../components/Navigation";
import MenuCard from "../components/MenuCard";
import React from "react";
import { Menu } from "../app/types/types"

async function fetchMenuData() {
  const response = await fetch(
    `https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json`,
  );
  if (!response.ok) {
    throw new Error(`Network response was not ok (Status: ${response.status})`);
  }

  const menuData = await response.json();
  return menuData;
}


export default async function App() {
  const menuData: Menu = await fetchMenuData();
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


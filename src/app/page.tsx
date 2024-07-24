import React from "react";
import Navigation from "../app/components/Navigation";
import ItemCard from "./components/ItemCard";


async function getMenu_Data() {
  const url = "https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const Menu_Data = await response.json();
    console.log(Menu_Data);
  } catch (error) {
    console.error(error.message);
  }
}

getMenu_Data();

export default function Home() {
  return (
    <>
    <Navigation />
    <ItemCard />
      
    </>
  );
}

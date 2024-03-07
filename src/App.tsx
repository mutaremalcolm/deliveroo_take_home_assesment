import "./App.css";
import Header from "./components/Header";
import { Card, CardHeader } from "./components/ui/card";
import { apiDataFetch } from "../src/lib/apiDataFetch";
import MenuCard from "./components/MenuCard";

function App() {
  const { menuData, loading, error } = apiDataFetch();
  console.log("App Component Log:", menuData, loading, error);

  return (
    <>
      <Header />
      <Card className=" max-h-40 min-h-[90px] my-2 transition duration-400
       hover:scale-95 hover:bg-secondary/80 cursor-pointer rounded-lg bg-slate-50 hover:bg-slate-100">
      <CardHeader className="flex gap-1 font-bold md:flex-col">
        <span className="text-xs md:text-sm uppercase font-extrabold text-blue-900 translate-y-3">
          Section:
        </span>
        <span className="text-blue-900 text-2xl sm:text-3xl md:text-4xl items-center capitalize tracking-wider pb-2">
          Soft drinks
        </span>
      </CardHeader>
      <MenuCard />
      </Card>
    </>
  );
}

export default App;

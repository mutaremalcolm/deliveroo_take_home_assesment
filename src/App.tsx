import './App.css'
import Header from './components/Header'
import {apiDataFetch} from "../src/lib/apiDataFetch";
import MenuCard from './components/MenuCard';

function App() {
  const { menuData, loading, error } = apiDataFetch();
  console.log("App Component Log:", menuData, loading, error);

  return (
    <>
     <Header /> 
     <MenuCard />
    </>
  )
}

export default App

import './App.css'
import Header from './components/Header'


function App() {
  const { menuData, loading, error } = apiDataFetch();
  console.log("App Component Log:", menuData, loading, error);

  return (
    <>
     <Header /> 
    </>
  )
}

export default App

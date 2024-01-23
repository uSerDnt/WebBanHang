import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  const handleOrderPopup = () => {
    // Implement your order popup logic here
    console.log('Order popup triggered!');
  };
  // project cui bap
  return(
   <div>
    <Navbar/>
    <Hero handleOrderPopup={handleOrderPopup} />
   </div>
  )
};

export default App;

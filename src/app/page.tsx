import EventHome from "./components/EventHome";
import EventShow from "./components/EventShow";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Problem from "./components/Problem";
import ShopCarts from "./components/ShopCarts";
import ShopSearch from "./components/ShopSearch";

export default function Home() {
  return (
    <>
    <Navbar/>
    <EventHome />
    <EventShow/>
    <ShopCarts/>
    <Problem/>
    <Footer/>
    </>
  );
}

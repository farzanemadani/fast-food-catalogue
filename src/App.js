import "./App.css";
import Header from "./Header/header";
import CategoryList from "./CategoryList/categoryList";
import { useEffect, useState } from "react";
import axios from "./axios";
import FastFoodList from "./FastFoodList/fastFoodList";
import Loading from "./Loading/loading";
import SearchBar from "./SearchBar/searchBar";
import notFound from "./assets/images/404.png";

function App() {
  const [loading, setLoading] = useState(false);
  const [fastFoodItems, setFastFoodItems] = useState([]);

  const fetchData = async (categoryId = null) => {
    setLoading(true);
    const response = await axios.get(
      `/FastFood/list${categoryId ? "?categoryId=" + categoryId : ""}`
    );
    setLoading(false);
    setFastFoodItems(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading theme="dark" />;
    }
    console.log("fastFoodItems", fastFoodItems);
    if (fastFoodItems.length === 0) {
      return (
        <div>
          <div className="alert alert-warning text-center">
            برای کلیدواژه فوق هیچ آیتمی یافت نشد
          </div>
          <img
            alt="404"
            className="mx-auto mt-5 d-block fade-in-horiz"
            src={notFound}
          />
        </div>
      );
    }

    return <FastFoodList fastFoodItems={fastFoodItems} />;
  };

  const filterItems = (categoryId) => {
    fetchData(categoryId);
  };

  const searchItems = async (term) => {
    setLoading(true);
    const response = await axios.get(
      `/FastFood/search${term ? "?term=" + term : ""}`
    );
    setLoading(false);
    setFastFoodItems(response.data);
  };
  return (
    <div className="wrapper bg-faded-dark">
      <Header></Header>
      <CategoryList filterItems={filterItems}>
        <SearchBar searchItems={searchItems} />
      </CategoryList>
      <div className="container mt-4">{renderContent()}</div>
    </div>
  );
}

export default App;

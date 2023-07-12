import { useEffect } from "react";
import axios from "../axios";

const CategoryList = () => {
  useEffect(() => {
    const fetchCategory = async () => {
        const response = await axios.get('/FoodCategory/categories');
        console.log(response.data);
    }

    fetchCategory();
    
  }, []);

  return <div>category List</div>;
};
export default CategoryList;

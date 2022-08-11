import { useEffect } from "react";
import axios from "axios";
const productsUrl = "https://course-api.com/react-store-products";
const randomUserUrl = "https://randomuser.me/api";

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const response = await axios.get(productsUrl);
      console.log(response);
    } catch (error) {
      console.log("Core Error ---_> ", error);
      console.log("Axios Error ---> ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">global instance</h2>;
};
export default GlobalInstance;

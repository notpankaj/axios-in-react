import { useEffect } from "react";
import { authFetch } from "../axios/interceptops";
const url = "https://course-api.com/react-store-products";

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const response = await authFetch("/react-store-products");
      console.log(response);
    } catch (error) {
      console.log("Core Error ---_> ", error);
      console.log("Axios Error ---> ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">interceptors</h2>;
};
export default Interceptors;

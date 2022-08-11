import { useEffect } from "react";
import axios from "axios";

const url = "https://course-api.com/react-store-products";

const FirstRequest = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const data = response.data;
        console.log(data);
        // throw new Error("custom error");
      } catch (error) {
        let errorMessage = error.response?.data || error?.message;
        console.log({ errorMessage });
      }
    };

    fetchData();
  }, []);

  return <h2 className="text-center">first request</h2>;
};
export default FirstRequest;

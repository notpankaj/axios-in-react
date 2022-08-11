import { useState } from "react";
import axios from "axios";

const url = "https://icanhazdadjoke.com/";
// Accept : 'application/json'

const Headers = () => {
  const [joke, setJoke] = useState("random dad joke");

  const fetchDadJoke = async () => {
    try {
      const response = await axios.get(url, {
        headers: {
          Accept: "application/json",
        },
      });
      console.log(response);
      const data = response.data;
      if (!data.joke) {
        throw new Error("Failed to get joke !");
      }
      setJoke(data.joke);
    } catch (error) {
      console.log(error.response?.data);
      const errMsg = error.response?.data || error?.message;
      console.log({ errMsg });
    }
  };

  return (
    <section className="section text-center">
      <button className="btn" onClick={fetchDadJoke}>
        random joke
      </button>
      <p className="dad-joke">{joke}</p>
    </section>
  );
};
export default Headers;

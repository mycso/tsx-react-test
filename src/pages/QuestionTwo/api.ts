import axios from "axios";

export const getCardDetails = async (): Promise<any> => {
  let newPromise = new Promise((resolve: any, reject) => {
    axios.get("http://localhost:3001/example").then((result) => {
      const { title, body, imgSrc } = result.data;
      resolve([title, body, imgSrc]);
    });
  });
  return newPromise;
};

import { useEffect } from "react";


export default function Popular() {

    useEffect(() => {
        getPopular();
    }, []);

    // fetching Popular;ar recipes fron sponacular API 
    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
        // to get the data in json format 
        const data = await api.json();
        console.log(data);
    }
  return (
    <div>Popular</div>
  )
}

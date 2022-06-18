import { useEffect, useState } from "react";
import styled from 'styled-components'; //for styled components
import { Splide, SplideSlide } from "@splidejs/react-splide"; //for caurosel
import '@splidejs/splide/dist/css/splide.min.css';  // for splide to work you must import the css 
import { Link } from "react-router-dom";

export default function Veggie() {

  const [veggie, setVeggie] = useState([]);


    useEffect(() => {
        getVeggie();
    }, []);

    // fetching Popularlar recipes fron sponacular API 
    const getVeggie = async () => {
        
      // fetching the images and store them in local storage then check if they are thier to load them from thier instead of API
    const check = localStorage.getItem('veggie');

    if(check) {
      setVeggie(JSON.parse(check));
    } else {
      // getching vegetables only 
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
      // to get the data in json format 
      const data = await api.json();

      // in local storage you can only save strigs 
      localStorage.setItem('veggie', JSON.stringify(data.recipes))
      console.log(data);
      setVeggie(data.recipes)
    }
    }

  return (
    <div>
      <Wrapper>
        <h3>Our veggetable pics</h3>
        {/* splide is the whole caurosel while splideslide is the single item  */}
        <Splide options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '1rem'
          
        }}> 
        {veggie.map((recipe) => {
            return(
              <SplideSlide key={recipe.id}>
                  <Card>
                  <Gradient />
                    <Link to={'/recipe/' + recipe.id}>
                      <p>{recipe.title}</p>
                      <img src={recipe.image} alt={recipe.title}></img>
                    </Link>
                  </Card>
                  {/* this gradient is for shadow on the cards to make the text readble  */}
              </SplideSlide>
            )
          })}
        </Splide>
      </Wrapper>
    </div>
  )
}


// styled components 
const Wrapper = styled.div`
  margin: 1rem 0rem;
`;
const Card = styled.div`
  min-height: 10rem;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 1rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size:0.6rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7));
`;
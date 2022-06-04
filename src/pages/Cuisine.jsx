import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

export default function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
        const recipe = await data.json();
        setCuisine(recipe.results)
    }

    // we set params.type in the array so that it reloads evry time the browser loads 
    useEffect(() => {
        getCuisine(params.type)
        console.log(params.type)
    },[params.type])

  return (
    <Grid>
        {cuisine.map((item) => {
            return(
                <Card key={item.id}>
                    <img src={item.image} alt=''/>
                    <h4>{item.title}</h4>
                </Card>
            )
        })}
    </Grid>
  )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    grid-gap: 1rem;
`;

const Card = styled.div`
    img{
        width: 100%;
        border-radius: 1rem;
    }

    a {
        text-decoration: none;
    }

    h4 {
        text-align: center;
        padding: rem;
    }

`;
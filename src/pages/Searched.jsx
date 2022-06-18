import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

export default function Searched() {

    const [searchedRecipes, setsearchedRecipes] = useState([]);

    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const recipe = await data.json();
        setsearchedRecipes(recipe.results)
    }

    useEffect(() => {
        getSearched(params.search);
    }, [params.search])

  return (
    <Grid>
        {searchedRecipes.map((item) => {
            return (
                <Card key={item.id}>
                    <Link to={'/recipe/'+item.id}>
                        <img src={item.image} alt='image'/>
                        <h4>{item.title}</h4>
                    </Link>
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
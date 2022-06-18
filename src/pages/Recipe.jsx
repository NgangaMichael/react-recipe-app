import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export default function Recipe() {

  let params = useParams();
  
  const [details, setDetails] = useState();
  const [activetab, setActivetab] = useState('instructions');

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const detailDeta = await data.json();
    setDetails(detailDeta);
    console.log(detailDeta);
  };


  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailsWrapper>
      <div>
        <h3>{details.title}</h3>
        <img src={details.image} alt='image' />
    </div>

    <Info>
      <Buttons className={activetab === 'instructions' ? 'active' : ''} onClick={() => setActivetab('instructions')}>Instructions</Buttons>
      <Buttons className={activetab === 'ingredients' ? 'active' : ''} onClick={() => setActivetab('ingredients')}>Ingredients</Buttons>
      
      {activetab === 'instructions' && (
        <div>
          {/* this will render out text with html tags  */}
          {/* <h5>{details.summeary}</h5>         */}
          <h5 dangerouslySetInnerHTML={{__html: details.summary}} ></h5>
          <h5 dangerouslySetInnerHTML={{__html: details.instructions}} ></h5>
        </div> 
      )}
         
      {activetab === 'ingredients' && (
        <ul>
        {details.extendedImgredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      )}

      
    </Info>

    </DetailsWrapper>
  )
}

const DetailsWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h2{
    margin-bottom: 2rem;
  }

  li {
    font-size: 1rem;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;
  }
`;

const Buttons = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
`;
import React, { useState } from 'react'
import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Search() {

    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        // navigate takes you to that sppecific page that you have searched 
        navigate('/searched/' + input);
    }

  return (
    <Formstyle onSubmit={submitHandler}>
        <div>
            <FaSearch />
            <input onChange={(e) => setInput(e.target.value)} type='text' value={input} />
        </div>
    </Formstyle>
  )
}

const Formstyle = styled.form`
    margin: 0rem 12rem;
    position: relative;
    width: 100%;

    div {
        width: 100%;
        position: relative;
    }

    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1rem;
        color: white;
        padding: 0.3rem 1rem;
        border: none;
        border-radius: 1rem;
        outline: none
        width: 100%;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
display: inline-flex;
width: 35%;
align-content: center;
justify-content: space-evenly;
background-color: lightgrey;
border: 1px black solid;
margin: 2%;
`;

export default function Ships(props){
    return(
        <Wrapper>
            <div className='shipCard'>
                <h2>{props.name}</h2>
                <p>Model: {props.model}</p>
                <p>Cost: {props.cost} credits</p>
                <p>Length: {props.length}</p>
                <p>Hyperdrive Rating: {props.hyperDrive}</p>
            </div>
        </Wrapper>
    )
}

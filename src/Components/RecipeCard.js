import React from 'react'
import styled from 'styled-components'

function RecipeCard({recipe, handleDelete}) {

    const {id, image, name, from, category} = recipe
    console.log(name)

    return(
        <RecipeWrapper>
        <div className="card">
            <img src={image} width="130" height="130" alt="No Pic"/>
            <h2 className="name">{name}</h2>
            <h3 className="from">{from}</h3>
            <div className="category">{category}</div>
            <button onClick={() => handleDelete(id)}>🗑 Delete Recipe</button>
        </div>
        </RecipeWrapper>
    )
}

export default RecipeCard;

const RecipeWrapper = styled.div `
 width: 200px;
    margin: 10px;
    padding: 25px;
    box-shadow:  0 0 20px rgba(0, 0, 0, 1.0), 0 0 40px rgba(0, 0, 0, 0.12);
    border-radius: 5px;`
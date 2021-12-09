import React from 'react';
import image from './img/frikadellen.jpeg';


const MainRecipe = () => {
    return (
        <div class="recipeContainer">
            <img src={image} alt="food" />
            <h4>Fusce dictum finibus</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, earum.</p>
            <p class="turquois">$ 45</p>
        </div>
    );
}

export default MainRecipe;
import React from 'react';

const IngredientsList = (props) => {
    const {
        ingredients: {ingredient1, ingredient2, ingredient3},
    } = props.sentState;

    return (
        <section class="output">
        <h2>Here's yer recipe:</h2>
        <ul>
            <li key={ingredient1}>
                    {ingredient1}
            </li>
            <li key={ingredient2}>
                    {ingredient2}
            </li>
            <li key={ingredient3}>
                    {ingredient3}
            </li>
        </ul>
        </section>
    )
}

export default IngredientsList
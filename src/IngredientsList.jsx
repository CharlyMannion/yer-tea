import React from 'react';

const IngredientsList = (props) => {
    return (
        <ul>
            {props.sentIngredients.map((ingredient) => {
                return (
                    <li key={ingredient}>
                        <p>
                            {ingredient}
                        </p>
                    </li>
                );
            })}
        </ul>
    )
}

export default IngredientsList
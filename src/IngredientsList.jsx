import React from 'react';

const IngredientsList = (props) => {
    console.log(props, '<----------- PROPS');
    return (
        <ul>
            {props.tasks.map((ingredient) => {
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
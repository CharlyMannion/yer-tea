import React from 'react';

class IngredientAdder extends React.Component {
    state = {
        ingredients: {ingredient1: '', ingredient2: '', ingredient3: ''}
    };

    handleChange = (event) => {
        const inputName = event.target.name;
        const value = event.target.value;
        this.setState((prevState) => {
            return {
                ingredients: {...prevState.ingredients, [inputName]: value},
                hasSubmitted: prevState.hasSubmitted
            };
        });
    };

    render() {
        return (
            <form onSubmit={(event) => {
                event.preventDefault();
                const {
                    ingredients: {ingredient1, ingredient2, ingredient3},
                    hasSumitted
                } = this.state;
                this.props.addIngredient(ingredient1, ingredient2, ingredient3, hasSumitted);
                this.setState({
                    ingredients: {ingredient1: '', ingredient2: '', ingredient3: ''},
                    hasSubmitted: false
                })
            }}
            >
                <h2>
                    Pop Yer Ingredients in Here Lad
                </h2>
                <label htmlFor='ingredient_one'>
                    Ingredient One:
                </label>
                <input 
                id="ingredient_1" 
                name="ingredient1" 
                onChange={this.handleChange} 
                value={this.state.ingredients.ingredient1}
                />  
                <input 
                id="ingredient_2" 
                name="ingredient2" 
                onChange={this.handleChange} 
                value={this.state.ingredients.ingredient2}
                /> 
                <input 
                id="ingredient_3" 
                name="ingredient3" 
                onChange={this.handleChange} 
                value={this.state.ingredients.ingredient3}
                />                
                <button>Push yer button there's a good lad</button>
            </form>
        )
    }


}

export default IngredientAdder
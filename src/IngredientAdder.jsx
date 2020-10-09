import React from 'react';

class IngredientAdder extends React.Component {
    state = {
        ingredient_one: '',
        // ingredient_two: ''

    };

    handleChange = (event) => {
        const inputName = event.target.name;
        const value = event.target.value;
        this.setState(() => {
            return {
                [inputName]: value
            }
        });
    }

    render() {
        return (
            <form onSubmit={(event) => {
                event.preventDefault();
                this.props.addIngredient(
                    this.state.ingredient_one
                    // ingredient_two: this.state.ingredient_two,

                );
                this.setState({
                    ingredient_one: '',
                    // ingredient_two: ''
                })
            }}
            >
                <h2>
                    Pop Yer Ingredients in Here Lad
                </h2>
                <label htmlFor='ingredient_one'>
                    Ingredient One:
                </label>
                <input id="ingredient_one" name="ingredient_one" onChange={this.handleChange} value={this.state.ingredient_one}/>  
                {/* <label htmlFor='ingredient-two'>
                    Ingredient Two:
                </label>
                <input id="ingredient-two" name="ingredient-two" onChange={this.handleChange} value={this.state.ingredient_two}/>   */}
                <button>Push yer button there's a good lad</button>
            </form>
        )
    }


}

export default IngredientAdder
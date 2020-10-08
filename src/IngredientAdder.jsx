import React from 'react';

class IngredientAdder extends React.Component {
    state = {
        name: ''
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
                this.props.addIngredient({
                    name: this.state.name
                });
                this.setState({
                    name: '',
                })
            }}
            >

                <label htmlFor='ingredient'>
                    Pop yer ingredient in here:
                </label>
                <input id="ingredient" name="ingredient" onChange={this.handleChange} value={this.state.ingredient}/>  
                <button>Push yer button there's a good lad</button>
            </form>
        )
    }


}

export default IngredientAdder
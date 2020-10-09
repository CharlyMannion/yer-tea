import React from 'react';
import IngredientsList from './IngredientsList.jsx';
import IngredientAdder from './IngredientAdder.jsx';
import './App.css';

class App extends React.Component {
    state = {
      ingredients: ['flour', 'milk']
  }

    addIngredient = (ingredient) => {
        this.setState((prevState) => {
            return {
                ingredients: [...prevState.ingredients, ingredient]
            }
        })
        console.log(this.state)
    }

    render() {
        return (
            <div className='App'>
            <h1>You'll get what yer given</h1>
            <h2>Give us some ingredients then</h2>
            <IngredientsList sentIngredients={this.state.ingredients}/>
            <IngredientAdder addIngredient={this.addIngredient}/> 
            </div> 
            );
    }
}



export default App;

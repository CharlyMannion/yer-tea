import React from 'react';
import IngredientsList from './IngredientsList.jsx';
import IngredientAdder from './IngredientAdder.jsx';
import './App.css';

class App extends React.Component {
    state = {
      ingredients: {ingredient1: '', ingredient2: '', ingredient3: ''},
      hasSubmitted: false
  }

    addIngredient = (ingredient1, ingredient2, ingredient3, hasSubmitted) => {
        this.setState(() => {
            return { 
                ingredients: {ingredient1, ingredient2, ingredient3},
                hasSubmitted: !hasSubmitted,
        };
    });
};

    render() {
        return (
            <div className='App'>
            <h1>You'll get what yer given</h1>
            <h2>Give us some ingredients then</h2>
            <IngredientAdder addIngredient={this.addIngredient}/> 
            {this.state.hasSubmitted} && <IngredientsList sentState={this.state}/>
            </div> 
            );
    }
}



export default App;

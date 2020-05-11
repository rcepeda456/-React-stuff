import React, {Component} from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person';

;


class App extends Component {
  
    state = {
      persons:[
        {id:'1',name: "Ray", age:23},
        {id:'2',name: "Josh", age:17},
        {id:'3',name: "Daniel", age:9},
      ],
      otherState : 'some other value',
      showPersons:false
    }
    switchNameHandler = (newName) => {
    //console.log('this was clicked!');
    this.setState( {

      persons:[

        {name: newName, age:23},
        {name: "Joshua", age:17},
        {name: "Daniel", age:10},
      ]
      
      } )
   

    
    }
     nameChangeHandler = (event, id) => {
    //console.log('this was clicked!');
    const personsIndex = this.state.persons.findIndex(p => {
      return p.id === id;

    });
    const persons ={
      ... this.state.persons[personsIndex]
    };
    persons.name = event.target.value;

    const person = [...this.state.persons];
    persons[personsIndex] = person;
    this.setState( {persons: persons});

    }
    deletePersonHandler= (personsIndex) =>{
      // u can do this or the spread code below. this.state.persons.slice();
      const persons = [... this.state.persons];
      persons.splice(personsIndex, 1);
      this.setState({persons:persons});


    }
   togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
    //what this code does is if doesShow is true it will send showPerson to false
    //if doesShow is false it will send showPerson to true
   }


    
    
    render(){
      const style={
        backgroundColor:'green',
        color:'white',
        font:'inherit',
        border: '1px solid blue',
        padding:'8px',
        cursor:'pointer',
        ':hover':{
          backgroundColor:'lightgreen',
          color:'black'
        }
      };
    
      let persons = null;
      if(this.state.showPersons){
        persons =(
      <div>
      {this.state.persons.map((person, index) =>{
        return <Person
        click={() =>this.deletePersonHandler(index)}
        name={person.name}
        age={person.age}
        key={person.id} 
        changed={(event)=>this.nameChangeHandler(event, person.id)}/>
      })}
       
       </div> 
        );
        style.backgroundColor='red';
        style [':hover']={
          backgroundColor:'salmon',
          color:'black'
        };
      }
      const classes = []; //made a var that takes a empty array
      if(this.state.persons <=2){
        classes.push('red'); //if statement says if the len of persons is less 2 make it red
      }
      if(this.state.perosn <=1){
        classes.push('bold'); //if statement says if len is less than 1 make it bold
      }
  return (
    <div className="App">
     <h1>Hi I'm a React app</h1>
       <p> This is really working!</p>
       <button
       style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons </button>
        {persons}
    </div>
  );
}
}
export default Radium(App);

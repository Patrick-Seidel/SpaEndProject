import React, { Component } from 'react'
import ListItem from '../components/ListItem'

export default class ListOfAllItems extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            userInput: ""
        }
    }

    
    handleNewItem = (e) => {
        this.setState({
            userInput: e.target.value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault()
       
        if(this.state.userInput.trim() !== "") {
            this.props.addItem(this.state.userInput)
        this.setState({
            userInput:""
            })
        }
        
    }

    

    render() {
        // recibiendo los objetos de items de app.js
        const toDos = this.props.items
        const todoItems = toDos.map((el) => {
            return ( 
                
                  <ListItem item={el} key={el.text} changeStatus={this.props.changeStatus} removeItem={this.props.removeItem} editItem={this.props.editItem}/>
            )
        })

        return (
            <div>
                
                <form action="plan-form" onSubmit={this.handleSubmit}> {/* es para que cuando le demos a submit use el metodo handleSubmit de mas arriba*/}
                    <label className="input-item"> <br/>
                        <input type="text" name="todo" value={this.state.userInput} onChange={this.handleNewItem}/>
                    </label>
                    <input type="submit" className="btn" value="Ferig"/>
                </form>
                
                <div style={{
                    width: "400px"
                }}>
                    <ul>
                        {todoItems}
                    </ul>
                </div>
                
            </div>
        )
    }
}

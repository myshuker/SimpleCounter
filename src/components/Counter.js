import React, { Component } from 'react';

export default class Counter extends Component {
                 state = {
                   counter: 0,
                 };

                 increment() {
                   this.setState({
                     counter: this.state.counter + 1,
                   });
                 }

                 decrement =() => {
                   this.setState({
                     counter: this.state.counter - 1,
                   });
                 }

                 render() {
                   return (
                   <div>
                       Counter: {this.state.counter}{' '} <br/>
                    <button onClick={()=> this.increment()}>+</button>{' '}
                    <button onClick={ this.decrement}>-</button>
                       </div>
                   )
                 }
               }
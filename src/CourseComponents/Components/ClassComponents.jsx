import React from 'react';

export default class ClassComponents extends React.Component {
    constructor(props) {
        super(props);   
        console.log(this);
            this.state = {
            name: "oumaima",
            age: 29,
            etat:{
                etatx: "x",
            }
        }
    }
    // state={
    //     name: "oumaima",
    //     age: 29
    // }
    render () {
        return (
            <div>
                <h2>Class Components from {this.props.name}</h2>
                <p>name: {this.state.name}</p>
                <p>age: {this.state.etat.etatx}</p>

            </div>
        )
    }
}
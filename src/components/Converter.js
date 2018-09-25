import React, { Component } from 'react';

// VARIABLES
const rgbLetters = {
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
    g: 16
};
const stepOne = [128, 64, 32, 16, 8, 4, 2, 1];
const stepTwo = [8, 4, 2, 1, 8, 4, 2, 1]

class Converter extends Component {
    constructor() {
        super();
        this.state = {
            hexValue: '',
            stepOneAnswer: [],
            stepTwoAnswer: []
        }
    }
    render() {
        return (
            <section className="converter">
                <p>{`Hex Value: ${this.state.hexValue}`}</p>
            </section>
        );
    }
};

export default Converter;

// for each of the three numbers in the rgbValue
// see if each number in the stepOne arraycan be subtracted R,G, or B value. If it can it gets a 1, if not it gets a 0. Store those 0s and 1s in this.state.stepOneAnswer.
// Run through the stepTwo array twice. For each number in the stepTwo array, compare it to the value with the matching key in stepOneAnswer and if the stepOneAnswer number is 1, add the stepTwo array number to a counter. At the end of the map loop, append that counter to the stepTwoAnswer array.
// if the stepTwoAnswer is greater than or equal to 10, assign it the corresponding letter value in rgbLetters and then append that letter to this.state.hexValue. If the number is less than 10, append that letter to this.state.hexValue. Call this.props.updateHex.
import React from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            userInput: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            userInput: e.target.value
        }, () => {
            this.props.rgbInput(this.state.userInput)
        }) 
    }
    handleSubmit = (e) => {
        e.preventDefault()
    }
    render() {
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <label htmlFor="rgb">RGB Value</label>
                <input type="text" id="rgb" placeholder="255,255,255" onChange={this.handleChange} />
                <input type="submit" />
            </form>
        );
    }
};

export default Form;
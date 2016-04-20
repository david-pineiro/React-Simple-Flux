var React = require('react');


var Example3 = React.createClass({

    getInitialState: function() {
        return ({text : 'Chan chan chan! ',
                newText: '',
                textToAdd: '',
                shouldUpdate: true});
    },

    shouldComponentUpdate: function(prevState,nextState) {
        return true;
    },

    inputText: function(event) {
        this.setState({textToAdd: event.target.value});
    },

    showText: function() {
        this.setProps({showText: !this.props.showText});
    },

    addText: function() {
        var aux = this.state.text.concat(this.state.textToAdd);
        this.setState({text: aux});
    },

    clearContent: function() {
        this.setState({text: ''});
    },

    re_render: function() {
        this.forceUpdate();
    },

    render: function() {
        return (
            <div>
                <div><span>{this.props.title}</span></div>
                <input type="text" onChange={this.inputText}/>
                <button onClick={this.addText}>Add Text</button>
                <button onClick={this.showText}>Show/Hide Text</button>
                <br />
                <button onClick={this.clearContent}>Clear</button><br />
                {this.props.showText ? <p>{this.state.text}</p> : null}
            </div>
        );
    }
});

module.exports = Example3;
var React = require('react');
var MockData = require('../utils/mockData');
var ExampleActions = require('../actions/exampleActions');


function getOptions(data) {
    var i = 0;
    var options = [] ;

    for (i=0; i<data.length; i+=1) {
        options.push(<option key={i}> {data[i]} </option>);
    }

    return options;
}

var style = {
    appearance:         'none',
    WebkitAppearance:   'none',
    MozAppearance:      'none',
    textIndent:         '0.01px',
    textOverflow:       '',
    width:              '100%',
    height:             '30px'
};

var Select = React.createClass({

    getDescriptionForCosa: function (event) {
        MockData.getDescriptionForCosa(event.target.value);
        ExampleActions.setSelectedCosa(event.target.value);
    },

    render: function() {
        return (
            <select style={this.props.useStyle ? style : null} onClick={this.getDescriptionForCosa}>{getOptions(this.props.data)}</select>
        );
    }
});

module.exports = Select;
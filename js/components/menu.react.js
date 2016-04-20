var React = require('react');
var MockData = require('../utils/mockData');
var Select = require('./select.react.js');
var ShowDesc = require('./showDesc.react.js');
var ExampleStore = require('../stores/exampleStore');
var ExampleActions = require('../actions/exampleActions');


function getMenuState() {
    return {
        selectData:  ExampleStore.getSelectData(),
        selectedCosa:ExampleStore.getSelectedCosa(),
        dataDesc:    ExampleStore.getDataDesc(),
        useStyle:    ExampleStore.getUseStyle()
    }
}


var style = {
    marginLeft:         'auto',
    marginRight:        'auto',
    maxWidth:           '500px',
    background:         '#F8F8F8',
    padding:            '30px 30px 20px 30px',
    font:               '12px Arial, Helvetica, sans-serif',
    color:              '#666',
    borderRadius:       '5px',
    WebkitBorderRadius: '5px',
    MozBorderRadius:    '5px'
};


var Menu = React.createClass({

    getInitialState: function () {
        MockData.getSelectData();
        MockData.getDescriptionForCosa(ExampleStore.getSelectData()[0]);
        return getMenuState();
    },

    componentWillMount: function () {
        ExampleStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        ExampleStore.removeChangeListener(this._onChange);
    },


    render: function() {
        return (
            <div style={this.state.useStyle ? style : null}>
                <Select data={this.state.selectData}
                        useStyle={this.state.useStyle}/>
                <div><br /></div>
                <ShowDesc dataDesc={this.state.dataDesc}
                          selectedCosa={this.state.selectedCosa}
                          useStyle={this.state.useStyle}/>
            </div>
        );
    },

    _onChange: function() {
        this.setState(getMenuState());
    }

});

module.exports = Menu;
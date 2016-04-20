var React = require('react');
var MockData = require('../utils/mockData');
var ExampleStore = require('../stores/exampleStore');
var ExampleActions = require('../actions/exampleActions');


var desc = {};

var labelStyle = {
    display: 'block',
    margin: '0px 0px 5px'
};

var spanStyle = {
    float:      'left',
    marginTop:  '10px',
    color:      '#5E5E5E'
};

var inputTextStyle = {
    color:                  '#555',
    height:                 '30px',
    lineHeight:             '15px',
    width:                  '100%',
    padding:                '0px 0px 0px 10px',
    marginTop:              '2px',
    border:                 '1px solid #E5E5E5',
    background:             '#FBFBFB',
    outline:                '0',
    WebkitBoxShadow:        'inset 1px 1px 2px rgba(238, 238, 238, 0.2)',
    boxShadow:              'inset 1px 1px 2px rgba(238, 238, 238, 0.2)',
    font:                   'normal 14px/14px Arial, Helvetica, sans-serif'
};

var buttonStyle = {
    backgroundColor:            '#9DC45F',
    borderRadius:               '5px',
    WebkitBorderRadius:         '5px',
    MozBorderBorderRadius:      '5px',
    border:                     'none',
    padding:                    '10px 25px 10px 25px',
    color:                      '#FFF',
    textShadow:                 '1px 1px 1px #949494',
    margin:                     '0 5px'
};

var ShowDesc = React.createClass({

    getInitialState: function () {
        desc = this.props.dataDesc;
        return null;
    },

    componentWillUpdate: function (nextProps) {
        desc = nextProps.dataDesc;
    },

    saveField: function (event) {
        desc[event.target.id] = event.target.value;
    },

    saveFieldWithUpdate: function (event) {
        desc[event.target.id] = event.target.value;
        this.forceUpdate();
    },

    saveOnStore: function () {
        ExampleActions.saveDescOnStore(
               {field1 : this.refs.field1.value,
                field2 : this.refs.field2.value,
                field3 : this.refs.field3.value,
                field4 : this.refs.field4.value})
    },

    loadFromStore: function () {
        ExampleActions.getDataDescription(ExampleStore.getSavedDesc());
    },

    loadFromMock: function () {
        MockData.getDescriptionForCosa(this.props.selectedCosa);
    },

    loadStyle: function () {
        ExampleActions.setUseStyle(!this.props.useStyle);
    },

    render: function() {
        return (
            <div>
                <label style={this.props.useStyle ? labelStyle : null}>Field1: </label>
                <input style={this.props.useStyle ? inputTextStyle : null} type="text" id="field1"
                       ref="field1" onChange={this.saveFieldWithUpdate} value={desc.field1}/><br />
                <label style={this.props.useStyle ? labelStyle : null}>Field2: </label>
                <input style={this.props.useStyle ? inputTextStyle : null} type="text" id="field2"
                       ref="field2" onChange={this.saveFieldWithUpdate} value={desc.field2}/><br />
                <label style={this.props.useStyle ? labelStyle : null}>Field3: </label>
                <input style={this.props.useStyle ? inputTextStyle : null} type="text" id="field3"
                       ref="field3" onChange={this.saveFieldWithUpdate} value={desc.field3}/><br />
                <label style={this.props.useStyle ? labelStyle : null}>Field4: </label>
                <input style={this.props.useStyle ? inputTextStyle : null} type="text" id="field4"
                       ref="field4" onChange={this.saveFieldWithUpdate} value={desc.field4}/><br />
                <br />
                <div>
                    <button style={this.props.useStyle ? buttonStyle : null} onClick={this.saveOnStore}>Save On Store</button>
                    <button style={this.props.useStyle ? buttonStyle : null} onClick={this.loadFromStore}>Load from Store</button>
                    <button style={this.props.useStyle ? buttonStyle : null} onClick={this.loadFromMock}>Load from MockData</button>
                </div>
                <br />
                <div>
                    <button style={this.props.useStyle ? buttonStyle : null} onClick={this.loadStyle}>Change Style</button>
                </div>
            </div>
        );
    }
});

module.exports = ShowDesc;

/*
    ref="field1"
*/
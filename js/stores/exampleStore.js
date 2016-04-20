var AppDispatcher = require('../AppDispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ExampleConstants = require('../constants/exampleConstants');
var _ = require('underscore');


var selectData = [];
var selectedCosa = '';
var dataDesc  = {};
var dataSavedOnStore = {};
var useStyle = false;


function loadData(data) {
    selectData = data;
    selectedCosa = data[0];
}

function loadDesc(desc) {
    dataDesc = desc;
}

function saveDesc(desc) {
    dataSavedOnStore[selectedCosa] = desc;
}

function setSelectedCosa(cosa) {
    selectedCosa = cosa;
}

function setUseStyle(use) {
    useStyle = use;
}

// Extend ConfAppStore with EventEmitter to add eventing capabilities
var ExampleStore = _.extend({}, EventEmitter.prototype, {

    getSelectData: function() {
        return selectData;
    },

    getDataDesc: function() {
        return dataDesc;
    },

    getSavedDesc: function() {
        return dataSavedOnStore[selectedCosa];
    },

    getSelectedCosa: function() {
        return selectedCosa;
    },

    getUseStyle: function() {
        return useStyle;
    },

    // Emit Change event
    emitChange: function() {
        this.emit('change');
    },

    // Add change listener
    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    // Remove change listener
    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }
});


// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
    var action = payload.action;
    var options = payload.options;

    switch(action.actionType) {

        case ExampleConstants.GET_SELECT_DATA:
            loadData(action.data);
            console.log('option1: ',options.option1);
            console.log('option2: ',options.option2);
            break;

        case ExampleConstants.GET_DATA_DESCRIPTION:
            loadDesc(action.desc);
            break;

        case ExampleConstants.SAVE_DESC_ON_STORE:
            saveDesc(action.desc);
            break;

        case ExampleConstants.SET_SELECTED_COSA:
            setSelectedCosa(action.cosa);
            break;

        case ExampleConstants.SET_USE_STYLE:
            setUseStyle(action.useStyle);
            break;

        default:
            return;
    }

    // If action was responded to, emit change event
    ExampleStore.emitChange();

    return true;

});

module.exports = ExampleStore;

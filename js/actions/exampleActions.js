var AppDispatcher = require('../AppDispatcher/AppDispatcher');
var ExampleConstants = require('../constants/exampleConstants');

// Define actions object
var ExampleActions = {
    
    getSelectData: function(data) {
        AppDispatcher.handleAction({
            actionType: ExampleConstants.GET_SELECT_DATA,
            data: data
        },{
            option1 : 'TEST',
            option2 : 'TRALARÁ'
        })
    },

    getDataDescription: function(desc) {
        AppDispatcher.handleAction({
            actionType: ExampleConstants.GET_DATA_DESCRIPTION,
            desc: desc
        })
    },

    saveDescOnStore: function(desc) {
        AppDispatcher.handleAction({
            actionType: ExampleConstants.SAVE_DESC_ON_STORE,
            desc: desc
        })
    },

    setSelectedCosa: function (cosa) {
        AppDispatcher.handleAction({
            actionType: ExampleConstants.SET_SELECTED_COSA,
            cosa: cosa
        })
    },

    setUseStyle: function (useStyle) {
        AppDispatcher.handleAction({
            actionType: ExampleConstants.SET_USE_STYLE,
            useStyle: useStyle
        })
    }
};

module.exports = ExampleActions;
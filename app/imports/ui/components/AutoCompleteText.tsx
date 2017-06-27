import * as _ from 'underscore';
import { ReactiveVar } from 'meteor/reactive-var'


/*
This module sets up the HTML elements that loads the Autocomplete API libraries to the document.

 */
const GoogleTextAutoComplete = {

    load: _.once((options:object) => {
        var params = _.map(options, function(value, key) { return key + '=' + value; }).join('&');
        var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://maps.googleapis.com/maps/api/js?' + params +
                '&libraries=places';
            document.body.appendChild(script);
        }
    ),

    _loaded: new ReactiveVar(false),

    loaded: function() {
        return this._loaded.get();
    },

    initialize: function() {
        this._loaded.set(true);
    }
};
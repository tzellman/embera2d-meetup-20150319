import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function (str, lang) {
    return !!str ? new Ember.Handlebars.SafeString("<div class=\"code\">" + prettyPrintOne(str, lang) + "</div>") : str;
});
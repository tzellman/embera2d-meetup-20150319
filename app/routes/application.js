import Ember from 'ember';

var SLIDES = [
    "welcome",
    "who-we-are",
    "announcements",
    "sponsors",
    "upcoming-topics",
    "upcoming-events",
    "other-events",
    "intros"
];


export default Ember.Route.extend({

    model: function () {
        return SLIDES;
    }
});

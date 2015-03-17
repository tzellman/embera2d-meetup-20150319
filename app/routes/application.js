import Ember from 'ember';

var SLIDES = [
    "welcome",
    "who-we-are",
    "upcoming-topics",
    "sponsors",
    "upcoming-events",
    "intros",
    "talk-intro",
    "talk-outline",
    "talk-what",
    "talk-what2",
    "talk-why",
    "talk-why2",
    "talk-using",
    "talk-using2",
    "talk-app",
    "talk-app1",
    "talk-app2",
    "talk-app3",
    "talk-addon",
    "talk-end"
];


export default Ember.Route.extend({

    model: function () {
        return SLIDES;
    }
});

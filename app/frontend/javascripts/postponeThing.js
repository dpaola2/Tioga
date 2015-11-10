'use strict'

var moment = require('moment');
var Data = require('./data');

var postponeThing = function(thing) {
    // find tomorrow's topic
    var today = moment();
    var tomorrow = today.add(1, 'days');
    var tomorrowKey = parseInt(tomorrow.format("YYYYMMDD"));

    var tomorrowTopic = Data.Topic.filter({
        where: {
            'day_key': {
                '==': tomorrowKey
            }
        }
    });

    if (Array.isArray(tomorrowTopic))
        tomorrowTopic = tomorrowTopic[0];
    
    // create copy of this thing within tomorrows topic
    var originalId = thing.id;
    if (thing.original_id)
        originalId = thing.original_id;
    
    Data.Thing.create({
        topic_id: tomorrowTopic.id,
        thing_type: thing.thing_type,
        name: thing.name,
        times_postponed: thing.times_postponed + 1,
        previous_id: thing.id,
        original_id: originalId
    });
    
    // mark this thing as not legit
    thing.legit = false;
    thing.DSSave();
    
};

module.exports = postponeThing;

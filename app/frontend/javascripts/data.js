var JSData = require('js-data');
var DSHttpAdapter = require('js-data-http');
var store = new JSData.DS();

var httpAdapter = new DSHttpAdapter();
httpAdapter.defaults.basePath = '/api/v1';


store.registerAdapter('http', httpAdapter, { default: true });

var Thing = store.defineResource({
    name: 'things',
    relations: {
        hasOne: {
            topics: {
                localField: 'topic',
                foreignKey: 'topic_id'
            }
        }
    },
});

var Topic = store.defineResource({
    name: 'topics',
    relations: {
        hasMany: {
            things: {
                localField: 'things',
                foreignKey: 'topic_id'
            }
        }
    }
});

module.exports = {
    Topic: Topic,
    Thing: Thing
}

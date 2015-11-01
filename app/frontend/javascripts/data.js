var JSData = require('js-data');
var DSHttpAdapter = require('js-data-http');
var store = new JSData.DS();

var httpAdapter = new DSHttpAdapter();
httpAdapter.defaults.basePath = '/api/v1';


store.registerAdapter('http', httpAdapter, { default: true });

var Thing = store.defineResource({
    name: 'things'
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

Topic.find(301).then(function(topic) {
    alert(topic.things);
});

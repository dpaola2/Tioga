var React = require('react');
var Data = require('./data');
var Thing = require('./thing');
var NewThingForm = require('./newThing');

var Topic = React.createClass({
    getInitialState: function () {
        return this.getState();
    },
    getState: function() {
        var topic = Data.Topic.get(this.props.topic.id);

        return {
            topic: topic,
            things: _.sortBy(topic.things, function(n) { return n.created_at }),
            id: topic.id
        }
    },
    componentDidMount: function() {
        Data.Topic.on('change', this.onChange);
    },
    onChange: function() {
        this.setState(this.getState());
    },
    render: function() {
        var things = this.state.things.map(function(thing) {
            return <Thing thing={ thing } key={ thing.id } />
        });
        return <div className="row container">
        <h2>{ this.props.topic.name }</h2>
        { things }
        <NewThingForm onNewThing={ this.onChange } topicId={ this.props.topic.id } />
        </div>
    }
});


module.exports = Topic

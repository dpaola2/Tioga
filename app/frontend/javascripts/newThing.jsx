var React = require('react')
var Data = require('./data')

var NewThingForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        
        Data.Thing.create({
            topic_id: this.props.topicId,
            name: this.refs.newThingName.value
        }).then(function (newThing) {
            this.props.onNewThing(newThing);
        }.bind(this));
    },
    render: function() {
        return <form onSubmit={ this.handleSubmit }>
        <input ref="newThingName" type="text" /><input type="submit" className="btn btn-primary" value="Add Thing" />
        </form>
    }
});

module.exports = NewThingForm
var React = require('react')
var Data = require('./data')

var NewThingForm = React.createClass({
    addThing: function(opts) {
        Data.Thing.create({
            topic_id: this.props.topicId,
            name: opts.name,
            thing_type: opts.thingType
        }).then(function(newThing) {
            this.props.onNewThing(newThing);
            this.refs.newThingName.value = "";
        }.bind(this));
    },
    handleAddTodo: function(e) {
        e.preventDefault();
        
        this.addThing({
            name: this.refs.newThingName.value,
            thingType: 'todo'
        });
    },
    handleAddNote: function(e) {
        e.preventDefault();
        
        this.addThing({
            name: this.refs.newThingName.value,
            thingType: 'note'
        });
    },
    handleAddEvent: function(e) {
        e.preventDefault();

        this.addThing({
            name: this.refs.newThingName.value,
            thingType: 'event'
        });
    },
    render: function() {
        return <div className="row">
        <form className="form-inline">
        <div className="col-md-2">
        <div className="btn-group">
        <button className="btn btn-primary btn-sm form-control" onClick={ this.handleAddTodo }>Todo</button>
        <button className="btn btn-info btn-sm form-control" onClick={ this.handleAddNote }>Note</button>
        <button className="btn btn-warning btn-sm form-control" onClick={ this.handleAddEvent }>Event</button>
        </div>
        </div>
        <div className="col-md-4">
        <input ref="newThingName" type="text" className="form-control" placeholder="Add new..." />
        &nbsp;
        </div>
        </form>
        </div>
    }
});

module.exports = NewThingForm
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
    render: function() {
        return <div className="row">
        <div className="col-md-offset-1">
          <form className="form-inline">
            <input ref="newThingName" type="text" className="form-control" />
            &nbsp;
            <button className="btn btn-primary btn-sm form-control" onClick={ this.handleAddTodo }>Add Todo</button>
            <button className="btn btn-info btn-sm form-control" onClick={ this.handleAddNote }>Add Note</button>
          </form>
        </div>
        </div>
    }
});

module.exports = NewThingForm
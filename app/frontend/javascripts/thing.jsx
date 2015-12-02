var React = require('react');
var Data = require('./data');
var postponeThing = require('./postponeThing');

var Thing = React.createClass({
    getInitialState: function() {
        return this.getState();
    },
    getState: function() {
        var thing = Data.Thing.get(this.props.thing.id);

        return {
            thing: thing
        };
    },
    onChange: function() {
        this.setState(this.getState());
    },
    componentDidMount: function() {
        Data.Thing.on('change', this.onChange);
    },
    toggleComplete: function(e) {
        if (this.state.thing.complete) {
            this.state.thing.complete = false
        } else {
            this.state.thing.complete = true
        }
        this.state.thing.DSSave();
    },
    toggleImportant: function(e) {
        if (this.state.thing.important)
            this.state.thing.important = false;
        else
            this.state.thing.important = true;
        this.state.thing.DSSave();
    },
    toggleLegit: function(e) {
        if (this.state.thing.legit == true) {
            this.state.thing.legit = false;
        } else {
            this.state.thing.legit = true;
        }
        this.state.thing.DSSave();
    },
    postpone: function() {
        postponeThing(this.state.thing);
    },
    actionColumn: function() {
        var cursorStyle = {
            cursor: 'pointer'
        };

        if (this.state.thing.thing_type == 'todo') {
            if (this.state.thing.legit) {
                if (this.state.thing.complete)
                    return <span className="glyphicon glyphicon-check" style={ cursorStyle } onClick={ this.toggleComplete } />
                else
                    return <span className="glyphicon glyphicon-unchecked" style={ cursorStyle } onClick={ this.toggleComplete } />
            } else {
                return <span className="glyphicon glyphicon-option-horizontal" />
            }
        } else if (this.state.thing.thing_type == 'note') {
            if (this.state.thing.legit) {
                return <span className="glyphicon glyphicon-info-sign" />
            } else {
                return <span className="glyphicon glyphicon-option-horizontal" />
            }
        } else if (this.state.thing.thing_type == 'event') {
            if (this.state.thing.legit) {
                if (this.state.thing.complete) {
                    return <span className="glyphicon glyphicon-check" style={ cursorStyle } onClick={ this.toggleComplete } />
                } else {
                    return <span className="glyphicon glyphicon-calendar" style={ cursorStyle } onClick={ this.toggleComplete } />
                }
            } else {
                return <span className="glyphicon glyphicon-option-horizontal" />
            }
        }
    },
    importantColumn: function() {
        var cursorStyle = {
            cursor: 'pointer'
        };
        
        if (this.state.thing.important == true) {
            return <span className="glyphicon glyphicon-star" style={ cursorStyle } onClick={ this.toggleImportant } />
        } else {
            return <span className="glyphicon" style={ cursorStyle } onClick={ this.toggleImportant }>&nbsp;</span>
        }
            
    },
    postponeColumn: function() {
        var cursorStyle = {
            cursor: 'pointer'
        };

        if (this.state.thing.complete) {
            return <span className="glyphicon glyphicon-option-horizontal" />
        } else {
            if (this.state.thing.legit) {
                return <span className="glyphicon glyphicon-time" onClick={ this.postpone } style={ cursorStyle }/>
            } else {
                return <span className="glyphicon glyphicon-option-horizontal" />
            }
        }
    },
    cancelColumn: function() {
        var cursorStyle = {
            cursor: 'pointer'
        };
        if (this.state.thing.complete) {
            return <span className="glyphicon glyphicon-option-horizontal" />
        } else {
            if (this.state.thing.legit) {
                return <span className="glyphicon glyphicon-remove" onClick={ this.toggleLegit } style={ cursorStyle } />
            } else {
                return <span className="glyphicon glyphicon-plus" onClick={ this.toggleLegit } style={ cursorStyle } />
            }
        }
    },
    render: function() {
        var style = {};
        if (!this.state.thing.legit) {
            style.textDecoration = 'line-through';
            style.color = 'grey';
            style.fontStyle = 'italic';
        }
        if (this.state.thing.complete) {
            style.color = 'grey';
            style.fontStyle = 'italic';
        }
        
        var cursorStyle = {
            cursor: 'pointer'
        };

        var noPadding = {
            paddingLeft: '0px',
            paddingRight: '0px'
        };

        return <div className="row">
        <div className="col-md-1" style={ noPadding }>
          { this.importantColumn() }
          &nbsp;
          { this.actionColumn() }
          &nbsp;
          { this.cancelColumn() }
          &nbsp;
          { this.postponeColumn() }
        </div>
        <div className="col-md-5" style={ style } >
          { this.state.thing.name }
        </div>
        </div>
    }
});

module.exports = Thing;

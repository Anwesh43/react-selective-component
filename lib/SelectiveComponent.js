const React = require('react')
class SelectiveComponent extends React.Component {
    constructor(props) {
        super(props)
        this.unmounted = false
    }
    shouldComponentUpdate(nextProps,nextState) {
        return JSON.stringify(nextProps) != JSON.stringify(this.props) || (JSON.stringify(nextState) != JSON.stringify(this.state))
    }
    componentDidUpdate() {
    }
    setState(stateObj) {
        if(!this.unmounted) {
            super.setState(stateObj)
        }
    }
    componentWillUnmount() {
        this.unmounted = true
    }
}
module.exports = SelectiveComponent

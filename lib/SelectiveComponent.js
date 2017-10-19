import React from 'react'
export default class SelectiveComponent extends React.Component {
    shouldComponentUpdate(nextProps,nextState) {
        return JSON.stringify(nextProps) != JSON.stringify(this.props) || (JSON.stringify(nextState) != JSON.stringify(this.state))
    }
    componentWillMount() {
        this.unmounted = false
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

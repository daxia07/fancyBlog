import React, {Component,Fragment} from 'react';
import {connect} from 'react-redux';
import PropType from 'prop-types';
import {withAlert} from "react-alert";

class Alerts extends Component {
    static propTypes = {
        error: PropType.object.isRequired
    };

    componentDidUpdate(prevProps) {
        console.log('did update',this.props);
        const {error, alert} = this.props;
        if (error !== prevProps.error) {
            if (error.msg.title) alert.error(`Title: ${error.msg.title.join()}`);
            if (error.msg.content) alert.error(`Content: ${error.msg.content.join()}`);
        }
    }

    render() {
        return <Fragment/>
    }
}

const mapStateToProps = state => ({
    error: state.errorsReducer.errors
});

export default connect(mapStateToProps)(withAlert()(Alerts));
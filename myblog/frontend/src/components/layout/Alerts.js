import React, {Component,Fragment} from 'react';
import {connect} from 'react-redux';
import PropType from 'prop-types';
import {withAlert} from "react-alert";

class Alerts extends Component {
    static propTypes = {
        error: PropType.object.isRequired,
        message: PropType.string.isRequired
    };

    componentDidUpdate(prevProps) {
        console.log('did update',this.props);
        const {error, alert, message} = this.props;
        // alert input error
        if (error !== prevProps.error) {
            if (error.msg.title) alert.error(`Title: ${error.msg.title.join()}`);
            if (error.msg.content) alert.error(`Content: ${error.msg.content.join()}`);
            if (error.msg.detail) alert.error(`Forbidden: ${error.msg.detail}`);
        }
        // alert message
        if (message !== prevProps.message) {
            alert.show(message)
        }
    }

    render() {
        return <Fragment/>
    }
}

const mapStateToProps = state => ({
    error: state.errorsReducer.errors,
    message: state.messageReducer.message
});

export default connect(mapStateToProps)(withAlert()(Alerts));
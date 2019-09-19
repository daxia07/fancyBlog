import React, {Component} from 'react';
import { connect } from 'react-redux'
import PropType from 'prop-types';
import { createPost} from "../../actions/posts";

class Form extends Component {
    state = {
        title: '',
        content: '',
        date_posted: ''
    };

    static propTypes = {
        createPost: PropType.func.isRequired
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onSubmit = e => {
        e.preventDefault();
        const {title, content} = this.state;
        const date_posted = new Date;
        const post = {title, content, date_posted};
        this.props.createPost(post);
        this.setState({
           title: '',
           content: '',
           date_posted: ''
        });
    };

    render() {
        const {title, content} = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Create Post</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input className="form-control" type="text" name="title" onChange={this.onChange} value={title}/>
                    </div>
                    <div className="form-group">
                        <label>Content</label>
                        <input className="form-control" type="text" name="content" onChange={this.onChange} value={content}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary float-right">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}


export default connect(null, { createPost })(Form);
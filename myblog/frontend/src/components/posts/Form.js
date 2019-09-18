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
        console.log(e.target.name);
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onSubmit = e => {
        e.preventDefault();
        console.log(e);
        const {title, content, date_posted} = this.state;
        const post = {title, content, date_posted, author:1};
        this.props.createPost(post);
        this.setState({
           title: '',
           content: '',
           date_posted: ''
        });
    };

    render() {
        const {title, content, date_posted} = this.state;
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
                        <label>Date</label>
                        <input className="form-control" type="datetime-local" name="date_posted" onChange={this.onChange} value={date_posted}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}


export default connect(null, { createPost })(Form);
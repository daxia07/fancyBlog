import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { getPosts, deletePost } from "../../actions/posts";
import moment from "moment";


export class Posts extends Component {
    static propTypes = {
        posts: PropTypes.array.isRequired,
        getPosts: PropTypes.func.isRequired,
        deletePost: PropTypes.func.isRequired
    };


    componentDidMount() {
        this.props.getPosts();
    }

    render() {
        return (
            <Fragment>
                <h2>Posts</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Date Posted</th>
                            <th>Author</th>
                        </tr>
                    </thead>
                    <tbody>
                    { this.props.posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.title}</td>
                            <td>{post.content}</td>
                            <td>{moment(post.date_posted).format('LLL')}</td>
                            <td>{post.author}</td>
                            <td><button className="btn btn-danger btn-sm" onClick={this.props.deletePost.bind(this, post.id)}>Delete</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.postsReducer.posts
});

export default connect(mapStateToProps, { getPosts, deletePost})(Posts);
import API from "./API";
// import config from "./config";

// const myAPI = new API({url: config.url});

const myAPI = new API({url: "http://localhost:8000/api"});
myAPI.createEntity({ name : 'posts' });


const getPosts = ()  => {
    // myAPI.endpoints.posts.getAll('id>2').then(res => {
    //     console.log(res)
    // }).catch(err => console.log(err));
    // myAPI.endpoints.posts.getOne({id: 1}).then(res => {
    //     console.log(res.data)
    // });
    // myAPI.endpoints.posts.create({
    //     "title": "My API Post",
    //     "content": "Post via API",
    //     "author": 1
    // }).then(res => console.log(res)).catch(err => console.log(err));
    // myAPI.endpoints.posts.update({
    //     "id": 1,
    //     "title": "My First Post",
    //     "content": "Fresh New Post!ADJUSTED2",
    //     "date_posted": "2019-09-18T10:38:52+10:00",
    //     "author": 1
    // }).then(res => console.log(res.data)).catch(err => console.log(err));
    // myAPI.endpoints.posts.patch({
    //     "id": 1,
    //     "content": "Fresh New Post!ADJUSTED2 via patch API"
    // }).then(res => console.log(res.data)).catch(err => console.log(err));

    myAPI.endpoints.posts.delete({id: 7}).then(res => console.log(res)).catch(err => console.log(err));
};

getPosts();
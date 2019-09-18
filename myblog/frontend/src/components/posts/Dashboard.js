import React, {Fragment} from 'react';
import Form from "./Form";
import Posts from "./Posts";

export default function Dashboard() {
    return (
        <Fragment>
            <Form/>
            <Posts/>
        </Fragment>
    )
}
import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentsDetail from './CommentDetail'
import CommentDetail from './CommentDetail';


const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail/>
            <CommentDetail/>
            <CommentDetail/>
            <CommentDetail/>
            <CommentDetail/>
        </div>
    );
};

ReactDom.render(<App/>, document.querySelector('#root'));
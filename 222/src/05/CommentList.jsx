import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "김영성",
        comment: "첫 번째 댓글입니다.",
    },
    {
        name: "김영성",
        comment: "두 번째 댓글입니다.",
    },
    {
        name: "김영성",
        comment: "김영성 최고!",
    }
];


function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name = { comment.name } comment = {comment.comment} />
            );
        })}
        </div>
    );
}

export default CommentList;
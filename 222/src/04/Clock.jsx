import React from "react";

function Clock(props) {
    return(
        <div>
        <h1>안녕, 리액트!</h1>
        <h2>현재 시가: {new Date().toLocaleString()}</h2>
        </div>
    );
}

export default Clock;
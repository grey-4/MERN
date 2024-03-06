import React from "react";
import { useParams } from "react-router-dom";

function BookList() {
    const {id} = useParams();
    return (
        <div>
        The id is {id}
        </div>
);
}

export default BookList;

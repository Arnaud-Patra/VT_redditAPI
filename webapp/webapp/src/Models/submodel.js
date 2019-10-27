import React from "react";

class SubModel extends React.Component {

    constructor(url, title, score) {
        super();

        this.url = url;
        this.title = title;
        this.score = score;

    }

    /* Method to convert reddit object into local model*/
    static toSubModel(item) {
        return new SubModel(item.data.url, item.data.title, item.data.score);
    }
}

export default SubModel
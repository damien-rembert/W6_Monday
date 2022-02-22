const movieArr = [];

// Add multiple films


class Movie {


    // here if the actor argument is not provided, it will default to "Not specified"
    constructor(title, actor = "Not specified") {
        this.title = title;
        this.actor = actor;
    }

    add() {
        movieArr.push(this);
        return movieArr;
    }
}


module.exports = Movie;
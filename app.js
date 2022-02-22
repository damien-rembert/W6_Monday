// import the index.js file in that folder
// @ts-check
const Movie = require("./utils");

const app = (args) => {
    // console.log("To add a film, type \"add\" followed by the title, a comma ");

    switch (args[2]) {
        case "add":
            for (let i = 3; i < args.length; i++) {
                const messyFilm = args[i];
                let actor;
                let title = messyFilm;

                if (messyFilm.includes(",")) {
                    let splitFilm = messyFilm.split(",");
                    actor = splitFilm[1];
                    title = splitFilm[0];
                }
                const movie = new Movie(title, actor);
                console.log(movie.add());
            };
            break;

        default:
            console.log("Incorrect input");
            break;
    }
};

app(process.argv);
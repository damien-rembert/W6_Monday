const app = (args) => {
    switch (args[2]) {
        case "Steve":
            console.log("you typed Steve");
            break;

        case "Gary":
            console.log("you typed Gary");
            break;

        default:
            console.log("that's not Steve or Gary");
            break;
    }
};

app(process.argv);
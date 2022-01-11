let i = 1;
setInterval(() => {
    console.log("Hello,GM");
    i++;
    if (i == 10) {
        process.exit(1);

    }
}, 1000)

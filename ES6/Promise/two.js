let goToMovie = (success, failure) => {
    let amount = 600;
    amount > 500 ? success("Got Tickets, Buy Samosa") : failure("Go to PG!")
}

goToMovie((ticket) => { console.log(ticket) }, (err) => { console.log(err) });
axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        console.log(response);
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        console.log("----------------------------");
    })
    .then(function () {
        console.log("-----------PROVA------------");
    })
    .then(function () {
        console.log("----------------------------");
    });

axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(function (response) {
        console.log(response);
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        console.log("2----------------------------");
    });

axios.post('https://jsonplaceholder.typicode.com/users/', { name: "Serena", username: "SerenaMK" })
    .then(function (response) {
        console.log(response);
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        console.log("3----------------------------");
    });

axios.put('https://jsonplaceholder.typicode.com/users/1', { name: "Serena", username: "SerenaMK" })
    .then(function (response) {
        console.log(response);
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        console.log("4----------------------------");
    });
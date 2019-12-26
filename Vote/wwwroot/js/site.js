"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/voteHub").build();

connection.on("ReceiveVote", function (identifier) {
    var element = document.getElementById(identifier);
    var value = parseInt(element.innerText);
    element.innerText = value + 1;
});

connection.start().then(function () {
    console.log('Start connection');
}).catch(function (err) {
    return console.error(err.toString());
});

document.querySelectorAll('.btn-demab').forEach(item => {
    console.log(item);
    item.addEventListener("click", function (event) {
        connection.invoke("SendVote", item.childNodes[2].id).catch(function (err) {
            return console.error(err.toString());
        });
        event.preventDefault();
    });
});

document.querySelectorAll('.btn-danger').forEach(item => {
    item.addEventListener("click", function (event) {
        connection.invoke("SendVote", item.childNodes[2].id).catch(function (err) {
            return console.error(err.toString());
        });
        event.preventDefault();
    });
});

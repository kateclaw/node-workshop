const express = require("express");
const path = require("path");

const compliments = [
    "You like nice today",
    "That dress looks nice on you",
    "Have you been working out?",
    "You can do hard things",
    "You've gotten far in this course. You're really smart",
    "You're programming! How cool is that?",
    "I'm really proud of you",
    "You made this",
    "You've learned a lot of things, and that's pretty hard to do"
];

const insults = [
    "You don't like nice today",
    "That dress doens't look nice on you",
    "When was the last time you worked out?",
    "You can't do hard things",
    "You've haven't gotten very far in this course. You're not very smart",
    "You're barely programming! Not very impressive.",
    "I'm really disappointed in you",
    "You didn't make this",
    "You've barely learned anything, and that's pretty hard to do"
];

// gets a random compliment from the array
function getRandomCompliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    return compliments[randomIndex];
}

// gets a random compliment from the array
function getRandomInsult() {
    const randomIndex = Math.floor(Math.random() * insults.length);
    return insults[randomIndex];
}

const app = express();

// sends the user the app
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "style.css"));
});

app.get("/compliment", function(req, res) {
    res
        .json({
            compliment:getRandomCompliment()
        })
        .end();
});

app.get("/insult", function(req, res) {
    res
        .json({
            insult:getRandomInsult()
        })
        .end();
});

app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");
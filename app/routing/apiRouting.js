var friendData = require("../data/friend");
var score;
var scoreArray = [];
var user;
var bestMatchScore = 100;
var bestMatchFriend;
var index;


module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function (req, res) {
        user = req.body;
        for (i = 0; i <= friendData.length; i++) {
            possibleFriend = friendData[1];
            for (j = 0; j < 10; j++) {
                score = score +  Math.abs(possibleFriend.scores[j] - user.scores[j]) / 2;
            };
            scoreArray.push(score);
        };
        for (k = 0; k < 10; k++) {
            if (bestMatchScore < scoreArray[k]) {
                bestMatchScore = scoreArray[k];
                index = k;
            }
        }
        bestMatchFriend = friendData[index];
        friendData.push(user);
        console.log(bestMatchFriend);
        res.send(bestMatchFriend);
    });
};
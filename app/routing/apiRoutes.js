var friendsArray = require("../data/friends.js")

module.exports = function (app) {

    app.get("/api/friends", function (request, response) {
        response.json(friendsArray);
    });

    app.post("/api/friends", function (req, res) {

        // * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
        var user = [
            5, 1, 3, 4, 5, 1, 2, 5, 4, 1
        ];

        let compatible = { sum: 100 };
        friendsArray.forEach((value, i) => {
            let sum = 0;
            value.scores.forEach((scoreValue, i) => {
                let diff = Math.abs(scoreValue - user[i]);
                sum += diff;
            });
            friendsArray[i].sum = sum;
            if (friendsArray[i].sum < compatible.sum) {
                compatible = friendsArray[i];
            };
        });
        console.log(compatible);
    })
}

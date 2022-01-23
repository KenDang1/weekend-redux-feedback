const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');



// TODO: POST '/'
router.post('/', (req, res) => {
    const newFeedback = req.body.feedback

    // syntax to insert info into table "feedback"
    // there are 4 columns that the info will go into
    const queryText = `
        INSERT INTO "feedback"
            ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);
    `;

    // these are the fours data
    const queryParams = [
        newFeedback.feeling,
        newFeedback.understanding,
        newFeedback.support,
        newFeedback.comments,
    ]

    pool.query(queryText, queryParams)
        .then((dbRes) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.error('Error in POST and sve it to database', err);
            res.sendStatus(500);
        })
}); // end of POST



// TODO: GET '/'
router.get('/', (req, res) => {
    // select everything from table feedback
    let queryText = `
        SELECT * FROM "feedback";
    `;
    
    pool.query(queryText)
        .then(dbRes => {
            res.send(dbRes.rows)
        })
        .catch(err => {
            console.error('error in Get', err)
        });
}); // end of GET '/'





// send this to server.js
module.exports = router;
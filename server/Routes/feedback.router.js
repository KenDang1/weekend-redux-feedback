const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');



// POST '/'
router.post('/', (req, res) => {
    const newFeedback = req.body

    const queryText = `
        INSERT INTO "feedback"
            ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);
    `;

    const queryParams = [
        newFeedback.feeling,
        newFeedback.understanding,
        newFeedback.support,
        newFeedback.comments
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



// GET '/'
router.get('/', (req, res) => {
    // selct everything from table feedback
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
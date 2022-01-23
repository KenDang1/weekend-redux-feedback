const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');



// Adding the feedback object into the database
router.post('/', (req, res) => {
    const newFeedback = req.body.feedback

    // syntax to insert info into table "feedback"
    // there are 4 columns that the info will go into
    const queryText = `
        INSERT INTO "feedback"
            ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);
    `;

    // these are the fours data properties
    const queryParams = [
        newFeedback.feeling,        // $1
        newFeedback.understanding,  // $2
        newFeedback.support,        // $3
        newFeedback.comments,       // $4
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



// Get all feedback
router.get('/', (req, res) => {
    // select everything from table feedback
    let queryText = `
        SELECT * FROM "feedback";
    `;
    
    pool.query(queryText)
        .then(dbRes => {
            // sending back the results in an object
            res.send(dbRes.rows)
        })
        .catch(err => {
            console.error('error in Get', err)
        });
}); // end of GET '/'

// Deleting the feedback from database
// using id parameter to know which one to delete
router.delete('/:id', (req, res) => {
    console.log('id is', req.params.id);
    let queryText = `
        DELETE FROM "feedback"
        WHERE "id" = $1;
    `;

    let queryParams = [
        req.params.id
    ]

    pool.query(queryText, queryParams)
        .then(dbRes => {
            res.sendStatus(204)
        })
        .catch(err => {
            console.error('DELETE /feedback, ${id} failed', err);
        })
}); // end of router.delete


// send this to server.js
module.exports = router;
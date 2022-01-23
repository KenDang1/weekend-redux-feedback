import axios from 'axios'
import { useEffect, useState } from 'react';

function Admin () {

    // local variable
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        fetchFeedback();
    }, []); // don't forget the []

    const fetchFeedback = () => {
        axios.get('/feedback')
        .then(res => {
            console.log('GET /feedback', res);
            // put that data getting back from server and
            // put it into feedback
            setFeedback(res.data);
        })
        .catch(err => {
            console.error('GET /feedback failed', err)
        })
    };

    return (
        <>
        <h2>Feedback from database</h2>
        {feedback.map((feedback) => (
            <p key={id}> 
                {feedback.feeling} 
                {feedback.understanding} 
                {feedback.support} 
                {feedback.comments} 
            </p>
        ))}
        </>
    )
}; // end of Admin

export default Admin;

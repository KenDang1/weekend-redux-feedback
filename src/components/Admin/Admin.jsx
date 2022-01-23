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

    const onDelete = () => {
        console.log('onDelete', onDelete);
    }

    return (
        <>
        <h2>Feedback from database</h2>
        <table>
            <thead>
                <tr>
                    <th>Feeling</th>
                    <th>Understanding</th>
                    <th>Support</th>
                    <th>Comments</th>
                </tr>
            </thead>
            <tbody>
                {feedback.map((feedback) => (
                    <tr key={feedback.id}>
                        <td>{feedback.feeling}</td>
                        <td>{feedback.understanding}</td>
                        <td>{feedback.support}</td>
                        <td>{feedback.comments}</td>
                        <td>
                            <button onClick={onDelete}>DELETE</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}; // end of Admin

export default Admin;

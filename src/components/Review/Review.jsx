import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Review () {
    // Grab data from store or by using this useSelector I get access
    // the reducer in the store "feedbackReducer"
    const feedback = useSelector((store) => store.feedbackReducer)
    const history = useHistory();
    // TODO: submit the info to database
    // axios needed
    const onHandleSubmit = () => {
        // method is POST, url is /feedback, data is feedback
        axios.post('/feedback', {feedback})
            .then(res => {
                console.log('POST /feedback res is', res);
                // Send to thankyou page
                history.push('/thankyou')
            })
            .catch(err => {
                console.error('POST /feedback failed', err)
            })
    };

    return (
        <>
            <h1>Review Your Feedback</h1>
        {/** Here it should have all the previous 4 values */}
        <p>Feeling: {feedback.feeling}</p>
        <p>Understanding: {feedback.understanding}</p>
        <p>Support: {feedback.support}</p>
        <p>comments: {feedback.comments}</p>
        <br />
        <button onClick={onHandleSubmit}>Submit</button>
        </>
    )
}; // end of Review

export default Review;
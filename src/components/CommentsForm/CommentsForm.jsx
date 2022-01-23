import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function CommentsFrom () {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Keeping the answer between 1-6
        // if either input over 6 over under 1
        // then stop this function
        if (input > 6 || input < 1) {
            return;
        }

        // connect to reducer in index
        dispatch({
            type: "COMMENTS",
            payload: input
        })
        // this is to go to the next page
        // which is Review
        history.push('/review');
        // this is to clear the input
        setInput('');
    }

    
    return (
        <>
            <div>
                <h1> Any comments you want to leave?</h1>
                <form>
                    <textarea 
                    required
                    type="text"
                    rows={5}
                    cols={20}
                    placeholder="Your Comments"
                    onChange={(event) => setInput(event.target.value)}
                    value={input}
                    />
                </form>
                <button onClick={handleSubmit}>Next</button>
            </div>
        </>
    )
}; // end of FeedbackForm

export default CommentsFrom;
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function SupportFrom () {
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
            type: "SUPPORT",
            payload: input
        })
        // this is to go to the next page
        // which is UnderstandForm
        history.push('/comments');
        // this is to clear the input
        setInput('');
    }

    
    return (
        <>
            <div>
                <h1> How well are you being supported?</h1>
                <form>
                    <input 
                    required
                    type="number"
                    placeholder="Your Answer"
                    onChange={(event) => setInput(event.target.value)}
                    value={input}
                    />
                </form>
                <button onClick={handleSubmit}>Next</button>
            </div>
        </>
    )
}; // end of FeedbackForm

export default SupportFrom;
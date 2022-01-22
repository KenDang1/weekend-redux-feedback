import { useState } from 'react';


function FeelingFrom () {
    const [input, setInput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

    }

    
    return (
        <>
            <div>
                <h1> How are you feeling today?</h1>
                <form>
                    <input 
                    type="number"
                    placeholder="Your Answer"
                    onChange={(event) => setInput(event.target.value)}
                    value={input}
                    />
                </form>
                <button onChange={handleSubmit}>Next</button>
            </div>
        </>
    )
}; // end of FeedbackForm

export default FeelingFrom;
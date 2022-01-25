import { useHistory } from 'react-router-dom';


function ThankYou () {

    const history = useHistory();

    const reset = () => {
        // Go back to FeelingForm when click "Leave New Feedback"
        history.push('/');
    }

    return (
        <>
            <h1>Thank You!</h1>
            <button onClick={reset}>Leave New Feedback</button>
        </>
    )
}; // end of Header function


// export this function to App.jsx
export default ThankYou;

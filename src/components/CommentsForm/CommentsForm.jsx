import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

function CommentsFrom () {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Sweetalert2 for some warning
        Swal.fire({
            title: `Are you sure, you don't want to leave any comments?`,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
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
            // Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
            }
        })
    }; // end if handleSubmit

    
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
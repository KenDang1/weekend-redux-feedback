import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header.jsx';
import { HashRouter as Router, Route} from 'react-router-dom';
import FeelingForm from '../FeelingForm/FeelingForm.jsx';
import UnderstandingForm from '../UnderstandingForm/UnderstandForm.jsx';
import SupportForm from '../SupportForm/SupportForm.jsx';
import CommentsForm from '../CommentsForm/CommentsForm.jsx';
import Review from '../Review/Review.jsx';


function App() {

  return (
    <div className='App'>
      <Router>
        {/**  when load the page the first FeelingForm will load with the Header*/}
        <Header />

        <Route path='/' exact>
          <FeelingForm />
        </Route>

        {/**  route to go to this form is '/understand' */}
        <Route path='/understand' exact>
        <UnderstandingForm />
        </Route>

        {/**  route to go to this form is '/support' */}
        <Route path='/support' exact>
          <SupportForm />
        </Route>

        {/**  route to go to this form is '/comments' */}
        <Route path='/comments' exact>
          <CommentsForm />
        </Route>

        {/**  route to go to this page is '/review' */}
        <Route path='/review' exact>
          <Review />
        </Route>

        {/**  route to go to this page is '/admin' */}
        <Route path='/admin' exact>
          <Admin />
        </Route>
      </Router>
    </div>
  );
}

export default App;

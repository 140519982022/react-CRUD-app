import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import UserForm from './assets/components/User_form';
import ViewUserDetails from './assets/components/View_user_details';
import { useState } from 'react';

function App() {
  const [finalUserArr, AllUserDetails] = useState([]);

  let submitForm = (userDetails) => {
    // console.log("empty Form -> " + userDetails);

    AllUserDetails(finalUserArr => [...finalUserArr, userDetails]);

  }

  let deleteFunctionality = (getId) => {

    // console.log("delete Id => " + getId);

    AllUserDetails(finalUserArr.filter((currentId, index) =>
      currentId.id !== getId

    ));

  }


  // let editUserFunction = (userDetails) => {

  //   console.log(userDetails);

  // }

  return (
    <div className="App">

      <UserForm getFormDetails={submitForm}></UserForm>

      <ViewUserDetails finalUserArr={finalUserArr} deleteId={deleteFunctionality}></ViewUserDetails>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import UserForm from './assets/components/User_form';
import ViewUserDetails from './assets/components/View_user_details';
// import { useState } from 'react';

import React, { useState, useRef } from 'react';

function App() {
  const [finalUserArr, AllUserDetails] = useState([]);

  console.table(finalUserArr);

  const viewUserDetailsRef = useRef(null);

  let submitForm = (userDetails) => {
    // console.log("empty Form -> " + userDetails);

    AllUserDetails(finalUserArr => [...finalUserArr, userDetails]);


    const firstRow = document.querySelector('.table-container table tbody tr');

    // Scroll to the ViewUserDetails component after form submission
    if (viewUserDetailsRef.current) {
      viewUserDetailsRef.current.scrollIntoView({ behavior: 'smooth' });
    }

  }

  let deleteFunctionality = (getId) => {

    // console.log("delete Id => " + getId);

    AllUserDetails(finalUserArr.filter((currentId, index) =>
      currentId.id !== getId

    ));

  }


  let editUserFunction = (editUserDetails) => {

    // console.log("edit user details in app component" + editUserDetails);
    AllUserDetails([editUserDetails]);

  }

  return (
    <div className="App">

      <UserForm getFormDetails={submitForm} errorKey={finalUserArr}></UserForm>

      <div ref={viewUserDetailsRef}>
        <ViewUserDetails finalUserArr={finalUserArr} deleteId={deleteFunctionality} editUser={editUserFunction}></ViewUserDetails>
      </div>

      {/* <ViewUserDetails finalUserArr={finalUserArr} deleteId={deleteFunctionality} editUser={editUserFunction}></ViewUserDetails> */}
    </div>
  );
}

export default App;

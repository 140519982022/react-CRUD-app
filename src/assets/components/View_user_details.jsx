import React from 'react';
import Table from 'react-bootstrap/Table';
import { MdDelete, MdEditSquare } from "react-icons/md";

// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from 'react-toastify';

import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

function ViewUserDetails({ finalUserArr, deleteId }) {
    let deleteUser = (userId) => {
        deleteId(userId);
        // toast.error("record deleted successfully...");
        NotificationManager.error('Record deleted successfully', 'Delete message');
    }

    return (
        <>
            {/* <ToastContainer /> */}
            <NotificationContainer/>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1 className=' fw-bold py-3'>USER DETAIL</h1>
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>Sr N.</th>
                                        <th>User Name</th>
                                        <th>User Email</th>
                                        <th>Mobile No. </th>
                                        <th>Password </th>
                                        <th>Actions </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {finalUserArr && finalUserArr.length > 0 ? (
                                        finalUserArr.map((user, index) => (
                                            <tr key={user.id}>
                                                <td className='fw-bold'>{index + 1}.</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.mobNo}</td>
                                                <td>{user.password}</td>
                                                <td>
                                                    <MdDelete className='fs-1 text-white' onClick={() => deleteUser(user.id)} />
                                                    <MdEditSquare className='fs-2 text-white' />
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6" className="text-center">No records found</td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewUserDetails;

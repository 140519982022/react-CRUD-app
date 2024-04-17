import Table from 'react-bootstrap/Table';

// add icons
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";

function ViewUserDetails({ finalUserArr, deleteId }) {

    if (!finalUserArr || finalUserArr.length === 0) {
        // alert("Something went wrong or there are no users!");
        return null; // If finalUserArr is empty, return null to hide the table
    }

    // delete user details strat functionality
    let deleteUser = (userId) => {
        deleteId(userId);
    }
    // delete user details end functionality


    // edit user details strat functionality
    // let editUser = (userData) => {

    //     editUser(userData);
    // }
    // edit user details strat functionality

    console.log("empty array -> " + finalUserArr);
    return (
        <>
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
                                    {finalUserArr.map((user, index) => (
                                        <tr>
                                            <td className='fw-bold'>{index + 1}.</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.mobNo}</td>
                                            <td>{user.password}</td>
                                            <td>
                                                <MdDelete className='fs-1 text-white' onClick={() => deleteUser(user.id)} />

                                                <MdEditSquare className='fs-2 text-white'/>
                                            </td>
                                        </tr>
                                    ))}
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

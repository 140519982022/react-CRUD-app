import eagle from '../images/eagle.jpg'
function UserForm(props) {

    let formHandeler = (event) => {

        event.preventDefault();
        // console.log(event.target.name.value,event.target.email.value,event.target.mobile_number.value,event.target.password.value);
        let personArr =
        {
            id: Date.now(),
            name: event.target.name.value,
            email: event.target.email.value,
            mobNo: event.target.mobile_number.value,
            password: event.target.password.value
        }

        props.getFormDetails(personArr);

        event.target.reset(); // Reset the form fields

    }

    return (
        <>

            <div className="container-fluid">
                <div className="container ">

                    <div className="row my-5 d-flex justify-content-between">
                        <div className="col-md-5 align-self-center">
                            <h1 className='text-primary fw-bold py-5'>Register Here</h1>
                            <form onSubmit={formHandeler} >
                                <div className="form-floating mb-3">
                                    <input type="text" name="name" className="form-control border border-primary " id="floatingInput" placeholder="name" autoFocus required />
                                    <label for="floatingInput">User Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" name="email" className="form-control border border-primary" placeholder="name@example.com" required />
                                    <label for="floatingPassword">Email address</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="number" name="mobile_number" className="form-control border border-primary" placeholder="mobile number" required />
                                    <label for="floatingInput">Mobile No.</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" name="password" className="form-control border border-primary" placeholder="Password" required />
                                    <label for="floatingPassword">Password</label>
                                </div>

                                <button type="submit" className="btn btn-primary">Submit</button>

                            </form>

                        </div>
                        <div className="col-md-5">
                            <div>
                                <img src={eagle} alt="" className='' />
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>

    )

}

export default UserForm
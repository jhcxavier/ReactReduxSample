import React, { useState } from "react";
import { connect } from "react-redux";
import * as contactActions from "../../redux/actions/contactActions";
import PropTypes from "prop-types";

const AddContact = ({ closeAddContact, dispatch }) => {
    const [value, setValue] = useState({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: ""
    })
    const handleSubmit = (event) => {
        dispatch(contactActions.createContact(value))
    }
    return (
        <div>
            <div>
                Add new Contact
            </div>
            <form className="container border mt-2" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col m-2">
                        {/* Updating the state */}
                        <input type="text" value={value.firstName} className="form-control" placeholder="First name" onChange={(e) => setValue({ ...value, firstName: e.target.value })} />
                    </div>
                    <div className="col m-2">
                        {/* Updating the state */}
                        <input type="text" value={value.lastName} className="form-control" placeholder="Last name" onChange={(e) => setValue({ ...value, lastName: e.target.value })} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-5 m-2">
                        {/* Updating the state */}
                        <input type="text" value={value.company} className="form-control" placeholder="Company" onChange={(e) => setValue({ ...value, company: e.target.value })} />
                    </div>
                    <div className="col m-2">
                        {/* Updating the state */}
                        <input type="text" value={value.email} className="form-control" placeholder="Email" onChange={(e) => setValue({ ...value, email: e.target.value })} />
                    </div>
                    <div className="col m-2">
                        {/* Updating the state */}
                        <input type="text" value={value.phone} className="form-control" placeholder="Phone" onChange={(e) => setValue({ ...value, phone: e.target.value })} />
                    </div>
                </div>
                <div className="row m-1 d-flex justify-content-end">
                    {/*Cleaning and closing the state */}
                    <button type="button" className="btn btn-primary m-1" onClick={(e) => {
                        setValue("")
                        closeAddContact();
                    }}>Cancel</button>
                    {/* Passing the updated state to the function addContact in flux. Which will create a new contact on the API */}
                    <button type="button" className="btn btn-primary m-1" onClick={() => {
                        handleSubmit()
                        closeAddContact()
                        // actions.getContacts(store.token)
                    }}>Save</button>
                </div>
            </form>
        </div>
    )
}
AddContact.propTypes = {
    // contacts: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state, ownProps) {
    return {
        contacts: state.contacts
    }
}

export default connect(mapStateToProps)(AddContact);
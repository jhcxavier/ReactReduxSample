import React, { useState } from "react";
import { connect } from "react-redux";
import * as contactActions from "../../redux/actions/contactActions";
import { bindActionCreators } from "redux"
import PropTypes from "prop-types";
import { toast } from "react-toastify";
// import { catch } from "fetch-mock";

const AddContact = ({ closeAddContact, actions }) => {
    const [value, setValue] = useState({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phone: ""
    })
    const handleSubmit = async () => {
        // debugger;
        try {
            await actions.saveContact(value)
        } catch (error) {
            console.log(error)
        }
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
                    <button type="button" className="btn btn-primary m-1" onClick={async () => {
                        try {
                            await actions.saveContact(value)
                            toast.success("Contact Saved.");
                        } catch (error) {
                            console.log(error)
                        } finally {
                            closeAddContact()
                        }
                        // actions.getContacts(store.token)
                    }}>Save</button>
                </div>
            </form>
        </div>
    )
}
AddContact.propTypes = {
    contacts: PropTypes.array.isRequired,
    // saveContact: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        contacts: state.contacts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(contactActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
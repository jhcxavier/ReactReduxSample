import React, { useEffect } from 'react';
import contactReducer from "../../redux/reducers/contactReducer";
import * as contactActions from "../../redux/actions/contactActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as api from "../../api/contactAPi";
import { bindActionCreators } from "redux"



const ListOfContacts = ({ contacts, actions }) => {
    useEffect(() => {
        actions.loadContacts().catch(error => {
            alert("load courses failed " + error)
        })
    }, [])
    console.log("loadcourses", contactActions.loadContacts())
    return (
        <div>
            <table className="table table-bordered mt-2 pt-5">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Company</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Created at</th>
                        <th scope="col">{' '}</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts && contacts.map((e, index) => {
                        return (
                            <tr key={index}>
                                <td>{e.firstName}</td>
                                <td>{e.lastName}</td>
                                <td>{e.company}</td>
                                <td>{e.email}</td>
                                <td>{e.phone}</td>
                                <td>{e.create_date}</td>
                                <td>
                                    <i id='tooltip' className="fas fa-edit p-2" samesite={"None"} type="button" ></i>
                                    <i className="fas fa-users-cog p-2 text-secondary" samesite={"None"}></i>
                                    <i className="fas fa-file-download p-2 text-secondary" samesite={"None"}></i>
                                    {/* Delete a contact */}
                                    <i className="far fa-trash-alt p-2" samesite={"None"} type="button"></i>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
ListOfContacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    // debugger;
    return {
        contacts: state.contacts
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(contactActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfContacts);
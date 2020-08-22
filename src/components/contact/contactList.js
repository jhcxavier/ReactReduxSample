import React, { useEffect } from 'react';
import * as contactActions from "../../redux/actions/contactActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux"
import Contact from "./contact1"
import Spinner from '../common/spinner';

const ListOfContacts = ({ contacts, actions, loading }) => {

    useEffect(() => {
        if (contacts.length === 0) {
            actions.loadContacts().catch(error => {
                alert("load contacts failed " + error)
            })
        }
    }, [contacts])
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
                {loading ? <Spinner /> : (
                    <tbody>
                        {contacts && contacts.map((contact) => {
                            return (
                                <Contact key={contact._id} data={contact} />
                            )
                        })}
                    </tbody>
                )}

            </table>
        </div>
    )
}
ListOfContacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
    // debugger;
    console.log("mapstate", state)
    return {
        contacts: state.contacts,
        loading: state.apiCallsInProgress > 0

    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadContacts: bindActionCreators(contactActions.loadContacts, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfContacts);
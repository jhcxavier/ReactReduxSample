import React, { useEffect, useState } from 'react';
import * as contactActions from "../../redux/actions/contactActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux"
import Contact from "./contact1"
import Spinner from '../common/spinner';

const ListOfContacts = ({ contacts, actions }) => {
    // const [spinner, setSpinner] = useState(false)
    useEffect(() => {
        if (contacts.length === 0) {
            actions.loadContacts().catch(error => {
                alert("load contacts failed " + error)
            })
        }
    }, [contacts])

    let border;
    if (!contacts.length) {
        border = "table mt-2 pt-5";
    } else {
        border = "table table-bordered mt-2 pt-5";
    }

    return (
        <>
            <table className={border}>
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

                {contacts.length ?
                    (<tbody>{contacts.map((contact, index) => {
                        return (
                            <Contact key={index} data={contact} />
                        )
                    })}</tbody>) : <tbody />}
            </table>
            {!contacts.length ? <Spinner /> : ""}
        </>
    )
}

ListOfContacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
    // loading: PropTypes.bool.isRequired,
    // typeSearch: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {

    return {
        contacts: state.contacts,
        loading: state.apiCallsInProgress > 0,

    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadContacts: bindActionCreators(contactActions.loadContacts, dispatch),
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfContacts);
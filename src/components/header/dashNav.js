import React, { useState } from 'react';
import AddContact from "../contact/addContact";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
// import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import * as contactActions from "../../redux/actions/contactActions";
import { bindActionCreators } from "redux"



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '20ch',
            // flexDirection: "row"
        },
    },
    margin: {
        marginLeft: theme.spacing(1),
    },
}));

const DashboardNav = ({ actions }) => {
    // Material ui styles
    const classes = useStyles();
    // accessing actions in flux
    // setting paremeter for search contact
    const [search, setSearch] = useState("")
    //inserting the data the should be found on the list of contact
    const [inputSearch, setInputSearch] = useState("")
    // opening space to add a new contact
    const [showAddContact, setShowAddContact] = useState(false)

    return (

        <div className="mt-3">
            <div className={classes.root} noValidate autoComplete="off">

                <FormControl className={classes.margin, "mr-5"}>
                    <InputLabel id="demo-mutiple-name-label">Search By</InputLabel>
                    {/* Setting the option for searching contact */}
                    <NativeSelect
                        labelid="demo-mutiple-name-label"
                        id="demo-mutiple-name"
                        multiple
                        value={search}
                        onChange={(e) => { setSearch(e.target.value) }}
                    // updating the state with the selected option
                    >
                        <option aria-label="None" value="" />
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="lastName">Last Name</option>
                    </NativeSelect>
                </FormControl>
                {/* Insert the value that should match on the contact list */}
                <TextField id="standard-basic" label="Search" onChange={(e) => setInputSearch(e.target.value)} />
                {/* sending the option and the value for searching */}
                <Button type="button" variant="outlined" color="primary" className="ml-5" onClick={() => {
                    actions.loadSearch({ "type": search, "value": inputSearch })
                }}>
                    Search
                </Button>
                {/* Opening the fields to add contact */}
                <Button variant="outlined" color="primary" className="ml-5" onClick={() => {
                    setShowAddContact(!showAddContact)
                }}>
                    Add Contact
                </Button>
            </div>
            <div>
                {showAddContact && <AddContact closeAddContact={() => {
                    setShowAddContact(false)
                }} />}</div>
        </div>
    )
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
export default connect(mapStateToProps, mapDispatchToProps)(DashboardNav); 
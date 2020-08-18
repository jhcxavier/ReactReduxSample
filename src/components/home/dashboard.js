import React from 'react';
import DashboardNav from '../header/dashNav';
import ListOfContacts from '../contact/contactList';

const Dashboard = () => {
    return (
        <div className="container text-center mt-2">
            <h1>Hello Dashboard</h1>
            <DashboardNav />
            <ListOfContacts />
        </div>
    )
}
export default Dashboard;
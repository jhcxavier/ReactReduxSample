import React from 'react';

const ListOfContacts = () => {
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
                    {""}
                </tbody>
            </table>
        </div>
    )
}
export default ListOfContacts;
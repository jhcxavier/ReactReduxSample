import React from 'react';

const ListOfContacts = ({ contacts }) => {
    console.log(contacts)
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
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <i id='tooltip' className="fas fa-edit p-2" samesite={"None"} type="button" ></i>
                            <i className="fas fa-users-cog p-2 text-secondary" samesite={"None"}></i>
                            <i className="fas fa-file-download p-2 text-secondary" samesite={"None"}></i>
                            {/* Delete a contact */}
                            <i className="far fa-trash-alt p-2" samesite={"None"} type="button"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default ListOfContacts;
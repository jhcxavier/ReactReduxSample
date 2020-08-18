import React from "react";

const Contact = () => {
    return (
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <i id='tooltip' className="fas fa-edit p-2" samesite={"None"} type="button" ></i>
            <i className="fas fa-users-cog p-2 text-secondary" samesite={"None"}></i>
            <i className="fas fa-file-download p-2 text-secondary" samesite={"None"}></i>
            {/* Delete a contact */}
            <i className="far fa-trash-alt p-2" samesite={"None"} type="button"></i>
        </tr>
    )
}
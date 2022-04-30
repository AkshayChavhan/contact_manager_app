import React from "react";
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import {  } from '@mui/icons-material';
// import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
function ContactCard(props) {

    const { id , name , email } =props.contact ;
    return (
        <div className="items">
            <div className="contact">
                <div className="header_name">{name}</div>
                <div className="icon_container">
                {/* <DeleteTwoToneIcon /> */}
                <div className="header_email">{email}</div>
                <div classname="delete_icon"><button className="delete_btn">X</button></div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default ContactCard;
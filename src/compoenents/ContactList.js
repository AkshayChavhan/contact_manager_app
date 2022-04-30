import React from "react";
import ContactCard from "./ContactCard";

function ContactList( props ){
    console.log(props);

    const renderContactList = props.contacts.map((contact)=>{
        return (
            <div class="card_container">
                <ContactCard contact={ contact }/>
            </div>
        )
    })
    return(
        <div className="contactlist">
            {renderContactList}
        </div>
    )
}

export default ContactList;
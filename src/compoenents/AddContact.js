import React from "react";

class AddContact extends React.Component{
    render(){
        return(
        <div className="addcontact_container">
            <h2>Add Contact</h2>
            <form className="form_container">
                <div>
                    <label className="form_label">Name</label> 
                    <input className="form_input" 
                    type="text" 
                    name="name" 
                    placeholder="Enter name" />
                </div>
                <div>
                    <label className="form_label">Email</label> 
                    <input className="form_input" 
                    type="email" 
                    name="email" 
                    placeholder="Enter Email" />
                    <div className="bottom_border">
                    <button className="btn">Add</button>
                    </div>
                    <hr></hr>
                </div>
            </form>
        </div>
      );
    }
}

export default AddContact;
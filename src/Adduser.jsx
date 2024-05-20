import React, { useEffect, useState } from 'react'

const Adduser = ({ adduser , single , Updateuser ,editId }) => {

    const [name, setname] = useState("");
    const [phone, setphone] = useState("");

    useEffect(() => {
        setname(single.name);
        setphone(single.phone);
    },[single]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let obj = {
            id : Date.now(),
            name : name,
            phone : phone
        };
        if(editId){
            Updateuser(obj);
        }
        else{
            adduser(obj);
        }
        setname("");
        setphone("");
    }

    return (
        <div align="center">
            <h1>Add User</h1>
            <form onSubmit={handleSubmit}>
                Name : <input type="text" onChange={(n) => setname(n.target.value)} value={name || ""}></input>
                <br></br><br></br>
                Phone : <input type="text" onChange={(e) => setphone(e.target.value)} value={phone || ""}></input>
                <br></br><br></br>
                <input type="submit" className='border-0 bg-primary rounded-pill px-4 py-1' value="Add"/>
            </form>
        </div>
    )
}

export default Adduser
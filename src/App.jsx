import { useState } from "react"
import Adduser from "./Adduser"
import Viewuser from "./Viewuser"
import 'bootstrap/dist/css/bootstrap.min.css'
import './Style.css'

function App() {

  const [alldata,setAlldata] = useState([]);
  const [single,setSingle] = useState("");
  const [editId,seteditId] = useState("");

  const adduser = (data) => {
    setAlldata([...alldata,data]);
    alert("User Register Successfully.....!")
  }

  const Deleteuser = (id) => {
    setAlldata(alldata.filter(item => item.id != id))
    alert("Record was deleted successfully...")
  }

  const Edituser = (id) => {
    setSingle(alldata.find(val => val.id == id))
    seteditId(id)
  }

  const Updateuser = (data) => {
    let up = alldata.map((val) => {
      if(val.id == editId){
        val.name == data.name,
        val.phone == data.phone
      }
      return val;
    })
    setAlldata(up);
    alert("Record Updated...")
    seteditId("");
  }

  return (
    <>
      <Adduser adduser={adduser} single={single} editId={editId} Updateuser={Updateuser}/>
      <Viewuser alldata={alldata} Deleteuser={Deleteuser} Edituser={Edituser}/>
    </>
  )
}

export default App

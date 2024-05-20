import React, { useState } from 'react'

const Viewuser = ({alldata , Deleteuser , Edituser}) => {

    const [alltask,setAlltask] = useState([])

  return (
    <div align="center" className='container'>
        <h1 className='pt-5 pb-3'>Viewuser</h1>
        <table className='table table-primary table-striped table-hover'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Task</th>
                </tr>
            </thead>
            <tbody>
                {
                    alldata.map((task) => {
                        return (
                            <tr key={task.id}>
                                <td>{task.id}</td>
                                <td>{task.name}</td>
                                <td>{task.phone}</td>
                                <td>
                                    <button onClick={ () => Deleteuser(task.id)} className='me-4 bg-danger px-3 rounded-pill  border-0'>Delete</button>
                                    ||
                                    <button onClick={ () => Edituser(task.id)} className='ms-4 bg-success px-4 rounded-pill  border-0'>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Viewuser
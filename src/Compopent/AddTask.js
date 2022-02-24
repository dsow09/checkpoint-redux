import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/action";

function AddTask() {
    const [description, setDescription] = useState("");
    let dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
       dispatch( addTask({
        id: Date.now(),
        description: description,
        isDone: false
    }))
        setDescription('');
        alert('Tache ajoutée avec succès !')
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-3">
                        </div>
                        <div className="col-5">
                            <div className="p-4">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={description} 
                                    onChange={(e) => setDescription(e.target.value)} 
                                    required/>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="p-4">
                               <button className="btn btn-primary">Ajouter</button> 
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default AddTask;
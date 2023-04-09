import { useState } from "react";
import TextField from "../../component/TextField";
import Button from "../../component/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../counter/counterSlice";

import { useSelector } from "react-redux";

const AddUser = () => {

    const users = useSelector(store => store.users );
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [values, setValues] = useState({
        name: '',
        email: ''
    })


    const handleAdduser = () => {
        console.log(values)
        dispatch(addUser(
            { id: users.length +1, name: values.name, email: values.email },
        ));
        navigate('/');
    }

    return (
        <div className="mt-10 max-w-xl mx-auto">
            <TextField
                label="Name"
                inputProps={{type: 'text', placeholder: ' john doe'}}
                onChange={(e) => setValues({...values, name: e.target.value })}
            />
            <br/>
            <TextField
                label="Email"
                inputProps={{type: 'email', placeholder: ' john@gmail.com'}}
                onChange={(e) => setValues({...values, email: e.target.value })}
            />
             <Button onClick={handleAdduser}>Save</Button>
        </div>
    );
}

export default AddUser;
import { useState } from "react";
import TextField from "../../component/TextField";
import Button from "../../component/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";


const EditUser = () => {

    const navigate = useNavigate();
    const params = useParams();
    const users = useSelector(store => store.users);
    const existingUser = users.filter(user => user.id == params.id)

   
    console.log(existingUser[0])
    const { name, email } = existingUser[0];

    const [values, setValues] = useState({
        name,
        email
    })

    const handleEditUser = () => {
        console.log(values)
        setValues({ name: '', email: '' });
        navigate('/')
    }

    return (
        <div className="mt-10 max-w-xl mx-auto">
            <TextField
                label="Name"
                inputProps={{ type: 'text', placeholder: ' john doe' }}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
            <br />
            <TextField
                label="Email"
                inputProps={{ type: 'email', placeholder: ' john@gmail.com' }}
                onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
            <Button onClick={handleEditUser}>Edit</Button>
        </div>
    )
}

export default EditUser;
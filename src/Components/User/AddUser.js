import {useState} from 'react';
import Card from '../UI/Card';

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    };

    const [enteredName, setEnteredName] = useState('');

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
        console.log(setEnteredName);
    };

    return (
    <Card>
        <form onSubmit={addUserHandler}>
            <div>
            <label htmlFor='username'>Username</label>
            <input id="username" type='text' value={enteredName} onChange={nameChangeHandler}/>
            <label htmlFor='username'>Age (Years)</label>
            <input id="username" type='number' value={enteredName} onChange={nameChangeHandler}/>
            <button type='submit'>Add User</button>
            </div>
        </form>

    </Card>
    );
};


export default AddUser;
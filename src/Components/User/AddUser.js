import {useState} from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }

        if (+enteredAge < 1) {
            return;
        }

        props.onAddUser(enteredName, enteredAge);
        setEnteredAge('');
        setEnteredName('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return (
    <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <div>
            <label htmlFor='username'>Username</label>
            <input id="username" type='text' value={enteredName} onChange={usernameChangeHandler}/>
            <label htmlFor='age'>Age (Years)</label>
            <input id="age" type='number' value={enteredAge} onChange={ageChangeHandler}/>
            <Button type='submit'>Add User</Button>
            </div>
        </form>

    </Card>
    );
};


export default AddUser;
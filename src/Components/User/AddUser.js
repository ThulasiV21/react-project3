import {useState} from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredName.trim().length === 0 || setEnteredAge.trim().length === 0) {
            return;
        }

        if (+enteredAge < 1) {
            return;
        }

        console.log(enteredAge, enteredName);
        setEnteredAge('');
        setEnteredName('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const uageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return (
    <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <div>
            <label htmlFor='username'>Username</label>
            <input id="username" type='text' value={enteredName} onChange={usernameChangeHandler}/>
            <label htmlFor='username'>Age (Years)</label>
            <input id="username" type='number' value={enteredAge} onChange={uageChangeHandler}/>
            <Button type='submit'>Add User</Button>
            </div>
        </form>

    </Card>
    );
};


export default AddUser;
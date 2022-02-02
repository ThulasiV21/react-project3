import {useState} from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

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
    <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <div>
            <label htmlFor='username'>Username</label>
            <input id="username" type='text' value={enteredName} onChange={nameChangeHandler}/>
            <label htmlFor='username'>Age (Years)</label>
            <input id="username" type='number' value={enteredName} onChange={nameChangeHandler}/>
            <Button type='submit'>Add User</Button>
            </div>
        </form>

    </Card>
    );
};


export default AddUser;
import {useState} from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(enteredAge, enteredName);
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
            <input id="username" type="text" onChange={usernameChangeHandler}/>
            <label htmlFor='username'>Age (Years)</label>
            <input id="username" type="number" onChange={uageChangeHandler}/>
            <Button type='submit'>Add User</Button>
            </div>
        </form>

    </Card>
    );
};


export default AddUser;
import {useState} from 'react';

const Username = (props) => {
    const [enteredName, setEnteredName] = useState('');

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
        console.log(setEnteredName);
    };

    return <div>
        <form>
            <div>
            <label>Username</label>
            <input type='text' value={enteredName} onChange={nameChangeHandler}/>
            </div>
        </form>

    </div>;

};


export default Username;
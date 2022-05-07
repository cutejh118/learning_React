import React, { useState } from 'react';

const IterationSample = () => {

    const [names, setNames] = useState([
        {id: 1, text : '눈사람'},
        {id: 2, text : '눈'},
        {id: 3, text : '겨울'}
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(4);

    const onChange = e => setInputText(e.target.value);
    const onClick = () =>{
        const nextnames = names.concat({
            id: nextId,
            text: inputText

        });
        setNextId(nextId + 1);
        setNames(nextnames);
        setInputText('');

    };
    const onRemove = id => {
        const nextNames = names.filter(name => name.id !==id);
        setNames(nextNames);
    };
    const namesList = names.map(name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}  >{name.text}</li>);
    return (
        <div>
            <input value={inputText} onChange={onChange} ></input>
            <button onClick={onClick}  >추가</button>
            <ul>{namesList}</ul>
        </div>
    );
};

export default IterationSample;
import React from 'react';

const IterationSample = () => {
    const names = ['눈사람', '눈' , '겨울' ];
    const namelist = names.map((name , index ) => <li key={index} >{name}</li>);
    return <ul>{namelist}</ul>
        
};

export default IterationSample;
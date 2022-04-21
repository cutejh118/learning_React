import React from 'react';

const Mycomponent = ({name}) => {

    //const {name} = props; //비구조화

    return (
        <div>
            안녕하세요 컴포넌트 이해<br></br>
            {name}입니다.
        </div>
    );
};

Mycomponent.defaultProps = {
    name : '기본 값' 
};


export default Mycomponent
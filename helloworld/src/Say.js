import  {useState} from 'react';

const Say = () => {
    const [message,setMessage] = useState('버튼을 누르지 않은 상태');
    const onClickEnter = () => setMessage('안녕하세요');
    const onClickleave = () => setMessage('안녕히 가세요');
    //응용해서 useState 한개더 써보기

    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickEnter} >입장</button>
            <button onClick={onClickleave} >퇴장</button> 
            <h1 style={{color}} >{message}</h1>
            <button style={ {color:'red'}}  onClick={ () => setColor('red') } >빨간색</button>
            <button style={ {color:'green'}} onClick={ () => setColor('green') }  >초록색</button>
            <button style={ {color:'blue'}} onClick={ () => setColor('blue') }  >파란색</button>

            </div>
    );
};

export default Say;
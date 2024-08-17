import React, { useState } from 'react'

function NumInputField() {
    const [num,setNum]=useState('');
    const [warning,setWarning]=useState('');
   
    function handleInput(e){
         const inputValue=Number(e.target.value);
        //  console.log(typeof(inputValue), inputValue);
        setNum(e.target.value);
        switch(true){
            case inputValue<0:
        setWarning('Enter positive number');
            break;
            case inputValue%2===0:
                setWarning(`${inputValue+2} ${inputValue+4} ${inputValue+6}`);
             
                break;
                case inputValue%2!==0:
                    setWarning(`${inputValue+2} ${inputValue+4} ${inputValue+6}`);

                   
                    
                    break;
                default:
                    setWarning('error');
                    break;
        }
    }

  return (
    <div className='num'>
        <input type="number" value={num} onChange={handleInput} placeholder='Enter number' />
        <div className={`warning ${Number(num)&&Number(num)<0?'danger':'success'}`}>{warning}</div>
    </div>
  )
}

export default NumInputField
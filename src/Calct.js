
import { useRef } from 'react';
import './Caluc.css';


function Calucl()
{
    const inp = useRef();





    const MyFun=(tv)=>{
        if(tv=="c")
             inp.current.value=' ';
         else if(tv=="=")
                inp.current.value=eval(inp.current.value);
         else
                inp.current.value +=tv;
        
    };
    
    return  (
        <div className="calcont">

    <div id="cakl">
        <div id="dis">
            <input type="text" id="Inp" ref={inp} disabled/>
        </div>
        <div id="ks">
            <button id="Bt" onClick={(e)=>MyFun(e.target.innerText)} >7</button>
            <button id="Bt" onClick={(e)=>MyFun(e.target.innerText)} >8</button>
            <button id="Bt" onClick={(e)=>MyFun(e.target.innerText)} >9</button>
            <button id="Bt" onClick={(e)=>MyFun(e.target.innerText)} >+</button>
            <button id="Bt" onClick={(e)=>MyFun(e.target.innerText)} >4</button>
            <button id="Bt" onClick={(e)=>MyFun(e.target.innerText)} >5</button>
            <button id="Bt" onClick={(e)=>MyFun(e.target.innerText)} >6</button>
            <button id="Bt" onClick={(e)=>MyFun(e.target.innerText)} >-</button>
            <button id="Bt" onClick={(e)=>MyFun(e.target.innerText)} >3</button>
            <button id="Bt" onClick={(e)=>MyFun(e.target.innerText)} >2</button>
            <button id="Bt" onClick={(e)=>MyFun(e.target.innerText)} >1</button>
            <button id="Bt" onClick={(e)=>MyFun(e.target.innerText)} >/</button>
            <button id="Bt" onClick={(e)=>MyFun(e.target.innerText)} >*</button>
            <button id="Bt" onClick={(e)=>MyFun(e.target.innerText)} >.</button>
            <button id="Bt" onClick={(e)=>MyFun(e.target.innerText)} >0</button>
            <button id="Bt" onClick={(e)=>MyFun(e.target.innerText)} >c</button>
            
            <button id="Bt" onClick={(e)=>MyFun(e.target.innerText)}  className="eql">=</button>
        </div>
    </div>
</div>);
    
}

export default Calucl;
import SendButton from "./SendButton"
import input from './input.css'
import {useState} from 'react'
import axios from "axios"
import font from '../../font.css'


const TypeComponent = () => {
    const [ins, setins] = useState();
    const [btnOn,setBtn] = useState(false);
    const [focus, isFocus] = useState(false);

    const sendMessage=()=> {
        //axios.post()
        setins("")
    }
    const _onChange=(e)=>{
        isFocus(true);
        setins(e.target.value);
    }
    const _onBlur=()=>{
        if (focus === true && ins != "") {
        } else {
            setBtn(false);
            isFocus(false);
        }
    }
    const btnClick = () => {
        sendMessage();
        document.getElementById("talk_input").focus();
    }

    return(
        <div
        style={{
            position:'absolute',
            bottom:'4vh',
            right:'2.5vw',
            display:'grid',
            gridTemplateColumns:'1fr 0.2fr',
            borderBottom:'1px solid white',
            width:'19vw',
            height:'5vh',
            paddingLeft:'0.5vw',
            color:'white',
        }}>
            <input 
            autoComplete="off"
            onKeyPress={(e)=>{if(e.key=='Enter'){sendMessage()}}}
            onChange={_onChange}
            onFocus={()=>setBtn(true)}
            onBlur={_onBlur}
            value={ins}
            placeholder='Type Something'
            className="input" 
            id="talk_input"
            style={{
                fontFamily:'Roboto',
                backgroundColor:'rgba(0,0,0,0)',
                border:'0px solid black',
                color:'white',
                fontSize:'1.2vw',
            }}>
            </input>
            {(btnOn === true) ? 
                (<button style={{
                    background: 'none',
                    color: 'inherit',
                    border: '1px solid red',
                    border: 'none',
                    padding: '0',
                    font: 'inherit',
                    cursor: 'pointer',
                    outline: 'inherit',
                }}  
                onClick={btnClick}><img src={require('../../../image/Vector.png').default}></img></button>)
            : null}
        </div>
    )
}
export default TypeComponent
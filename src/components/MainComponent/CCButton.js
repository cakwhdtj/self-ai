import { connect,useSelector } from 'react-redux'
import store from '../..';
import { addTochatdata_input, addTochatdata_output,addVideo,setImageNum,isrecord } from "../../redux_src/chat_rdx";
import { useState } from 'react';
import '../font.css';

const mapStateToProps = state => ({
    chat: state.chat,
    video: state.video,
    image: state.image,
    recording: state.recording
  });
  
const mapDispatchToProps = {
    addTochatdata_input,
    addTochatdata_output,
    addVideo,
    setImageNum,
    isrecord
  };



const CCButton=()=>
{
    var loading=null
    const [clicked,setclicked]=useState(1)
    const chat= store.getState()['chat']
    var l = 40
    if (chat.length < 40){
        l = chat.length
    }
    var width_len = '60vw'
    console.log(l)
    const record = store.getState()['recording']
    console.log(record)
    if(store.getState()['recording']==1)
    {
        loading=
            <div style={{
                position:'absolute',
                width:'50vw',
                opacity:clicked,
                bottom:'4vh',
                left:(500-l*5.5)/25+'vw',
                textAlign:'center',
                height:'auto',
                background:'rgba(0,0,0,0.7)',
                color:'white',
                fontSize:'1.8vw',
                fontFamily:'Poppins',
                paddingLeft:'10px',
                paddingRight:'10px',
                paddingTop:'1vh',
                wordBreak:'break-word'
            }}>
                {chat}
            </div>
    }
    else{
        loading= <div style={{position:'absolute', top:'10vh', left:'37.5vw'}} className='loader'></div>
    }
    return(
        <div>
        <div onClick={()=>{clicked? setclicked(0): setclicked(1)
        console.log(record)}}
        style={{
            position:'absolute',
            bottom:'0%',
            left:'0%',
            width:'50px',
            height:'50px',
            marginBottom:'4vh', 
            left:'2vw',
            background:'rgba(0,0,0,0.7)',
            textAlign:'center',
            color:'white',
        }}>
            <div style={{
                opacity: clicked+0.6,
                paddingTop:'24%',
                paddingLeft:'2%'
            }}>
                <img src={require('../../image/caption.png').default}></img>
            </div>
            
        </div>
        {loading}
        </div>
    )
}
export default connect(mapStateToProps,mapDispatchToProps)(CCButton)
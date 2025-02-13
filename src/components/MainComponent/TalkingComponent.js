import CCButton from './CCButton'
import LeaveButton from './LeaveButton'
import Image from './Image'
import store from '../../index'
import { connect,useSelector } from 'react-redux'
import { addTochatdata_input, addTochatdata_output, addVideo,setImageNum} from "../../redux_src/chat_rdx";

const mapStateToProps = state => ({
    chat: state.chat,
    video: state.video,
    image: state.image
  });
  
  const mapDispatchToProps = {
    addTochatdata_input,
    addTochatdata_output,
    addVideo,
    setImageNum,
  };
const TalkingComponent=()=>
{
    const css=
        {
        bg:
        {
            height:'100vh',
            width:'100wh',
        },
        link:{
            textDecoration:'none'
        }
        }
        return(
    <div style={css.bg}>
        <a href='http://self-ai.net/' style={css.link}>
            <LeaveButton></LeaveButton>
        </a> 
        <Image type = {store.getState()['image']}></Image>
        <CCButton></CCButton>
    </div>
        )
}
export default connect(mapStateToProps,mapDispatchToProps)(TalkingComponent)
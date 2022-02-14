import React,{useState} from 'react'

function LikeIcon() {
    const [liked, setLiked] = useState(false);
    const [src, setSrc] = useState('/Unliked.svg');
    const handleLike=()=>{
        if (liked===false) {
            setLiked(true);
            setSrc("/Unliked.svg");
        }else{
            setLiked(false);
            setSrc("/Liked.svg");
    }
}
  return (
    <div>
        <img src={src} alt="Like" style={{width:"35px", cursor:"pointer", margin:"10px"}} onClick={handleLike}/>
    </div>
  )
}

export default LikeIcon
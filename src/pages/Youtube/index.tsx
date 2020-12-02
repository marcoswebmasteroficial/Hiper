import React, { useState ,useEffect} from 'react';
import { Container, Input,Button,Search,Error,VideoInfo,Thumb,TitleVideo} from './styles'

import ytdl from 'ytdl-core';
import fs from 'fs'
import { Circle } from 'rc-progress';

function youtube_parser(url){
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return (match&&match[7].length==11)? match[7] : false;
}
const Youtube: React.FC = () => {
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [urlVideo, seturlVideo] = useState('https://www.youtube.com/watch?v=4Q9DWZLaY2U');
  const [erros, setErros] = useState('');
 
  const [videoTitle, setvideoTitle] = useState('');
  const [videoThumb, setvideoThumb] = useState('');
  const [videoDuration, setvideoDuration] = useState('00:00:00');
  const [videoAuthor, setvideoAuthor] = useState('');


  const Download = () => {
    ytdl('http://www.youtube.com/watch?v=aqz-KE-bpKQ')
  .pipe(fs.createWriteStream('video.mp4'));
  };
  const SearchVideo = () => {
    setErros('');
 const url_response = youtube_parser(urlVideo);
 if(url_response){
 
  ytdl.getInfo(url_response).then(info => {
    setvideoTitle(info.videoDetails.title)
    setvideoThumb(info.videoDetails.thumbnail.thumbnails[0].url)
    setvideoAuthor(info.videoDetails.ownerChannelName)
    setvideoDuration(info.videoDetails.lengthSeconds)
    });



 }else{
  setErros('Url do video não é valida')
 }
  };
  return (<>
  <Container>
    <Search>
  <Input type="text" onChange={(e)=>{
seturlVideo(e.target.value);
  }} placeholder="Url video"/>
 <Button onClick={SearchVideo}>Fazer Buscar</Button>
 </Search>
 <div>
   {erros && (<Error>{erros}</Error>)}
   {
videoTitle && (<VideoInfo><Thumb><img src={videoThumb}></img></Thumb><TitleVideo><h2>{videoTitle}</h2><small>{videoAuthor}</small></TitleVideo></VideoInfo>)
   }
   </div>
 </Container>
 </>
  )
}

export default Youtube;

import React, { useState ,useEffect} from 'react';
import * as S from './styles'
import { ipcRenderer } from 'electron'
import ytdl, { videoFormat } from 'ytdl-core';
import fs from 'fs'
import path from 'path'
import readline from 'readline'

import { Line } from 'rc-progress';

function youtube_parser(url:string){
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return (match&&match[7].length==11)? match[7] : false;
}







const Youtube: React.FC = () => {
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [urlVideo, seturlVideo] = useState('');
  const [erros, setErros] = useState('');
 
  const [videoTitle, setvideoTitle] = useState('');
  const [videoThumb, setvideoThumb] = useState('');
  const [videoQuality, setvideoQuality] = useState<videoFormat[]>([]);
  const [quality, setQuality] = useState('');

  const [videoDuration, setvideoDuration] = useState('00:00:00');
  const [videoAuthor, setvideoAuthor] = useState('');

  useEffect(() => {
  
  }, [downloadProgress]);
  function string_to_slug (str:string) {
    str = str.replace(/^\s+|\s+$/g, ''); 
    str = str.toLowerCase();

    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
}
const Qualidade = (q) =>{
  switch(q){
    case "17":
      return "144P";
      break;
  case "278":
      return "144P";
      break;
  case "36":
      return "240P";
      break;
  case "242":
      return "240P";
      break;
  case "18":
      return "360P";
      break;
  case "243":
      return "360P";
      break;
  case "43":
      return "360P";
      break;
  case "35":
      return "480P";
      break;
  case "44":
      return "480P";
      break;
  case "135":
      return "480P";
      break;
  case "244":
      return "480P";
      break;
  case "22":
      return "720P";
      break;
  case "136":
      return "720P";
      break;
  case "247":
      return "720P";
      break;
  case "137":
      return "1080P";
      break;
  case "248":
      return "1080P";
      break;
  case "299":
      return "1080P (60 FPS)";
      break;
  case "138":
      return "2K";
      break;
  case "264":
      return "2K";
      break;
  case "271":
      return "2K";
      break;
  case "266":
      return "4K";
      break;
  case "315":
      return "4K (60 FPS)";
      break;
  case "139":
      return " 48 Kbps";
      break;
  case "140":
      return "128 Kbps";
      break;
  case "141":
      return " 128 Kbps";
      break;              
  case "171":
      return " 128 Kbps";
      break;
  case "249":
      return " 50k";
      break;
  case "250":
      return " 70k";
      break;
  case "251":
      return " 160k";
      break;  
  }
}
  const Download = async() => {
   
    let format = ytdl.chooseFormat(videoQuality, { quality: quality });
   
    if(!format){
alert('formato invalido');
    }
 
    
    let starttime = 0;

    const folder = await ipcRenderer.invoke('getStoreValue', 'folder');


  const output = path.resolve(folder, `${string_to_slug(videoTitle)} - ${Qualidade(quality)}.mp4`);

  const video = ytdl(urlVideo,{quality:quality});
  video.pipe(fs.createWriteStream(output));
 

  video.once('response', () => {
    starttime = Date.now();
  });
  video.on('progress', (chunkLength, downloaded, total) => {
    const percent = downloaded / total;
    console.log(percent)
    const downloadedMinutes = (Date.now() - starttime) / 1000 / 60;
    const estimatedDownloadTime = (downloadedMinutes / percent) - downloadedMinutes;
    readline.cursorTo(process.stdout, 0);
    setDownloadProgress(parseInt((percent * 100).toFixed(2)))
    process.stdout.write(`${(percent * 100).toFixed(2)}% downloaded `);
    process.stdout.write(`(${(downloaded / 1024 / 1024).toFixed(2)}MB of ${(total / 1024 / 1024).toFixed(2)}MB)\n`);
    process.stdout.write(`running for: ${downloadedMinutes.toFixed(2)}minutes`);
    process.stdout.write(`, estimated time left: ${estimatedDownloadTime.toFixed(2)}minutes `);
    readline.moveCursor(process.stdout, 0, -1);
  });
  video.on('end', () => {
    process.stdout.write('\n\n');
  });
  



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
    setvideoQuality(info.formats)
    });



 }else{
  setErros('Url do video não é valida')
 }
  };
  return (<>
  <S.Container>
    <S.Search>
  <S.Input type="text"  onChange={(e)=>{
seturlVideo(e.target.value);
  }} placeholder="Url video"/>
 <S.Button onClick={SearchVideo}>Fazer Buscar</S.Button>
 </S.Search>
 <div>
   {erros && (<S.Error>{erros}</S.Error>)}
   {
videoTitle && (
<S.VideoInfo>
  <S.Thumb><img src={videoThumb}></img></S.Thumb>
  <S.TitleVideo><h2>{videoTitle}</h2>
  <small>{videoAuthor}</small></S.TitleVideo>
  <select onChange={event => setQuality(event.target.value)}>
      {videoQuality.map((item) => (<>
      {item.container   &&
      (<option key={item.itag} value={item.itag}>
          {item.qualityLabel} - {item.container}
        </option>)}
        </>
      ))}
    </select>
  <S.Button onClick={Download}>Baixar</S.Button>
  {(downloadProgress != 100) ? ( <Line percent={downloadProgress} strokeWidth="4" strokeColor="#f02c01" /> 
 ):<S.Concluido>Download Concluído</S.Concluido>}
  </S.VideoInfo>

  )
   
   }
   </div>
 </S.Container>
 </>
  )
}

export default Youtube;

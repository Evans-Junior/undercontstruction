import React, {useState} from 'react'
import './Search.css'
import axios from "axios"
import SearchIcon from "@material-ui/icons/Search";
// import youtube from '../results/youtube'

function Search() {

   const [search, setSearch]=useState("");
   const [title,setTitle]=useState('')
   const [video,setVideo]=useState('')
   const [channelName,setChannelName]=useState('')
   const [views,setViews]=useState('')
   const [time,setTime]=useState('')
  // const [apiBook]=("AIzaSyAj_avLAFpy1WjZNhAu4TGhcWb0oJf1BBU")
  // const [apiYoutube]=("AIzaSyCVUso0Qo3x7VOfN5N1H7ACEbUpN7f6Ph4")
  function look(search) {
      let urlyoutube=`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&key=AIzaSyCVUso0Qo3x7VOfN5N1H7ACEbUpN7f6Ph4&type=video&q=${search}`
       const response=axios.get(urlyoutube)
    //    .then(
    //       (data)=>{
    //             for(let r=0; r<15; r++){
    //                 console.log(data.data.items[r])
    //             }
    //         }).catch(err=> err)
          
            for(let r=0; r<15; r++){
            console.log((setTitle(response.data.items[r])))
        }

        //   ).catch(err=> err)

        
          //console.log(res.data.items)
     // const response = await youtube.get('search',{
      //   params:{
      //     part:'snippet',
      //     maxResults: 15,
      //     key:[process.env.REACT_APP_YoutubeApi],
      //     q:search,
      // }
      // })
      // console.log(response.data.items);
  //     const response = axios.get(urlyoutube,{
  //         params:{
  //           part:'snippet',
  //           maxResults: 15,
  //           key:process.env.REACT_APP_YOUTUBEAPI,
  //           q:search,
  //       }
  //       })
  //       console.log(response.data.items);
   }


    

  return (
    <div className='search'>
    <div className='wrapper'>
    <form onSubmit={getinfo}>
    <input className="search_input" value={search} type="text" onChange={handleSearch} placeholder="Type to search.." />
    <div className='icon'><SearchIcon className="header__searchIcon " /></div>
    </form>
   
    </div>
    </div>
    
  )
}

export default Search;
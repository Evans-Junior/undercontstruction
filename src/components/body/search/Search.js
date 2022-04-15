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
   const [title,setTitle]=useState('')
  // const [apiBook]=("AIzaSyAj_avLAFpy1WjZNhAu4TGhcWb0oJf1BBU")
  // const [apiYoutube]=("AIzaSyCVUso0Qo3x7VOfN5N1H7ACEbUpN7f6Ph4")
  function look(search) {
      // let urlbook=`https://www.googleapis.com/books/v1/volumes?q=${search}+&key=${apiBook}&maxResults=40`
      // let urlyoutube=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults=15&order=viewCount&safeSearch=safeSearchSettingUnspecified&category=Education&key=AIzaSyCVUso0Qo3x7VOfN5N1H7ACEbUpN7f6Ph4`
      //let urlyoutube='https://developers.google.com/youtube/v3/docs/search/list'
      let urlyoutube=`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&key=AIzaSyCVUso0Qo3x7VOfN5N1H7ACEbUpN7f6Ph4&type=video&q=${search}`
      //let urlyoutube=`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.REACT_APP_YoutubeApi}&type=video&q=${search}` 
       const response=axios.get(urlyoutube).then(
          (data)=>{
                for(let r=0; r<15; r++){
                    console.log(data.data.items[r])
                }
            }).catch(err=> err)
                


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

  function getinfo(e){
      e.preventDefault()

      look(search)
  }
 
      
      function handleSearch(event) {
          setSearch(event.target.value)
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
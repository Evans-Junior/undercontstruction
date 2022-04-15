import React from 'react'
import './Body.css'
import Preview from './preview/Preview'
import Results from './results/Results'
import Search from './search/Search'


export default function Body() {
  return (
    <div className='main-body'>
    <Preview/>
    <Search/>
    <Results/>
    {/*<Tabs/>*/}
    </div>
  )
}

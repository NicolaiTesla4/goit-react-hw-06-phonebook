import React from 'react'
import css from './Filter.module.css'

export default function Filter({handleFilter }){
  
  return (
     <div>
            {/* <p className={css.text}> Find contacts by name</p> */}
      <input type="text"
        onChange={(e) => { handleFilter(e) }}
        placeholder="Search contacts by name..."
        className={css.filter}
            />
    </div>
  )
}
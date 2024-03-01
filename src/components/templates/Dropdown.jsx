import React from 'react'

function Dropdown({title,opt,func}) {
    
  return (
    <div className='select'>
        <select defaultValue='0' onChange={func} name="format" id="format">
            <option value="0" disabled>
                {title}
            </option>
            {opt.map((o,i)=>{
                return <option key={i} value={o} >
                {o.toUpperCase()}
                </option>
            })}
        </select>
    </div>
  )
}

export default Dropdown
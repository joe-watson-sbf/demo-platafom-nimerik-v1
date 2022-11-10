import React from 'react'

const ListMatye = ({children, title}) => {
  return (
    <div style={{width: '100%', textAlign: 'center'}}>
        <h1> {title} </h1>
        {children}
    </div>
  )
}

export default ListMatye
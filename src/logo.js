import React from 'react'

function Logo(props) {
    return  <img src={props.source} className="App-logo" alt={props.source.split(".")[0]}/>
}

export default Logo;

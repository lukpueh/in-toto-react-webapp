import React from 'react'

function RotoLogo(props) {

    return <img src={props.source + ".png"}  className="RotoLogo" alt={props.source.split(".")[0]}/>
}

function LogoTable(props) {

    return  (
        <div>

            {props.logos.map((logo, i) => 
                    <span>
                     <RotoLogo source={logo} /> 
                    </span>
                )}

        </div>
        );

}

export default LogoTable;

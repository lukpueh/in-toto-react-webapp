import React from 'react'

function RotoLogo(props) {

    return (<div className="link">
            <img src={props.source + ".png"}  className="RotoLogo" alt={props.source.split(".")[0]}/>
            </div>);
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

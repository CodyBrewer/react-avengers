import React from 'react';
import Avenger from './Avenger';

const AvengersList = props => {
    return (
        {props.Avengers.map(avenger => {
            return <Avenger
                avenger = {avenger}
            />
        })}
    )
}

export default AvengersList;
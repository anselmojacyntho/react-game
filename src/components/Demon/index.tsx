import React from 'react';
import { TILE_SIZE, DEMON_TILE_SIZE } from '../../settings/constants';
import './index.css';

const Demon = () => {
    return (
        <div 
            style={{
                width: DEMON_TILE_SIZE,
                height: DEMON_TILE_SIZE,
                bottom: TILE_SIZE * 9,
                left: TILE_SIZE * 7,
                backgroundImage: "url(./assets/DEMON.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: 8 * TILE_SIZE,
                animation: 'demon-animation 1s steps(4) infinite',
                position: "absolute"
            }}
        />
    );
}

export default Demon;
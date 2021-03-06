import React from 'react';
import { TILE_SIZE } from '../../settings/constants';
import './index.css';

const MiniDemon = () => {
    return (
        <div 
            style={{
                width: TILE_SIZE,
                height: TILE_SIZE + 8,
                bottom: TILE_SIZE * 8,
                left: TILE_SIZE * 6,
                backgroundImage: "url(./assets/MINI-DEMON.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: 4 * TILE_SIZE,
                backgroundPosition: `0px -${TILE_SIZE-8}px`,
                animation: 'mini-demon-animation 1s steps(4) infinite',
                position: "absolute"
            }}
        />
    );
}

export default MiniDemon;
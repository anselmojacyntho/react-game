import React from 'react';
import { TILE_SIZE } from '../../settings/constants';
import './index.css';

const Chest = () => {
    return (
        <div 
            style={{
                width: TILE_SIZE,
                height: TILE_SIZE + 10,
                bottom: TILE_SIZE * 7,
                left: TILE_SIZE * 9,
                backgroundImage: "url(./assets/CHEST.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: 3 * TILE_SIZE,                
                animation: 'chest-animation 1s steps(3) infinite',
                position: "absolute"
            }}
        />
    );
}

export default Chest;
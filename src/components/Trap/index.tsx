import React from 'react';
import { TILE_SIZE } from '../../settings/constants';
import './index.css';

const Trap = () => {
    return (
        <div 
            style={{
                width: TILE_SIZE,
                height: TILE_SIZE,
                bottom: TILE_SIZE * 15,
                left: TILE_SIZE * 13,
                backgroundImage: "url(./assets/TRAP.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: 8 * TILE_SIZE,
                animation: 'trap-animation 1s steps(8) infinite',
                position: "absolute"
            }}
        />
    );
}

export default Trap;
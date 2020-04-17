import React from 'react';
import useEventListener from '@use-it/event-listener';
import { TILE_SIZE } from '../../settings/constants';
import './index.css';

const initialPosition = {
    x: 3,
    y: 5
};

const Hero = () => {

    const [positionState, updatePositionState] = React.useState(initialPosition);    
    const [direction, updateDirectionState] = React.useState('right');

    useEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            const newPosition = {
                x:positionState.x - 1,
                y:positionState.y
            };
            updateDirectionState('left');
            updatePositionState(newPosition);
        }
        else if (event.key === 'ArrowRight') {
            const newPosition = {
                x:positionState.x + 1,
                y:positionState.y
            };
            updateDirectionState('right');
            updatePositionState(newPosition);
        }
        else if (event.key === 'ArrowDown') {
            const newPosition = {
                x:positionState.x,
                y:positionState.y - 1
            };
        
            updatePositionState(newPosition);
        }
        else if (event.key === 'ArrowUp') {
            const newPosition = {
                x:positionState.x,
                y:positionState.y + 1
            };
        
            updatePositionState(newPosition);   
        }
    });

    return (
        <div 
            style={{
                width: TILE_SIZE,
                height: TILE_SIZE + 8,
                bottom: TILE_SIZE * positionState.y,
                left: TILE_SIZE * positionState.x,
                backgroundImage: "url(./assets/HERO.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: 4 * TILE_SIZE,
                backgroundPosition: `0px -${TILE_SIZE-8}px`,
                transform: `scaleX(${direction === 'right' ? 1 : -1})`,
                animation: 'hero-animation 1s steps(4) infinite',
                position: "absolute"
            }}
        />
    );
}

export default Hero;
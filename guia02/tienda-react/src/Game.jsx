import React from 'react';

const Game = ({game}) => {
    return (<>
        <div className="col my-2">
            <div className="card h-100">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={game.imageUrl} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{game.name}</h5>
                            <p className="card-text">Price: ${game.price}</p>
                            <p className="card-text"><small className="text-body-secondary">{game.description}</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Game;
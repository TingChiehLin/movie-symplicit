import React from 'react';

const MovieCard = ({image, title, description}) => {
    if (image === null) return <></>
    return (
            <div className="w-96 h-full mx-auto bg-purple-300 shadow-lg">
                <img src={image.medium} alt={title}/>
                <h1 className="text-left">{title}</h1>
                <div className="text-sm text-left">{description}</div>
            </div>
        )
}

export default MovieCard

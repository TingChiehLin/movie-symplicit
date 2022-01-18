import React from 'react';

const MovieCard = ({image, title, description}) => {
    if (description === null) return <></>
    if (image === null) return <></>
    const formatText = description.replace("<p>", "").replace("</p>", "").replace("<b>", "").replace("</b>", "")
    return (
        <div className="w-96 h-full mx-auto shadow-lg rounded-xl">
            <img src={image.original} alt={title}/>
            <div className="p-4">
                <h1 className="text-left">{title}</h1>
                <div className="text-sm text-left">{formatText}</div>
            </div>
        </div>
    )
}

export default MovieCard

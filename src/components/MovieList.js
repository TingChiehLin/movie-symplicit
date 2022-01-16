import MovieCard from "./MovieCard";

const MovieList = ({data, limitNumber}) => {
    return (
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                data.slice(0,limitNumber).map((e) => {
                    return (
                        <MovieCard key={e.show.id}
                                   image={e.show.image}
                                   title={e.show.name}
                                   description={e.show.summary}
                        />
                    )
                })
            }
        </div>
    )
}

export default MovieList

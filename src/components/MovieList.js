import MovieCard from "./MovieCard";

const MovieList = ({data}) => {
    return (
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                data.map((e, key) => {
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

import React, {useEffect, useState} from 'react';
import axios from "../api/axios";

import SearchBar from './SearchBar';
import MovieList from "./MovieList";

const MovieSection = () => {

    const [searchText, setSearchText] = useState("");
    const [submitText, setsubmitText] = useState("")
    const [movieData, setmovieData] = useState([])
    const [totalResult, settotalResult] = useState(0);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                await axios.get(submitText).then(res => {
                    console.log("Data:", res.data)
                    setmovieData(res.data)
                    settotalResult(res.data.length)
                })
            } catch (err) {
                console.log(err)
            }
        }
        fetchMovies();
    }, [submitText]);

    const handleInput = (e) => {
        setSearchText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (e.target.value === "") {
            console.log("Please Type any word")
        }
        setsubmitText(searchText)
    }

    return (
        <section className="h-full mt-20">
            <div className="flex justify-center items-center gap-4">
                <SearchBar text={searchText} onChange={handleInput} onSubmit={handleSubmit}/>
                <h3>Result: {totalResult}</h3>
            </div>
            <MovieList data={movieData}/>
            <div className="flex justify-center items-center">
                <button
                    className="bg-blue-300 rounded-md p-3 font-bold"
                >
                    Show More
                </button>
            </div>
        </section>
    )
}

export default MovieSection

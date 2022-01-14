import {MdSearch} from 'react-icons/md';

const SearchBar = ({text, onChange, onSubmit}) => {
    return (
        <div className="relative flex justify-center items-center ">
            <span className="absolute left-2 top-2 "><MdSearch size="2rem"/></span>
            <form onSubmit={onSubmit}>
                <input type="text"
                       value={text}
                       onChange={onChange}
                       placeholder="Please type a movie name"
                       className="w-64 h-12 py-4 pl-12 pr-4 bg-gray-100 rounded-xl outline-0"/>
                <button
                    type="submit"
                    className="bg-blue-300 rounded-md p-3 font-bold"
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default SearchBar

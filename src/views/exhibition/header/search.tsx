import React, { useRef} from "react";

import searchSVG from "../../../assets/image/search.svg";


const Search = () => { 
    const inputRef = useRef<HTMLInputElement | null>(null)

    return <div className="grid content-center w-5/6 md:w-1/2 h-24 mx-auto mt-10 mb-8">
        <div className="relative w-5/6 mx-auto">
            <input type="text" placeholder="Not yet realized" className="w-full h-12 pl-8 pr-12 sm:pr-16  rounded-2xl text-neutral-700 font-semibold" ref={ inputRef} />
            <img src={searchSVG} alt="search" className="absolute top-3 sm:top-1 right-5 w-6 sm:w-10 aspect-square cursor-pointer"/>
        </div>
    </div>
}

export default Search;
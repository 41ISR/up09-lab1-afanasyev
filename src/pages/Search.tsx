import React, { useEffect, useState, useCallback, FormEvent } from "react";
import App from "../app/App";
import { OMDBApi } from "../shared/api";
import FilmCard from "../shared/FilmCard";
import { IMovieRDO } from "../entities/movie/movie.rdo";
import { debounce } from "../shared/tools/debounce";
import { useSearchParams } from "react-router";

const Search: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchText, setSearchText] = useState(searchParams.get('query') || "");
    const [searchResults, setSearchResults] = useState<IMovieRDO[]>([]);

    const handleSearchTextChange = (event: FormEvent<HTMLInputElement>) => {
        const value = (event.target as HTMLInputElement).value;
        setSearchText(value);
        setSearchParams({ query: value });
    };

    const debouncedSearch = useCallback(
        debounce((query: string) => {
            if (query) {
                OMDBApi.searchByText(query).then(setSearchResults);
            }
        }, 500),
        []
    );

    useEffect(() => {
        debouncedSearch(searchText);
    }, [searchText, debouncedSearch]);

    return (
        <App>
            <div className="search-page container">
                <input
                    className="search-input"
                    type="text"
                    value={searchText}
                    onInput={handleSearchTextChange}
                    placeholder="Введите название фильма"
                />
                <div className="films-wrapper">
                    {searchResults && searchResults.map((filmData) => (
                        <FilmCard key={filmData.imdbID} filmData={filmData} />
                    ))}
                </div>
            </div>
        </App>
    );
};

export default Search;

import React, { useEffect, useState, useCallback, FormEvent } from "react";
import App from "../app/App";
import { OMDBApi } from "../shared/api";
import FilmCard from "../shared/FilmCard";
import { IMovieRDO } from "../entities/movie/movie.rdo";
import { debounce } from "../shared/tools/debounce";
import { useSearchParams } from "react-router";
import Arrow from "../shared/svg/Arrow";

const Search: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState(searchParams.get("query") || "");
  const [searchResults, setSearchResults] = useState<IMovieRDO[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchTextChange = (event: FormEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    setSearchText(value);
    setSearchParams({ query: value });
  };

  const handlePageChange = (page: string) => {
    if (page === "next") {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const debouncedSearch = useCallback(
    debounce((query: string, page: number) => {
      if (query) {
        OMDBApi.searchByText(query, page).then(setSearchResults);
      }
    }, 500),
    []
  );

  useEffect(() => {
    debouncedSearch(searchText, currentPage);
  }, [searchText, currentPage, debouncedSearch]);

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
        {searchResults && searchResults.length > 0 && (
          <>
            <div className="films-wrapper">
              {searchResults.map((filmData) => (
                <FilmCard key={filmData.imdbID} filmData={filmData} />
              ))}
            </div>
            <div className="pagination">
              {currentPage > 1 && (
                <div
                  className="pagination-btn left"
                  onClick={() => handlePageChange("prev")}
                >
                  <Arrow></Arrow>
                </div>
              )}
              <div className="pagination-page">{currentPage}</div>
              <div
                className="pagination-btn right"
                onClick={() => handlePageChange("next")}
              >
                <Arrow></Arrow>
              </div>
            </div>
          </>
        )}
      </div>
    </App>
  );
};

export default Search;

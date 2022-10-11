import { SearchIcon } from "assets";
import { useDebounce, useInput } from "hooks";
import { MouseEventHandler, useEffect } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { ROUTE } from "routes/routes";
import {
  resetSortedFavorites,
  sortFavorites,
  updateSearchword,
  resetMoviesSearch,
  updateTitleParam,
  updateYearParam,
} from "store/feautures";
import { useAppDispatch } from "store/hooks/hooks";
import { Button, Container, StyledSearchInput } from "./styles";

interface IProps {
  toggleModal: (value: boolean) => void;
}

export const SearchInput = ({ toggleModal }: IProps) => {
  const { inputValue, onChange, setInputValue } = useInput();
  const debounceValue = useDebounce(inputValue, 1500);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isSearchPage = useMatch(ROUTE.SEARCH);
  const isNewPage = useMatch(ROUTE.NEW);
  const isFavoritesPage = useMatch(ROUTE.FAVORITES);

  const currentYear = new Date().getFullYear().toString();

  useEffect(() => {
    if (isFavoritesPage && debounceValue) {
      dispatch(sortFavorites(debounceValue));
      dispatch(updateSearchword(debounceValue));
    } else {
      if (isNewPage) dispatch(updateYearParam(currentYear));
      dispatch(updateTitleParam(debounceValue));
      debounceValue && navigate(ROUTE.SEARCH);
      if (debounceValue === "") {
        dispatch(resetMoviesSearch());
        dispatch(resetSortedFavorites());
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceValue]);

  useEffect(() => {
    !isSearchPage && setInputValue("");
    dispatch(resetMoviesSearch());
    dispatch(updateSearchword(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSearchPage]);

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    toggleModal(true);
  };

  return (
    <Container>
      <StyledSearchInput
        onChange={onChange}
        placeholder="Search..."
        value={inputValue}
      />
      {!isFavoritesPage && (
        <Button onClick={handleClick} type="button">
          <SearchIcon />
        </Button>
      )}
    </Container>
  );
};

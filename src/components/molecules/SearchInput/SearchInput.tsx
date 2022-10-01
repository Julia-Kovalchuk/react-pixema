import { SearchIcon } from "assets";
import { useDebounce, useInput } from "hooks";
import { useEffect } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { ROUTE } from "routes/routes";
import {
  resetMoviesSearch,
  updateTitleParam,
  updateYearParam,
} from "store/feautures/moviesSearchSlice";
import { useAppDispatch } from "store/hooks/hooks";
import { Button, Container, StyledSearchInput } from "./styles";

export const SearchInput = () => {
  const { inputValue, onChange, setInputValue } = useInput();
  const debounceValue = useDebounce(inputValue, 1500);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isSearchPage = useMatch(ROUTE.SEARCH);
  const isNewPage = useMatch(ROUTE.NEW);
  const currentYear = new Date().getFullYear().toString();

  useEffect(() => {
    if (isNewPage) dispatch(updateYearParam(currentYear));
    dispatch(updateTitleParam(debounceValue));
    debounceValue && navigate(ROUTE.SEARCH);
    if (debounceValue === "") {
      dispatch(resetMoviesSearch());
    }
  }, [debounceValue]);

  useEffect(() => {
    !isSearchPage && setInputValue("");
  }, [isSearchPage]);

  return (
    <Container>
      <StyledSearchInput
        onChange={onChange}
        placeholder="Search..."
        value={inputValue}
      />
      <Button>
        <SearchIcon />
      </Button>
    </Container>
  );
};

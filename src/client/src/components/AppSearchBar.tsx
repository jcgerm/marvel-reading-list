import React, { useState, FormEvent } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { MuiThemeProvider, Theme } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles/";

import { appBarStyles } from "../styles/styles";

const muiTheme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e62429"
    }
  }
});

type AppBarProps = {
  search: (searchTerm: string) => void;
};

export default function AppSearchBar(props: AppBarProps) {
  const classes = appBarStyles();
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.search(searchTerm);
  };

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={muiTheme}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Marvel Character Search
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <form onSubmit={handleSubmit}>
                <InputBase
                  placeholder="Search…"
                  onChange={handleChange}
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </form>
            </div>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </div>
  );
}

import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Autocomplete } from "@mui/material";

function SearchBar({data, input, setInput, selectedInput, setSelectedInput}) {

    return <Stack sx={{ width: 300 }}>
        <Autocomplete
            className="searchBar_container"
            value={selectedInput}
            onChange={(event, newValue) => {
                setSelectedInput(newValue);
            }}
            inputValue={input}
            onInputChange={(event, newInputValue) => {
              setInput(newInputValue);
            }}
            id="controllable-states-demo"
            options={data.map(item => item.name)}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Search for a plate..."/>
            }
        />
    </Stack>;
}

export default SearchBar;
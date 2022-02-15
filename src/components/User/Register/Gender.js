import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const style = {
  minWidth: 160,
  bgcolor: "white",
  borderTopRightRadius: 10,
  borderTopLeftRadius: 10,
};

function Gender() {
  const [gender, setGender] = React.useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div>
      <FormControl variant="filled" sx={style}>
        <InputLabel id="demo-simple-select-filled-label">
          Gender
        </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={gender}
          onChange={handleChange}
        >
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
          <MenuItem value={"Trans"}>Trans</MenuItem>
          <MenuItem value={"Other"}>Other</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Gender;

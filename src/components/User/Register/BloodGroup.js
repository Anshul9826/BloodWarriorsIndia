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

function BloodGroup() {
  const [bloodGroup, setbloodGroup] = React.useState("");

  const handleChange = (event) => {
    setbloodGroup(event.target.value);
  };

  return (
    <div>
      <FormControl variant="filled" sx={style}>
        <InputLabel id="demo-simple-select-filled-label">
          Blood Group
        </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={bloodGroup}
          onChange={handleChange}
        >
          <MenuItem value={"A+"}>A+</MenuItem>
          <MenuItem value={"A-"}>A-</MenuItem>
          <MenuItem value={"B+"}>B+</MenuItem>
          <MenuItem value={"B-"}>B-</MenuItem>
          <MenuItem value={"AB+"}>AB+</MenuItem>
          <MenuItem value={"AB-"}>AB-</MenuItem>
          <MenuItem value={"O+"}>O+</MenuItem>
          <MenuItem value={"O-"}>O-</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default BloodGroup;

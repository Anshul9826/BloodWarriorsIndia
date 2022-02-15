import React from "react";

const style = {
  padding: 15,
  bgcolor: "white",
  borderTopRightRadius: 10,
  borderTopLeftRadius: 10,
  border: "none",
  outlineWidth: 0,
};
function DOB() {
  const [dateOfBirth, setDateOfBirth] = React.useState("");

  const handleChange = (event) => {
    setDateOfBirth(event.target.value);
  };

  return (
    <div className="me-1">
      <input
        type="date"
        id="dob"
        name="dateOfBirth"
        value={dateOfBirth}
        onChange={handleChange}
        style={style}
      />
    </div>
  );
}

export default DOB;

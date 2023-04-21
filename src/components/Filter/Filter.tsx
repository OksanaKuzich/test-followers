import { filterBtn } from "./data";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

interface IProps {
  setBtnFilter: (btnFilter: string) => void;
  btnFilter: string;
}

export const Filter: React.FC<IProps> = ({ setBtnFilter, btnFilter }) => {
  const handleChange = (event: any): void => {
    setBtnFilter(event.target.value);
  };

  return (
    <Box
      sx={{
        width: 150,
        mt: 5,
        ml: "auto",
        mr: "auto",
      }}
    >
      <FormControl
        sx={{
          width: 150,
          borderRadius: "10px",
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        <InputLabel id="demo-simple-select-label" color="secondary">
          Filter
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={btnFilter}
          label="Filter"
          onChange={handleChange}
          color="secondary"
        >
          {filterBtn.map(btn => (
            <MenuItem
              value={btn.text}
              key={btn.text}
              sx={{
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              {btn.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

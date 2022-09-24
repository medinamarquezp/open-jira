import { FC, useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Status } from "interfaces/EntriesInterfaces";

interface Props {
  status: Status;
}

export const EntryStatusSelector: FC<Props> = ({ status }) => {
  const [value, setValue] = useState<Status>(status);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value as Status);
  };

  return (
    <FormControl sx={{ marginLeft: "20px" }}>
      <FormLabel id="status-label">Estado</FormLabel>
      <RadioGroup
        row
        aria-labelledby="status-label"
        name="status-label"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="todo" control={<Radio />} label="Todo" />
        <FormControlLabel value="doing" control={<Radio />} label="Doing" />
        <FormControlLabel value="done" control={<Radio />} label="Done" />
      </RadioGroup>
    </FormControl>
  );
};

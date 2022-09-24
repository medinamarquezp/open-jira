import { Dispatch, FC, SetStateAction } from "react";
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
  setStatus: Dispatch<SetStateAction<Status>>;
}

export const EntryStatusSelector: FC<Props> = ({ status, setStatus }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value as Status);
  };

  return (
    <FormControl sx={{ marginLeft: "20px" }}>
      <FormLabel id="status-label">Estado</FormLabel>
      <RadioGroup
        row
        aria-labelledby="status-label"
        name="status-label"
        value={status}
        onChange={handleChange}
      >
        <FormControlLabel value="todo" control={<Radio />} label="Todo" />
        <FormControlLabel value="doing" control={<Radio />} label="Doing" />
        <FormControlLabel value="done" control={<Radio />} label="Done" />
      </RadioGroup>
    </FormControl>
  );
};

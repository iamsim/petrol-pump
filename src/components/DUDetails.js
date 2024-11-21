import {
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const DUDetails = () => {
  const duList = [
    {
      id: 1,
      name: "DU 1",
    },
    {
      id: 2,
      name: "DU 2",
    },
  ];
  const [selectedDU, setSelectedDU] = useState("");

  const handleDUChange = (event) => {
    setSelectedDU(event.target.value);
  };

  const shiftList = [
    {
      id: 1,
      name: "Shift 1",
    },
    {
      id: 2,
      name: "Shift 2",
    },
    {
      id: 3,
      name: "Shift 3",
    },
  ];
  const [selectedShift, setSelectedShift] = useState("");

  const handleShiftChange = (event) => {
    setSelectedShift(event.target.value);
  };
  return (
    <>
      <Typography variant="h6" pl={2} pt={2}>
        DU Details
      </Typography>
      <Grid2
        container
        display={"flex"}
        flexDirection={"column"}
        spacing={2}
        p={2}
      >
        <Grid2>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date"
              defaultValue={dayjs("2022-04-17")}
              sx={{ width: "100%" }}
            />
          </LocalizationProvider>
        </Grid2>
        <Grid2>
          <FormControl fullWidth>
            <InputLabel id="du-label">DU</InputLabel>
            <Select
              labelId="du-label"
              id="du-select"
              value={selectedDU}
              label="DU"
              onChange={handleDUChange}
            >
              {duList.map((du, index) => {
                return (
                  <MenuItem value={du.id} key={index}>
                    {du.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid2>
        <Grid2>
          <FormControl fullWidth>
            <InputLabel id="shift-label">Shift</InputLabel>
            <Select
              labelId="shift-label"
              id="shift-select"
              value={selectedShift}
              label="Shift"
              onChange={handleShiftChange}
            >
              {shiftList.map((shift, index) => {
                return (
                  <MenuItem value={shift.id} key={index}>
                    {shift.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid2>
      </Grid2>
    </>
  );
};

export default DUDetails;

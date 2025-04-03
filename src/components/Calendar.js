import React from "react";
import { Grid, Button, Typography, Box } from "@mui/material";

const Calendar = ({ onDateSelect, selectedDates }) => {
  const dates = ["2025-04-01", "2025-04-02", "2025-04-03"];

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6" gutterBottom sx={{ color: "#1976d2" }}>
        Select Dates
      </Typography>
      <Grid container spacing={2}>
        {dates.map((date) => (
          <Grid item xs={12} sm={4} key={date}>
            <Button
              variant={selectedDates.includes(date) ? "contained" : "outlined"}
              color="primary"
              onClick={() => onDateSelect(date)}
              fullWidth
              sx={{
                py: 1.5,
                borderRadius: 2,
                textTransform: "none",
                fontSize: "1rem",
                "&:hover": { bgcolor: "#e3f2fd" },
              }}
            >
              {date}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Calendar;
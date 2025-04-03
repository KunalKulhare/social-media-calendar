import React, { useState } from "react"; 
import { Container, Typography, Box, Paper, Button } from "@mui/material";
import Calendar from "./components/Calendar";
import Overview from "./components/Overview";
import DateDetail from "./components/DateDetail";
import ExportButton from "./components/ExportButton";
import CategoryFilter from "./components/CategoryFilter";
import { fetchPosts } from "./api/fetchPosts";

function App() {
  const [selectedDates, setSelectedDates] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [viewDate, setViewDate] = useState(null);

  const handleGenerateCalendar = () => {
    if (selectedDates.length > 0) {
      fetchPosts(selectedDates)
        .then((data) => {
          setAllPosts(data);
          applyFilters(data);
        })
        .catch((err) => console.error("Error fetching posts:", err));
    } else {
      alert("Please select at least one date to generate the calendar.");
    }
  };

  const applyFilters = (data) => {
    let filteredPosts = [...data];
    console.log("Applying filters with categories:", selectedCategories); 
    console.log("All posts before filter:", filteredPosts);
    if (selectedCategories.length > 0) {
      filteredPosts = filteredPosts.filter((post) =>
        selectedCategories.includes(post.category)
      );
    }
    if (viewDate) {
      filteredPosts = filteredPosts.filter((post) => post.date === viewDate);
    }

    console.log("Filtered posts:", filteredPosts);
    setPosts(filteredPosts);
  };

  const handleDateSelect = (date) => {
    setSelectedDates((prev) =>
      prev.includes(date) ? prev.filter((d) => d !== date) : [...prev, date]
    );
  };

  const handleViewDate = (date) => {
    setViewDate(date);
    applyFilters(allPosts);
  };

  const handleCategorySelect = (categories) => {
    console.log("Selected categories:", categories);
    setSelectedCategories(categories);
    applyFilters(allPosts);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4, bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "#1976d2" }}
        >
          Social Media Content Calendar
        </Typography>
        <CategoryFilter onCategorySelect={handleCategorySelect} />
        <Calendar onDateSelect={handleDateSelect} selectedDates={selectedDates} />
        <Button
          variant="contained"
          color="primary"
          onClick={handleGenerateCalendar}
          sx={{ mt: 2, py: 1.5, px: 4, borderRadius: 2 }}
        >
          Generate Calendar
        </Button>
      </Paper>

      {selectedDates.length > 0 && (
        <Box>
          <Typography variant="h5" gutterBottom>
            View Posts for:
          </Typography>
          <Box sx={{ mb: 3 }}>
            {selectedDates.map((date) => (
              <Button
                key={date}
                variant={viewDate === date ? "contained" : "outlined"}
                onClick={() => handleViewDate(date)}
                sx={{ mr: 1, mb: 1 }}
              >
                {date}
              </Button>
            ))}
          </Box>

          {posts.length > 0 && viewDate ? (
            <>
              <Paper elevation={2} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
                <Typography variant="h4" gutterBottom sx={{ color: "#424242" }}>
                  Overview for {viewDate}
                </Typography>
                <Overview posts={posts} />
              </Paper>

              <Paper elevation={2} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
                <Typography variant="h4" gutterBottom sx={{ color: "#424242" }}>
                  Detailed Breakdown
                </Typography>
                <DateDetail posts={posts} />
              </Paper>

              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <ExportButton posts={posts} date={viewDate} allPosts={allPosts} />
              </Box>
            </>
          ) : (
            <Typography align="center" color="textSecondary">
              {viewDate
                ? "No posts found for selected filters."
                : "Select a date to view posts or generate the calendar."}
            </Typography>
          )}
        </Box>
      )}
    </Container>
  );
}

export default App;
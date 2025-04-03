import React from "react";
import { Button } from "@mui/material";
import * as XLSX from "xlsx";

const ExportButton = ({ posts, date, allPosts }) => {
  const handleExport = () => {
    const dateSummary = {};
    allPosts.forEach((post) => {
      if (!dateSummary[post.date]) {
        dateSummary[post.date] = {
          Date: post.date,
          TotalPosts: 0,
          Likes: 0,
          Views: 0,
          Reach: 0,
          Impressions: 0,
          Shares: 0,
          Comments: 0,
        };
      }
      dateSummary[post.date].TotalPosts += 1;
      dateSummary[post.date].Likes += post.likes;
      dateSummary[post.date].Views += post.views;
      dateSummary[post.date].Reach += post.reach;
      dateSummary[post.date].Impressions += post.impressions;
      dateSummary[post.date].Shares += post.shares;
      dateSummary[post.date].Comments += post.comments || 0;
    });
    const categorySummary = {};
    allPosts.forEach((post) => {
      categorySummary[post.category] = (categorySummary[post.category] || 0) + 1;
    });
    const overviewData = [
      ...Object.values(dateSummary),
      { Date: "Category Breakdown", TotalPosts: "" },
      ...Object.keys(categorySummary).map((cat) => ({
        Date: cat,
        TotalPosts: categorySummary[cat],
      })),
    ];
    const workbook = XLSX.utils.book_new();
    const overviewSheet = XLSX.utils.json_to_sheet(overviewData);
    const dateSheet = XLSX.utils.json_to_sheet(posts);
    XLSX.utils.book_append_sheet(workbook, overviewSheet, "Overview");
    XLSX.utils.book_append_sheet(workbook, dateSheet, `Posts_${date}`);
    XLSX.writeFile(workbook, `SocialMedia_${date}.xlsx`);
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={handleExport}
      sx={{
        py: 1.5,
        px: 4,
        borderRadius: 2,
        fontSize: "1rem",
        "&:hover": { bgcolor: "#d81b60" },
      }}
    >
      Export to Excel
    </Button>
  );
};

export default ExportButton;
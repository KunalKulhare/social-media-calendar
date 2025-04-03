import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const Overview = ({ posts }) => {
  const summary = posts.reduce(
    (acc, post) => {
      acc.likes += post.likes;
      acc.views += post.views;
      acc.reach += post.reach;
      acc.impressions += post.impressions;
      acc.shares += post.shares;
      acc.comments += post.comments || 0;
      acc.categories[post.category] = (acc.categories[post.category] || 0) + 1;
      return acc;
    },
    {
      likes: 0,
      views: 0,
      reach: 0,
      impressions: 0,
      shares: 0,
      comments: 0,
      categories: {},
    }
  );

  return (
    <Paper elevation={1} sx={{ overflowX: "auto" }}>
      <Table>
        <TableHead>
          <TableRow sx={{ bgcolor: "#1976d2" }}>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Metric</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow hover>
            <TableCell>Total Likes</TableCell>
            <TableCell>{summary.likes}</TableCell>
          </TableRow>
          <TableRow hover>
            <TableCell>Total Views</TableCell>
            <TableCell>{summary.views}</TableCell>
          </TableRow>
          <TableRow hover>
            <TableCell>Total Reach</TableCell>
            <TableCell>{summary.reach}</TableCell>
          </TableRow>
          <TableRow hover>
            <TableCell>Total Impressions</TableCell>
            <TableCell>{summary.impressions}</TableCell>
          </TableRow>
          <TableRow hover>
            <TableCell>Total Shares</TableCell>
            <TableCell>{summary.shares}</TableCell>
          </TableRow>
          <TableRow hover>
            <TableCell>Total Comments</TableCell>
            <TableCell>{summary.comments}</TableCell>
          </TableRow>
          {Object.keys(summary.categories).map((category) => (
            <TableRow hover key={category}>
              <TableCell>{category}</TableCell>
              <TableCell>{summary.categories[category]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Overview;
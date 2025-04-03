import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const DateDetail = ({ posts }) => {
  return (
    <Paper elevation={1} sx={{ overflowX: "auto" }}>
      <Table>
        <TableHead>
          <TableRow sx={{ bgcolor: "#1976d2" }}>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Username</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Profile Link</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Post Link</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Post Type</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Likes</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Followers</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Date of Post</TableCell>
            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Comments</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post, index) => (
            <TableRow hover key={index}>
              <TableCell>{post.username}</TableCell>
              <TableCell>
                <a
                  href={post.profileLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#1976d2", textDecoration: "none" }}
                >
                  Link
                </a>
              </TableCell>
              <TableCell>
                <a
                  href={post.postLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#1976d2", textDecoration: "none" }}
                >
                  Link
                </a>
              </TableCell>
              <TableCell>{post.postType}</TableCell>
              <TableCell>{post.likes}</TableCell>
              <TableCell>{post.followers}</TableCell>
              <TableCell>{post.date}</TableCell>
              <TableCell>{post.comments}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default DateDetail;
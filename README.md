# Social Media Content Calendar

A web-based tool built with React.js to dynamically schedule social media posts based on user-selected dates, with category filtering and Excel export functionality.

## Project Overview
- **Purpose**: Helps users plan social media content by assigning posts to dates, prioritizing high-follower pages, and providing performance summaries.
- **Tech Stack**: React.js, Material-UI, SheetJS (xlsx).

## Project Flow
1. **Start**: Open the app—see a clean UI with "Social Media Content Calendar" title.
2. **Select Dates**: Use the `Calendar Grid` to pick dates (e.g., 2025-04-01, 2025-04-02).
3. **Filter Categories (Optional)**: Choose categories (e.g., "Meme Pages", "Bollywood") from the `Category Filter` dropdown.
4. **Generate Calendar**: Click "Generate Calendar" to fetch and distribute posts across selected dates.
5. **View Posts**: Click a date button to see:
   - **Overview Table**: Total likes, views, comments, shares, reach, impressions, and category breakdown.
   - **Detailed Breakdown**: List of posts with username, links, type, likes, followers, date, and comments.
6. **Export**: Click "Export to Excel" to download:
   - "Overview" sheet: Date-wise summary and category counts.
   - "Posts_<date>" sheet: Detailed post data for the selected date.

## Key Features
- **Dynamic Scheduling**: Posts assigned to user-selected dates with balanced category distribution.
- **Follower Priority**: High-follower pages get preference.
- **Category Filter**: Filter posts by category.
- **Excel Export**: Detailed reports for analysis.
- **Performance Metrics**: Tracks likes, views, comments, etc.

## File Structure
- `dummyData.js`: Dummy post data.
- `fetchPosts.js`: Distributes posts to dates.
- `App.js`: Main component integrating all features.
- `Calendar.js`: Date selection UI.
- `CategoryFilter.js`: Category filtering dropdown.
- `Overview.js`: Summary of post metrics.
- `DateDetail.js`: Detailed post list.
- `ExportButton.js`: Excel export functionality.
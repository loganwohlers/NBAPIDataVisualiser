***NBA API***

![Comp](src/assets/playercomparison.gif)

View all box scores and player averages for recent NBA seasons in one place-- built by scraping seasonal data from basketball-reference.com.   Users can see graphical representations of players latest game trends and comparisons to other players and league averages.  The backend database for this project is in the process of being converted into an API for public use.  Backend is built in Rails using ActiveRecord ORM / PostgreSQL database-- frontend is built with React and Redux as well as the Victory library by Formidable to create dynamic graphs.


***How It Works***

Data was scraped from basketball-reference.com using the Nokogiri Ruby gem.  To demonstrate proof of concept the data scraped was limited to traditional counting stats(no advanced stats), season player averages, and season schedules/box scores.  For a more detailed breakdown of idea behind this schema and it's implementation see my blog post HERE.  A single fully seeded season contains ~40k rows in the database and seeding multiple seasons at once can easily be done.

As data was scraped it is seeded into the database according to the following ERD diagram:


![ERD](src/assets/NBAPIERD2.png)


***Some important things to note here:***

-Players don't belong to a team-- rather they have many player_seasons each of which belongs to a team_season

-If a player is traded mid season to a different team and additional player_season is created-- thus one player can have multiple player_seasons throughout a season

-A game belongs to a "home_team" and an "away_team"- both of these are just team_seasons aliased under a different name

-For readability many of the columns in the player_season and game_line tables were left out.  These both contain roughly 20 additional columns of actual stats- with player_seasons focusing on various season averages and game_lines focusing on individual game statistics


***Brief summary of the seeding process:***


-The current 30 NBA teams (RIP Sonics) were hard-coded and seeded into the database

-A row for the current Season was added to the seasons table and corresponding TeamSeasons were created

-basketball-reference player averages table was scraped and  used to create Players and their PlayerSeasons respectively
	
-basketball-reference season schedule was scraped and every game was created along with it's associations to the home/away Team Seasons
	
-Every individual game URL (1230 total) was dynamically generated and box scores from both teams were scraped to create all the GameLines for the season


***Front End***
Built with React and Redux and uitilizes Redux Thunk to make requests to backend.  Serialized data is sent back and used as data to fill tables and generate Victory graphs.  A season's data is only loaded and saved the Redux store when it is clicked in the main menu and does not need to reload unless the user selects a different season.


***Technologies Used***

Ruby on Rails / Active Record / PostgreSQL

React 

Redux

Formidable's Victory Library


***CREATED BY***

Logan Wohlers

Thanks!



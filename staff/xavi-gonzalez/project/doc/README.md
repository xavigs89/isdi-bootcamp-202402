# Meet App

## Intro

The Meetup App is a platform that connects people with common interests and enables them to create, join, and participate in local events. From tech talks to outdoor activities, our application helps you discover events you're interested in and connect with like-minded individuals in your community.

![](https://giphy.com/gifs/party-friends-dobby-woody-1kTKRsMWY44MAlV2QW)

## Functional Description

### Use Cases

- event creation (form with title, location, date, time, description, and picture)
- edit and remove event
- allow users to join events, view attendee list
- search for events (by location, date and category)
- choose a place (in map)
- by clicking on the user, see its events and reviews of those events created.
- user profile (profile picture, info, contact)
- rating of events once the event is over (from 1 to 5 stars). Possibility of comments.

v0.1
- chat with event owner
- rating users (stars from 1 to 5)
- share events on social networks????

### UI Design

[Figma](https://www.figma.com/file/cw8K38zpv36iQkjQA5fVXC/App?type=design&node-id=0-1&mode=design&t=RHFOp1rBhBeRDwEs-0)

## Technical Description

### Modules

- api (server logic)
- app (client interface)
- com (common utils, tools, ...)

### Technologies

- React
- TypeScript
- Express
- Node
- Tailwind
- Mongo
- ...

### Data Model

User
- id (required)
- name (string, required)
- birthdate (date, required)
- email (string, required)
- username (string, required)
- password (string, required)
- avatar (string, optional)

Events
- id (required)
- title (string, required)
- location (required)
- date (date, required)
- time (date, required)
- description (string, required)
- picture (string, required)

Event Reviews
- id (required)
- user (User.id, required)
- rate (number, required, num: 1|2|3|4|5)
- comment (string, optional)
- date (date, required)
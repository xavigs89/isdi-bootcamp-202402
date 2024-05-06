# JiveHub

## Intro

JiveHub is a platform that connects people with common interests and enables them to create, join, and participate in local events.

![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnlucHU2ZDJweDZpM2RnN21jMmE4YWgxbGp1OGt0cnJqYW9uc25qdSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/5L57f5fI3f2716NaJ3/giphy.gif)

## Functional Description

### Use Cases

- create event
- edit event
- remove event
- join event
- view attendee list
- search for events (by location, date)
- see user profile (see its events and reviews of those events created.)
- edit profile (profile picture, about me, contact, see created events, see joined events)
- rate event (once it's over, from 1 to 5 stars, optional comment)


v0.1
- chat with event owner and people that joined that event
- change password, email


### UI Design

[Figma](https://www.figma.com/file/XTR8uUQ17vydGpiclzZRFf/Clase?type=design&node-id=83-106&mode=design&t=VdjzqsMXVZJ0SaqV-0)

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
- email (string, required)
- password (string, required)
- avatar (string, optional)
- about (string, optional)

Meeting
- id (required)
- title (string, required)
- address (string, required)
- location ([numbers], required)
- date (date, required)
- time (string, required)
- description (string, required)
- picture (string, required)
- attendees ([User.id])

Review
- id (required)
- author (User.id, required)
- rate (number, required, enum: 1|2|3|4|5)
- comment (string, optional)
- date (Date, required)

curl -X PUT -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjMzOGFkN2NiMzYzYmEzYjE0ZGUxMzkiLCJpYXQiOjE3MTQ2NTk2NTAsImV4cCI6MTcxNDY5NTY1MH0.qk6XxbD0BlUvczu_TvpMuVtTFol-oiuMi2Ai9gzY7DM" -H "Content-Type: application/json" -d '{
  "userId": "'$userId'",
  "title": "'$title'",
  "address": "'$address'",
  "location": "'$location'",
  "date": "'$date'",
  "description": "'$description'",
  "image": "'$image'"
}'
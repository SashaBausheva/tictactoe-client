curl "https://tic-tac-toe-api-production.herokuapp.com/games" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json"

echo

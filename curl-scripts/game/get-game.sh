echo ${ID}
echo ${TOKEN}

curl "https://tic-tac-toe-api-production.herokuapp.com/games/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json"

echo

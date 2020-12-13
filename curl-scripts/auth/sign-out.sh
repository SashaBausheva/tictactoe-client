curl "https://tic-tac-toe-api-production.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}" \

echo

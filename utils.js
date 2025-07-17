function isValidInput(input) {
  return /^[0-9+\-*/.() ]*$/.test(input);
}
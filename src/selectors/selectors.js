export function authorsFormattedForDropdown (authors) {
  return authors.map(author => {
    return {
      value: author.id,
      text: author.firstname + ' ' + author.lastname,
    };
  });
}

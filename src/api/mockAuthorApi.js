import delay from './delay';

// This file works as a web API for quick development.
const authors = [
  {
    id: 'reuben-ellis',
    firtName: 'Reuben',
    lastName: 'Ellis',
  },
  {
    id: 'jessica-ellis',
    firstName: 'Jessica',
    lastName: 'Ellis',
  },
  {
    id: 'alex-ellis',
    firstName: 'Alex',
    lastName: 'Ellis',
  },
];

// This action is typically performed on a server in a real API.
const generateId = (author) => {
  return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};

class AuthorApi {
  static getAllAuthors () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], authors));
      }, delay);
    });
  }

  static saveAuthor (author) {
    author = Object.assign({}, author);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const minAuthorNameLength = 3;
        if (author.firstName.length < minAuthorNameLength) {
          Error(`First Name must be at least ${minAuthorNameLength} characters.`);
        }

        if (author.lastName.length < minAuthorNameLength) {
          Error(`Last Name must be at least ${minAuthorNameLength} characters.`);
        }

        if (author.id) {
          const existingAuthorIndex = authors.findIndex(a => a.id === author.id);
          authors.splice(existingAuthorIndex, 1, author);
        } else {
          // The server will need to generate Ids for new authors in the app.
          author.id = generateId(author);
          authors.push(author);
        }

        resolve(author);
      }, delay);
    });
  }

  static deleteAuthor (authorId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfAuthorToDelete = authors.findIndex(author => {
          return author.authorId === authorId;
        });
        authors.splice(indexOfAuthorToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default AuthorApi;

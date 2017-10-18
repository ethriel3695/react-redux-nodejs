import expect from 'expect';
import { authorsFormattedForDropdown } from './selectors';

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      const authors = [
        {id: 'reuben-ellis', firstName: 'Reuben', lastName: 'Ellis'},
        {id: 'jessica-ellis', firstName: 'Jessica', lastName: 'Ellis'},
        {id: 'alex-ellis', firstName: 'Alex', lastName: 'Ellis'},
      ];

      const expected = [
        {value: 'reuben-ellis', text: 'Reuben Ellis'},
        {value: 'jessica-ellis', text: 'Jessica Ellis'},
        {value: 'alex-ellis', text: 'Alex Ellis'},
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});

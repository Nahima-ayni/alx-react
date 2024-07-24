import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe ('Utils functions', () => {
    test('getFullYear returns the correct year', () => {
        const currentYear = new Date().getFullYear();
        expect(getFullYear()).toBe(currentYear);
    })
    test('getFooterCopy returns correct string when argument is true', () => {
        expect(getFooterCopy(true)).toBe('Holberton School');  // Check if true returns 'Holberton School'
    });
    
    test('getFooterCopy returns correct string when argument is false', () => {
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');  // Check if false returns 'Holberton School main dashboard'
    });
    
    test('getLatestNotification returns the correct string', () => {
        expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');  // Check if the string matches
    });

});

import { emailValidator } from './dummyEmailValidator';

describe('emailValidator', () => {
  it('should return true for valid email with single @ and single dot', () => {
    console.log('it should return true for valid email with single @ and single dot');
    expect(emailValidator('test@gmail.com')).toBeTruthy();
  });

  it('should return true for valid email with two dots after @', () => {
    console.log('it should return true for valid email with two dots after @');
    expect(emailValidator('test@yah.co.in')).toBeTruthy();
  });

  it('should return false for email with dot before @', () => {
    console.log('it should return false for email with dot before @');
    expect(emailValidator('test.lastname@gmail.com')).toBeFalsy();
  });

  it('should return false for invalid email with continuous two dots', () => {
    console.log('it should return false for invalid email with continuos two dots');
    expect(emailValidator('test@gmail..com')).toBeFalsy();
  });

  it('should return false for invalid email without @', () => {
    console.log('it should return false for invalid email without @');
    expect(emailValidator('test.com')).toBeFalsy();
  });

  it('should return false for invalid email without dot', () => {
    console.log('it should return false for invalid email without dot');
    expect(emailValidator('test@gmailc')).toBeFalsy();
  });

  it('should return false for invalid email with multiple @', () => {
    console.log('it should return false for invalid email with multiple @');
    expect(emailValidator('test@gmai@gmail.com')).toBeFalsy();
  });

  it('should return false for invalid email with white space', () => {
    console.log('it should return false for invalid email with white space');
    expect(emailValidator('test@gmai.com test')).toBeFalsy();
  });

  it('should return false for invalid email containing just white space or undefined', () => {
    console.log('it should return false for invalid email containing just white space or undefined');
    expect(emailValidator('')).toBeFalsy();
    expect(emailValidator(' ')).toBeFalsy();
    expect(emailValidator()).toBeFalsy();
  });
});
import { UserFullnamePipe } from './user-fullname.pipe';

describe('UserFullnamePipe', () => {
  it('create an instance', () => {
    const pipe = new UserFullnamePipe();
    expect(pipe).toBeTruthy();
  });
});

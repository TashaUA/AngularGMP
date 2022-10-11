import { OrderByDatePipe } from './order-by.pipe';

describe('OrderByDatePipe', () => {
  const pipe = new OrderByDatePipe();
  const courses = [{creationDate: '12/12/2022'}, {creationDate: '12/14/2022'}, {creationDate: '12/10/2022'}];
  const newCourses = [{creationDate: '12/14/2022'}, {creationDate: '12/12/2022'}, {creationDate: '12/10/2022'}];

  it('create an instance', () => {
    const pipe = new OrderByDatePipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms course order by date', () => {
    expect(pipe.transform(courses)).toEqual(newCourses);
  });

});

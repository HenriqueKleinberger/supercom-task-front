export type Card = {
  id: number;
  title: string;
  description: string;
  deadline: Date;
  createdAt?: Date;
  status: string;
};

type Course = {
  name: string;
};

export type PersonCourse = {
  courseId: number;
  hours: number;
  referenceDate: date;
  courseName: string;
};

export type GenericApiResponse<T> = {
  totalData: number;
  rows: T[];
};

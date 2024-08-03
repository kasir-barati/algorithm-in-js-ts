import { request } from 'node:http';

type LiteracyLevel =
  | 'Functional Literacy'
  | 'Basic Literacy'
  | 'Proficient Literacy'
  | 'Advanced Literacy';
type Subscription =
  | 'science'
  | 'math'
  | 'physics'
  | 'psychology'
  | 'programming'
  | 'high school material';

// You can assume that User is your entity defined for your ODM/ORM to create a document/table for it in your DBMS.
class User {
  constructor(
    public name: string,
    public age: number,
    public literacyLevel: LiteracyLevel,
    // Assume we are checking in our backend and won't allow anybody to subscribe to everything they want based on their age and literacyLevel.
    public subscribe: Subscription[],
  ) {}
}

export class UserBuilder {
  private user: User;

  constructor() {
    this.user = new User('Kasir', 29, 'Advanced Literacy', [
      'physics',
      'math',
      'programming',
    ]);
  }

  setName(name: string) {
    this.user.name = name;
    return this;
  }
  setAge(age: number) {
    this.user.age = age;
    return this;
  }
  setLiteracyLevel(literacyLevel: LiteracyLevel) {
    this.user.literacyLevel = literacyLevel;
    return this;
  }
  setSubscribe(subscribe: Subscription[]) {
    if (
      this.user.age < 17 &&
      this.user.literacyLevel !== 'Advanced Literacy' &&
      subscribe.includes('physics')
    ) {
      this.user.subscribe = subscribe.filter((s) => s !== 'physics');
    } else {
      this.user.subscribe = subscribe;
    }

    return this;
  }

  build() {
    return new Promise((resolve, reject) => {
      request(
        {
          host: 'example.com',
          port: 80,
          username: 'username',
          password: 'fake',
          path: '/api/v2/users',
          method: 'PUT',
        },
        ({ statusCode, read }) => {
          if (statusCode === 201) {
            return resolve(read());
          }
          reject(read());
        },
      );
    });
  }
}

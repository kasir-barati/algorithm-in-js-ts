# Factory function

- Create new objects with factory function.
- Useful for:
  - Testing purposes.
  - Creating relatively complex and configurable objects.

```js
const createUser = ({ firstName, lastName, email }) => ({
  firstName,
  lastName,
  email,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
});

const user1 = createUser({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@doe.com',
});

const user2 = createUser({
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane@doe.com',
});
```

## Pros & Cons

<table>
  <thead>
    <tr>
      <th>Pros</th>
      <th>Cons</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        A factory function can easily return a custom object depending on the current environment, or user-specific configuration.
      </td>
    </tr>
    <tr>
      <td>
        Memory efficiency: creating new instances might cost us less memory consumption.
      </td>
    </tr>
  </tbody>
</table>

### Memory considerations

- **Shared Prototype Properties**: methods defined inside the class won't need to be recreated for each instance.
- The memory footprint may depend on the engine you run the code. Different context and optimizations might change that.

You can load the heap snapshot in your google chrome and see the difference.

```js
class Test {}

const test = new Test();

class Class {
  method0() {}
  method1() {}
  method2() {}
  method3() {}
  method4() {}
  method5() {}
  method6() {}
  method7() {}
  method8() {}
  method9() {}
}
test.Class = Class;
for (let i = 0; i < 10; i++) {
  test['classObj' + i] = new Class();
}

function func0() {}
function func1() {}
function func2() {}
function func3() {}
function func4() {}
function func5() {}
function func6() {}
function func7() {}
function func8() {}
function func9() {}
function factoryFunc() {
  return {
    method0: func0,
    method1: func1,
    method2: func2,
    method3: func3,
    method4: func4,
    method5: func5,
    method6: func6,
    method7: func7,
    method8: func8,
    method9: func9,
  };
}
test.factoryFunc = factoryFunc;
for (let i = 0; i < 10; i++) {
  test['funcObj' + i] = factoryFunc();
}
```

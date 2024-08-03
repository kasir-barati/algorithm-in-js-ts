# Factory Method

- AKA Virtual Constructor.
- An interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.
- Have a common interface that subclasses implements and superclass enforces subclasses to implement it. Though ech subclass implement it tailored to its needs while complying with the general rules.
- [Client](../README.md#glossaryClient) does not care about the implementation details. All it knows is that which properties/methods/getters/setters are available.
- [Learn more](https://refactoring.guru/design-patterns/factory-method`).

> [!TIP]
>
> If there are too many [product](../README.md#glossaryProduct) types and it doesn’t make sense to create subclasses for all of them, you can reuse the control parameter from the base class in subclasses.
>
> Look at [this example](./logistic-example.ts).

## Why do we need it?

| Reason                                                                           | Example                                                                                                                                                              |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| To not violate open-close principle of SOLID(Ease of extension).                 | `createNotification` or `createTransport` should not change because we have new means of transportation or sending notification                                      |
| To not violate single responsibility principle of SOLID(Separation of concerns). | `createNotification` or `createTransport` should only create a new transport/notification and not extra code that are not directly related to single responsibility. |

<table>
  <thead>
    <tr>
      <th colspan="2" rowspan="2"></th>
      <th colspan="3">Applicability</th>
    </tr>
    <tr>
      <th>Scenario</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        When you don't know beforehand the exact types and
        dependencies of the objects your code should work with.
      </td>
      <td>
        <a href="./notification-method.ts">
          A simple notification system
        </a>
        where you can send different types of notifications
        (like email, SMS, and push notifications).
      </td>
    </tr>
    <tr>
      <td>
        Enable users of your lib/framework with a way to extend its
        internal components.
      </td>
      <td>
        You're using a
        <a href="./button-example.tsx">
          UI framework
        </a>
        and need to have rounded corner button.
      </td>
    </tr>
    <tr>
      <td>
        Improve resource usage by reusing existing objects instead of
        rebuilding them each time. Useful when we have large,
        resource-intensive objects such as DB connections, FS, and
        network resources.
      </td>
      <td>
        You need to create
        <a href="./db-connection-example.ts">
          a storage to keep track of all of the
          opened connections to the database
        </a>.
        When someone requests a connection, the program should
        look for a free ones inside that pool. Then return it
        to the client code. If there are no free objects, the
        program should create a new one (and add it to the pool).
      </td>
    </tr>
  </tbody>
</table>

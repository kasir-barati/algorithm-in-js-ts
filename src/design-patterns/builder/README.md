# Builder

- Construct **complex** objects step by step.
- Produce different types and representations of an object using the same construction code.

## Problem that this design pattern solves

For constructing a complex object you've got three options:

1. A class with a fat constructor. Bad idea.
2. Scattered all over the [client](../README.md#glossaryClient) code. Nightmare.
3. Breed new subclasses for every possible configuration of an object. This makes the program too complex.

## Solution

- Abstract the construction from the original class into another class with tons of `builders`.
- No access to the object before the build has been completed.
- No need to call all `builders`, just call the ones that will result the wanted object.

## Director

- Optional.
- Will hide the construction details.
- Use it to not repeat yourself all the time.
- Useful for building same object with a specific order.

<table>
  <thead>
    <tr>
      <th colspan="3">
        <h2>Applicability</h2>
      </th>
    </tr>
    <tr>
      <th>Scenario</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Get rid of a "telescoping constructor".</td>
      <td>
        <ul>
          <li>
            Instead of multiple overwritten constructors with params
            for a class which instantiate new
            <a href="./report-example.ts">report</a>
            objects, you can use a builder class to abstract class
            construction.
          </li>
          <li>
            A more practical example is the
            <a
              href="https://github.com/kasir-barati/you-say/blob/main/libs/backend/common/src/lib/helpers/create-swagger-configuration.helper.ts#L18-L21"
            >
              <code>DocumentBuilder</code>
            </a>
            exported from <code>@nestjs/swagger</code>.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        Create different representations of some product where they
        differ only in small details.
      </td>
      <td>
        Like a shop for
        <a href="./computer-shop-example.ts">
          constructing a computer
        </a>
        with different configurations: such as a gaming PC and an
        office PC.
      </td>
    </tr>
    <tr>
      <td>Construct Composite trees or other complex objects.</td>
      <td>
        Construct a hierarchical
        <a href="./menu-example.ts">menu</a>
        structure for a web application.
      </td>
    </tr>
    <tr>
      <td>Abstract or hide your object creation complexities.</td>
      <td>
        Send
        <a href="./resorce-creation-example.ts">HTTP requests</a>
        to different APIs in your tests suits in order to create a new
        resource.
      </td>
    </tr>
  </tbody>
</table>

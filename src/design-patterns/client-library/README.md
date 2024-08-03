# Client library

- AKA API Client.
- Facilitate inter-service communication and client integration.
- A backend provides a client library that frontend can use to interact with its API.

## How it can help us

<table>
  <thead>
    <tr>
      <th>Benefits</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Abstracts the details of the API.</td>
      <td>There are many different auth flows.</td>
    </tr>
    <tr>
      <td>Provides a simpler interface.</td>
      <td>
        Like when you wanna send a
        <a
          href="https://www.linkedin.com/posts/kasir-barati_computerabrscience-softwareabrdevelopment-ugcPost-7212825200982196224-Pf1Y?utm_source=share&utm_medium=member_desktop"
        >
          PATCH http
        </a>
        request to update a resource.
      </td>
    </tr>
    <tr>
      <td>Provides a more consistent interface.</td>
      <td>
        Standardized method naming convention and parameter structure.
      </td>
    </tr>
    <tr>
      <td>Central error handling.</td>
      <td>
        Reporting errors in a predictable manner. And any necessary
        retry logic or error recovery strategies are uniformly
        applied.
      </td>
    </tr>
  </tbody>
</table>

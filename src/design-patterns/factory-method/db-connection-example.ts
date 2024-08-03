// Product interface
interface Connection {
  id: number;

  retry(): void;
  close(): Promise<void>;
  query<T>(q: string): Promise<T>;
}

// Concrete product
class DBConnection implements Connection {
  id: number;
  static nextId = 1;

  constructor() {
    this.id = DBConnection.nextId++;
  }

  retry(): void {
    console.log('Retrying...');
  }
  async close(): Promise<void> {
    await console.log('Connection closed!');
  }
  async query<T>(q: string): Promise<T> {
    console.log(q);
    return {} as T;
  }
}

// Creator
abstract class StorageFactory {
  abstract connections: Connection[];
  abstract createConnection(): Connection;

  async clear() {
    console.log('Clearing all open connection...');

    for (const connection of this.connections) {
      await connection.close();
    }

    this.connections = [];
  }

  releaseConnection(connection: Connection): void {
    this.connections.push(connection);
  }
}

// Concrete creator
class DBStorageFactory extends StorageFactory {
  connections: Connection[];
  createConnection(): Connection {
    if (this.connections.length > 0) {
      return this.connections.pop() as Connection;
    }

    return new DBConnection();
  }
}

const db = new DBStorageFactory();
const connection = db.createConnection();
connection.query('SELECT * FROM fleetManagers;');

// When done with the connection, release it back to the pool
db.releaseConnection(connection);

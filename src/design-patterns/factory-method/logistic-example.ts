// #region Product interface
interface Logistic {
  deliver(parcel: { name: string; content: string }): string;
}
// #endregion

// #region Concrete product
class SeaLogistic implements Logistic {
  deliver(parcel: { name: string; content: string }): string {
    return `Container: ${parcel.content}, recipient: ${parcel.name}`;
  }
}
class RoadLogistic implements Logistic {
  public weight?: number;

  deliver(parcel: { name: string; content: string }): string {
    return `Box: ${parcel.content}, recipient: ${parcel.name}`;
  }
}
class TrackLogistic implements Logistic {
  deliver(parcel: { name: string; content: string }): string {
    return `Container ${parcel.content}, recipient: ${parcel.name}.`;
  }
}
// #endregion

// #region Creator
abstract class Transport {
  // Factory Method.
  // The return type of this method matches the product interface.
  // abstract to force all subclasses to implement their own versions of the method.
  // Product creation is not the primary responsibility of the creator.
  // Usually, the creator class already has some core business logic related to products.
  abstract createTransport(logisticMean?: unknown): Logistic;
  shipPackage(): void {
    console.log('Logging something in an audit log database...');
    console.log(
      'Creating some records for staffs to know that this package is on its way...',
    );
  }
}
class GroundTransport extends Transport {
  private parcel: RoadLogistic;

  override createTransport(
    logisticMean: 'truck' | 'track',
  ): Logistic {
    this.parcel =
      logisticMean === 'truck'
        ? new RoadLogistic()
        : new TrackLogistic();

    return this.parcel;
  }

  setWeight(weight: number) {
    if (this.parcel) {
      this.parcel.weight = Math.abs(Math.ceil(weight));
      return;
    }

    throw 'First create a transport!';
  }

  shipPackage(): void {
    super.shipPackage();

    const packagedParcel = this.parcel.deliver({
      content: 'Piano',
      name: 'Institute of music of Bremen.',
    });

    console.log(
      'shipping: ' +
        packagedParcel +
        '. Approximately ' +
        this.parcel.weight +
        'KG.',
    );
  }
}
class ShipTransport extends Transport {
  override createTransport(): Logistic {
    return new SeaLogistic();
  }
  shipPackage(): void {
    const logistic = this.createTransport();
    super.shipPackage();

    const packagedParcel = logistic.deliver({
      content: 'Fish',
      name: 'DeepSeaCatchers',
    });

    console.log('Shipping: ' + packagedParcel);
  }
}
// #endregion

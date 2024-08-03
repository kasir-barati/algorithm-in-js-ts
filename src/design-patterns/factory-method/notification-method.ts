// A common interface for notifications.
interface MyNotification {
  send(message: string): void;
}

// #region Implement specific notification types.
class EmailNotification implements MyNotification {
  send(message: string): void {
    console.log(`Sending email with message: ${message}`);
  }
}
class SMSNotification implements MyNotification {
  send(message: string): void {
    console.log(`Sending SMS with message: ${message}`);
  }
}
class PushNotification implements MyNotification {
  send(message: string): void {
    console.log(`Sending push notification with message: ${message}`);
  }
}
// #endregion

// An abstract creator class with the factory method
abstract class NotificationFactory {
  abstract createNotification(): MyNotification;
  sendNotification(message: string): void {
    const notification = this.createNotification();
    notification.send(message);
  }
}

// #region Implement specific creators for each notification type
class EmailNotificationFactory extends NotificationFactory {
  override createNotification(): MyNotification {
    return new EmailNotification();
  }
}
class SMSNotificationFactory extends NotificationFactory {
  override createNotification(): MyNotification {
    return new SMSNotification();
  }
}
class PushNotificationFactory extends NotificationFactory {
  override createNotification(): MyNotification {
    return new PushNotification();
  }
}
// #endregion

// Use the factory to create and send notifications
const emailFactory = new EmailNotificationFactory();
const smsFactory = new SMSNotificationFactory();
const pushFactory = new PushNotificationFactory();
const notifications: NotificationFactory[] = [
  emailFactory,
  smsFactory,
  pushFactory,
];

notifications.forEach((notification) =>
  notification.sendNotification('Hello, here is your notification!'),
);

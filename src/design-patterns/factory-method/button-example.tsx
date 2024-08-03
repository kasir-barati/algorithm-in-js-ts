import { Button, UIButtons } from 'ui-framework';

// Product interface = Button
// Concrete product = RoundButton
class RoundButton extends Button {
  render() {
    return <Button class="rounded"></Button>;
  }
}

// Creator = UIButtons
// Concrete creator = UIWithRoundButtons
export class UIWithRoundButtons extends UIButtons {
  // factory method
  override createButton(): Button {
    return new RoundButton();
  }
}

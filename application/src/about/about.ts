import { EventAggregator } from 'aurelia-event-aggregator';
import { inject } from 'aurelia-framework';


@inject(EventAggregator)
export class About {

  private messages = ['A new message', 'the second message', 'the third message', 'the fourth message', 'THE LAST MESSAGE!!!!!'];
  private messageNumber = 0;

  constructor(private eventAggregator: EventAggregator) { }

  changeText() {
    this.sendMessage();
  }

  private sendMessage() {
    this.eventAggregator.publish('message-event', this.messages[this.messageNumber]);

    if (this.messageNumber < this.messages.length - 1) {
      this.messageNumber++;
    }
  }
}

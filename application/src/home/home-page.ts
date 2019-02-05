import { EventAggregator, Subscription } from "aurelia-event-aggregator";
import { inject, observable } from "aurelia-framework";

@inject(EventAggregator)
export class Home {

  @observable message = 'Default message';
  private subscription: Subscription;

  constructor(private eventAggregator: EventAggregator) { }


  attached() {
    this.subscription = this.eventAggregator.subscribe('message-event', message => {
      this.message = message;
    });
  }

  detached() {
    this.subscription.dispose();
  }
}

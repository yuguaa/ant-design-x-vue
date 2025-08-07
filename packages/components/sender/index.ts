import type { App } from 'vue';
import SenderComponent from './Sender.vue';
import SenderHeader from './SenderHeader.vue';

export type { SenderProps } from './interface';

const Sender = Object.assign(SenderComponent, {
  Header: SenderHeader,
});

// @ts-ignore
Sender.install = function(app: App) {
  app.component(Sender.name, Sender);
  app.component(SenderHeader.name, SenderHeader);
  return app;
}

export default Sender;

export {
  Sender,
}

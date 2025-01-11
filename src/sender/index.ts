import ForwardSender from './Sender.vue';
import SenderHeader from './SenderHeader.vue';
export type { SenderProps } from './interface';

type CompoundedSender = typeof ForwardSender & {
  Header: typeof SenderHeader;
};

const Sender = ForwardSender as CompoundedSender;
Sender.Header = SenderHeader

export default Sender;

export {
  Sender,
}

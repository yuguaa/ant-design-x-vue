import type { ComponentToken as AttachmentsToken } from '../attachments/style';
import type { ComponentToken as BubbleComponentToken } from '../bubble/style';
import type { ComponentToken as ConversationsComponentToken } from '../conversations/style';
import type { ComponentToken as PromptsComponentToken } from '../prompts/style';
import type { ComponentToken as SenderComponentToken } from '../sender/style';
import type { ComponentToken as SuggestionComponentToken } from '../suggestion/style';
import type { ComponentToken as ThoughtChainComponentToken } from '../thought-chain/style';
import type { ComponentToken as TransitionCollapseComponentToken } from '../transition-collapse/style';
import type { ComponentToken as WelcomeComponentToken } from '../welcome/style';

export interface ComponentTokenMap {
  TransitionCollapse?: TransitionCollapseComponentToken;
  Attachments?: AttachmentsToken;
  Bubble?: BubbleComponentToken;
  Conversations?: ConversationsComponentToken;
  Prompts?: PromptsComponentToken;
  Sender?: SenderComponentToken;
  Suggestion?: SuggestionComponentToken;
  ThoughtChain?: ThoughtChainComponentToken;
  Welcome?: WelcomeComponentToken;
}

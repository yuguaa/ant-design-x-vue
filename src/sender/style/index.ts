import { mergeToken } from '../../_util/cssinjs-utils';
import type { FullToken, GenerateStyle, GetDefaultToken } from '../../theme/cssinjs-utils';
import { genStyleHooks } from '../../theme/genStyleUtils';

// biome-ignore lint/suspicious/noEmptyInterface: ComponentToken need to be empty by default
export interface ComponentToken { }

interface SenderToken extends FullToken<'Sender'> { }

const genSenderStyle: GenerateStyle<SenderToken> = (token) => {
  const { componentCls, antCls } = token;

  return {
    [componentCls]: {
      [`${antCls}-cascader-menus ${antCls}-cascader-menu`]: {
        height: 'auto',
      },

      [`${componentCls}-item`]: {
        '&-icon': {
          marginInlineEnd: token.paddingXXS,
        },

        '&-extra': {
          marginInlineStart: token.padding,
        },
      },

      [`&${componentCls}-block`]: {
        [`${componentCls}-item-extra`]: {
          marginInlineStart: 'auto',
        },
      },
    },
  };
};

export const prepareComponentToken: GetDefaultToken<'Sender'> = () => ({});

export default genStyleHooks<'Sender'>(
  'Sender',
  (token) => {
    const SenderToken = mergeToken<SenderToken>(token, {});
    return genSenderStyle(SenderToken);
  },
  prepareComponentToken,
);

import { unit } from '../../_util/cssinjs';
import type { BubbleToken } from '.';
import type { GenerateStyle } from '../../theme/cssinjs-utils';

export const genVariantStyle: GenerateStyle<BubbleToken> = (token) => {
  const { componentCls, paddingSM, padding } = token;
  return {
    [componentCls]: {
      [`${componentCls}-content`]: {
        // Shared: filled, outlined, shadow
        '&-filled,&-outlined,&-shadow': {
          padding: `${unit(paddingSM)} ${unit(padding)}`,
          borderRadius: token.borderRadiusLG,
        },

        // Filled:
        '&-filled': {
          backgroundColor: token.colorFillContent,
        },

        // Outlined:
        '&-outlined': {
          border: `1px solid ${token.colorBorderSecondary}`,
        },

        // Shadow:
        '&-shadow': {
          boxShadow: token.boxShadowTertiary,
        },
      },
    },
  };
};

export const genShapeStyle: GenerateStyle<BubbleToken> = (token) => {
  const { componentCls, fontSize, lineHeight, paddingSM, padding, calc } = token;

  const halfRadius = calc(fontSize).mul(lineHeight).div(2).add(paddingSM).equal();

  const contentCls = `${componentCls}-content`;

  return {
    [componentCls]: {
      [contentCls]: {
        // round:
        '&-round': {
          borderRadius: {
            _skip_check_: true,
            value: halfRadius,
          },
          paddingInline: calc(padding).mul(1.25).equal(),
        },
      },

      // corner:
      [`&-start ${contentCls}-corner`]: {
        borderStartStartRadius: token.borderRadiusXS,
      },
      [`&-end ${contentCls}-corner`]: {
        borderStartEndRadius: token.borderRadiusXS,
      },
    },
  };
};

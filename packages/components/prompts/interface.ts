import type { CSSProperties, HTMLAttributes, VNode } from "vue";

export interface BasePromptItem {
  /**
   * @desc 唯一标识用于区分每个提示项。
   * @descEN Unique identifier used to distinguish each prompt item.
   */
  key: string;

  /**
   * @desc 提示图标显示在提示项的左侧。
   * @descEN Prompt icon displayed on the left side of the prompt item.
   */
  icon?: VNode;

  /**
   * @desc 提示标签显示提示的主要内容。
   * @descEN Prompt label displaying the main content of the prompt.
   */
  label?: VNode | string;

  /**
   * @desc 提示描述提供额外的信息。
   * @descEN Prompt description providing additional information.
   */
  description?: VNode | string;

  /**
   * @desc 设置为 true 时禁用点击事件。
   * @descEN When set to true, click events are disabled.
   */
  disabled?: boolean;
}

export interface PromptProps extends BasePromptItem {
  children?: BasePromptItem[];
}

export type SemanticType = 'list' | 'item' | 'itemContent' | 'title' | 'subList' | 'subItem';

export interface PromptsProps
  extends Omit<HTMLAttributes, 'onClick' | 'title'> {
  /**
   * @desc 包含多个提示项的列表。
   * @descEN List containing multiple prompt items.
   */
  items?: PromptProps[];

  /**
   * @desc 显示在提示列表顶部的标题。
   * @descEN Title displayed at the top of the prompt list.
   */
  title?: VNode | string | (() => VNode | string);

  /**
   * @desc Item 提示项被点击时的回调函数。
   * @descEN Callback function when a prompt item is clicked.
   */
  onItemClick?: (info: { data: PromptProps }) => void;

  /**
   * @desc 提示列表是否垂直排列。
   * @descEN Whether the prompt list is arranged vertically.
   */
  vertical?: boolean;

  /**
   * @desc 提示列表是否换行。
   * @descEN Whether the prompt list is wrapped.
   */
  wrap?: boolean;

  /**
   * @desc 自定义样式，用于各个提示项的不同部分。
   * @descEN Custom styles for different parts of each prompt item.
   */
  styles?: Partial<Record<SemanticType, CSSProperties>>;

  /**
   * @desc 自定义样式类名，用于各个提示项的不同部分。
   * @descEN Custom style class names for different parts of each prompt item.
   */
  classNames?: Partial<Record<SemanticType, string>>;

  /**
   * @desc 样式类名的前缀。
   * @descEN Prefix for style class names.
   */
  prefixCls?: string;

  /**
   * @desc 根节点的样式类名。
   * @descEN Style class name for the root node.
   */
  rootClassName?: string;
}

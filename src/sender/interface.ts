import type { CSSProperties, VNode } from "vue";

export type SenderItem = {
  label: VNode | string;
  value: string;

  icon?: VNode;

  children?: SenderItem[];

  extra?: VNode;
};

export interface RenderChildrenProps<T> {
  onTrigger: (info?: T | false) => void;
  onKeyDown: (e: KeyboardEvent) => void;
}

export interface SenderProps<T = any> {
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  style?: CSSProperties;
  children?: (props: RenderChildrenProps<T>) => VNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  items: SenderItem[] | ((info?: T) => SenderItem[]);
  onSelect?: (value: string) => void;
  block?: boolean;
  styles?: Partial<Record<string, CSSProperties>>;
  classNames?: Partial<Record<string, string>>;
}

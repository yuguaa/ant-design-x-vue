import useState from "../../_util/hooks/use-state";
import { computed, toRef } from "vue";
import type { Ref } from "vue";

export type CollapsibleOptions = {
  /**
   * @desc 当前展开的节点
   * @descEN current expanded keys
   */
  expandedKeys?: string[];

  /**
   * @desc 展开节点变化回调
   * @descEN callback when expanded keys change
   */
  onExpand?: (expandedKeys: string[]) => void;
};

export type Collapsible = boolean | CollapsibleOptions;

type RequiredCollapsibleOptions = Required<CollapsibleOptions>;

type UseCollapsible = (
  collapsible?: Collapsible,
  prefixCls?: string,
  rootPrefixCls?: string,
) => [
    Ref<boolean>,
    Ref<RequiredCollapsibleOptions['expandedKeys']>,
    ((curKey: string) => void) | undefined,
    // CSSMotionProps,
  ];

const useCollapsible: UseCollapsible = (collapsible, prefixCls, rootPrefixCls) => {
  // ============================ Collapsible ============================
  const collapsibleState = computed(() => {
    let baseConfig: RequiredCollapsibleOptions = {
      expandedKeys: [],
      onExpand: () => { },
    };
    if (!collapsible) {
      return {
        enableCollapse: false,
        customizeExpandedKeys: baseConfig.expandedKeys,
        customizeOnExpand: baseConfig.onExpand
      }
    }
    if (typeof collapsible === 'object') {
      baseConfig = { ...baseConfig, ...collapsible };
    }

    return {
      enableCollapse: true,
      customizeExpandedKeys: baseConfig.expandedKeys,
      customizeOnExpand: baseConfig.onExpand
    }
  });

  // ============================ ExpandedKeys ============================
  const [mergedExpandedKeys, setMergedExpandedKeys] =
    useState<RequiredCollapsibleOptions['expandedKeys']>(collapsibleState.value.customizeExpandedKeys);

  // ============================ Event ============================
  const onItemExpand = (curKey: string) => {
    const keys = mergedExpandedKeys.value.includes(curKey)
      ? mergedExpandedKeys.value.filter((key) => key !== curKey)
      : [...mergedExpandedKeys.value, curKey];
    collapsibleState.value.customizeOnExpand?.(keys);
    setMergedExpandedKeys(keys);
  };

  // ============================ Motion ============================
  // const collapseMotion: CSSMotionProps = React.useMemo(() => {
  //   if (!enableCollapse) return {};

  //   return {
  //     ...initCollapseMotion(rootPrefixCls),
  //     motionAppear: false,
  //     leavedClassName: `${prefixCls}-content-hidden`,
  //   };
  // }, [rootPrefixCls, prefixCls, enableCollapse]);

  // ============================ Return ============================
  return [
    toRef(() => collapsibleState.value.enableCollapse),
    mergedExpandedKeys,
    collapsibleState.value.enableCollapse ? onItemExpand : undefined,
    // collapseMotion,
  ];
}

export default useCollapsible;

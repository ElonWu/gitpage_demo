import * as React from "react";

interface Props extends React.ComponentProps<any> {
  // className?: string;
  // children?: React.ReactNode;
  flex?: number | "none";
  flexDirection?: any;
  alignItems?: any;
  justifyContent?: any;
  style?: React.CSSProperties;
}

interface ItemProps extends React.ComponentProps<any> {
  // className?: string;
  // children?: React.ReactNode;
  flex?: number | "none";
  style?: React.CSSProperties;
}

// flex 容器
export const Flex: React.SFC<Props> = ({
  children = "",
  flexDirection = "row",
  alignItems = "stretch",
  justifyContent = "space-bwteen",
  style = {},
  className = "",
  flex,
  ...rest
}: Props) => (
  <div
    className={`flex ${className}`}
    style={{
      display: "flex",
      flex,
      flexDirection,
      alignItems,
      justifyContent,
      ...style
    }}
    {...rest}
  >
    {children}
  </div>
);

// flex 子元素
export const FlexItem: React.SFC<ItemProps> = ({
  children = "",
  style = {},
  flex = 1,
  className = "",
  ...rest
}: ItemProps) => (
  <div
    className={`flex-item ${className}`}
    style={{
      flex,
      ...style
    }}
    {...rest}
  >
    {children}
  </div>
);

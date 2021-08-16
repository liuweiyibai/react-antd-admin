/* eslint-disable */
// / <reference types="react-scripts" />
// / <reference types="@emotion/react/types/css-prop" />

declare module '@emotion/core/jsx-runtime';
declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
}

declare interface ObjectConstructor {
  keys: <T>(o: T) => (keyof T)[];
}

declare module '*.less';
declare module '*.module.less' {
  const classes: { [className: string]: string };
  export default classes;
}

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}
declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.json' {
  const content: string;
  export default content;
}

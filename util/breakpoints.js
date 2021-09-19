import { css } from 'styled-components';

export const expandTemplate = function expandTemplate(template, values) {
  return values.reduce(
    (s, v, i) =>
      s + (typeof v === 'object' ? css(v).join('') : v) + template[i + 1],
    template[0],
  );
};

export const expandStyleTemplate = function expandStyleTemplate(style, values) {
  return style ? `{ ${expandTemplate(style, values)} }` : '';
};

const bp = {
  sm(style, ...values) {
    return `@media only screen and (min-width: 370px) and (max-width: 767px) { ${expandStyleTemplate(style, values)} }`;
  },

  md(style, ...values) {
    return `@media only screen and (min-width: 768px) and (max-width: 1279px) { ${expandStyleTemplate(style, values)} }`;
  },

  lg(style, ...values) {
    return `@media only screen and (min-width: 1280px) and (max-width: 1560px) { ${expandStyleTemplate(style, values)} }`
  },

  xl(style, ...values) {
    return `@media only screen and (min-width: 1560px) { ${expandStyleTemplate(style, values)} }`
  },
};

export default bp;

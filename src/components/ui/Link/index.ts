import type { AnchorHTMLAttributes } from 'vue'

export interface LinkProps {
  href?: string
  target?: string
  rel?: string
  otherProps?: AnchorHTMLAttributes
}

export { default } from './Link.vue'

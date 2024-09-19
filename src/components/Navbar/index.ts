import { RouterLinkProps } from 'vue-router'

export interface NavbarLinkProps extends Partial<RouterLinkProps> {
  tag?: 'a' | 'RouterLink'
  href?: string
}

export { default } from './Navbar.vue'

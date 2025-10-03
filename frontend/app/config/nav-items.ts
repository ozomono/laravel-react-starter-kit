import { CirclePlay, LayoutGrid, SquareCode, Tractor, User } from 'lucide-react'
import type { NavItem } from '~/core/types'

export const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        to: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Users',
        to: '/users',
        icon: User,
    },
]

export const footerNavItems: NavItem[] = [
    {
        title: 'React Frontend',
        to: 'https://github.com/bjornleonhenry/laravel-react-frontend',
        icon: SquareCode,
    },
    {
        title: 'Laravel Tractor',
        to: 'https://github.com/bjornleonhenry/laravel-tractor',
        icon: Tractor,
    },
    {
        title: 'Laravel Starter Kit',
        to: 'https://github.com/oso/laravel-react-starter',
        icon: CirclePlay,
    },
]

import { Quicksand } from 'next/font/google'
import { Square_Peg } from 'next/font/google'

export const quicksandFont = Quicksand({
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
});

export const squarepegFont = Square_Peg({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--square-peg-font',
});
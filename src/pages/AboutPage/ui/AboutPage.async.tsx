import { lazy } from 'react'

export const AboutPageAsync = lazy(
    // ИСКУССТВЕННАЯ ЗАДЕРЖКА ПРИ ДЕПЛОЕ УБРАТЬ
    () =>
        // @ts-ignore
        new Promise((res) => setTimeout(() => res(import('./AboutPage')), 1500))
)

import { lazy } from 'react'

export const MainPageAsync = lazy(
    // ИСКУССТВЕННАЯ ЗАДЕРЖКА ПРИ ДЕПЛОЕ УБРАТЬ
    () =>
        // @ts-ignore
        new Promise((res) => setTimeout(() => res(import('./MainPage')), 1500))
)

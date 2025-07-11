import type { Meta, StoryObj } from '@storybook/react-webpack5'

import { ErrorPage } from './ErrorPage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
    title: 'widgets/ErrorPage',
    component: ErrorPage,
    tags: ['autodocs'],
} satisfies Meta<typeof ErrorPage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {}
export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
}

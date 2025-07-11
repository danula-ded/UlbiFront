import type { Meta, StoryObj } from '@storybook/react-webpack5'

import { fn } from 'storybook/test'

import { Button, ThemeButton } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        theme: { control: 'select' },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'Button',
    },
}
export const PrimaryDark: Story = {
    args: {
        children: 'Button',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}

export const Clear: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: 'Button',
    },
}
export const ClearDark: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: 'Button',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}

export const Outline: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Button',
    },
}
export const OutlineDark: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'Button',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}

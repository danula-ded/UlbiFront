import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button, ThemeButton } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        theme: { control: 'select' },
    },
    args: { onClick: () => {} },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    children: 'Button',
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    children: 'Button',
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Clear = Template.bind({})
Clear.args = {
    theme: ThemeButton.CLEAR,
    children: 'Button',
}

export const ClearDark = Template.bind({})
ClearDark.args = {
    theme: ThemeButton.CLEAR,
    children: 'Button',
}
ClearDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Outline = Template.bind({})
Outline.args = {
    theme: ThemeButton.OUTLINE,
    children: 'Button',
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
    theme: ThemeButton.OUTLINE,
    children: 'Button',
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

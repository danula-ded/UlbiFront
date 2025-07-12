import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeSwitcher } from './ThemeSwitcher'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
} as ComponentMeta<typeof ThemeSwitcher>

const Template: ComponentStory<typeof ThemeSwitcher> = () => <ThemeSwitcher />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

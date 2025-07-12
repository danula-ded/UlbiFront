import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { LangSwitcher } from './LangSwitcher'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/LangSwitcher',
    component: LangSwitcher,
} as ComponentMeta<typeof LangSwitcher>

const Template: ComponentStory<typeof LangSwitcher> = () => <LangSwitcher />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

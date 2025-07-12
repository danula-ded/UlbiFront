import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import AboutPage from './AboutPage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'page/AboutPage',
    component: AboutPage,
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

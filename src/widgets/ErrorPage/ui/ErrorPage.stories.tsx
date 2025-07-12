import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ErrorPage } from './ErrorPage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'widgets/ErrorPage',
    component: ErrorPage,
} as ComponentMeta<typeof ErrorPage>

const Template: ComponentStory<typeof ErrorPage> = () => <ErrorPage />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { PageLoader } from './PageLoader'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/PageLoader',
    component: PageLoader,
} as ComponentMeta<typeof PageLoader>

const Template: ComponentStory<typeof PageLoader> = () => <PageLoader />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

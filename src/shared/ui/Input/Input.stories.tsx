import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Input } from './Input'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        theme: { control: 'select' },
    },
    args: { onClick: () => {} },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Light = Template.bind({})
Light.args = {
    value: '123',
    placeholder: 'Введите пароль',
}
export const Dark = Template.bind({})
Dark.args = {
    value: '123',
    placeholder: 'Введите пароль',
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

import { RouterDecorator } from './../../src/shared/config/storybook/RouterDecorator/RouterDecorator'
import { Theme } from './../../src/app/providers/ThemeProvider/lib/ThemeContext'
import { ThemeDecorator } from './../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { type Preview } from '@storybook/react-webpack5'
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [RouterDecorator, StyleDecorator, ThemeDecorator(Theme.LIGHT)],
}

export default preview

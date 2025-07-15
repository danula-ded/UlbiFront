import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button, ButtonSize, ButtonTheme } from './Button'
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
export const PrimarySizeM = Template.bind({})
PrimarySizeM.args = {
    children: 'Button',
    size: ButtonSize.M,
}
export const PrimarySizeL = Template.bind({})
PrimarySizeL.args = {
    children: 'Button',
    size: ButtonSize.L,
}
export const PrimarySizeXL = Template.bind({})
PrimarySizeXL.args = {
    children: 'Button',
    size: ButtonSize.XL,
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    children: 'Button',
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Clear = Template.bind({})
Clear.args = {
    theme: ButtonTheme.CLEAR,
    children: 'Button',
}
export const ClearSizeM = Template.bind({})
ClearSizeM.args = {
    theme: ButtonTheme.CLEAR,
    children: 'Button',
    size: ButtonSize.M,
}
export const ClearSizeL = Template.bind({})
ClearSizeL.args = {
    theme: ButtonTheme.CLEAR,
    children: 'Button',
    size: ButtonSize.L,
}
export const ClearSizeXL = Template.bind({})
ClearSizeXL.args = {
    theme: ButtonTheme.CLEAR,
    children: 'Button',
    size: ButtonSize.XL,
}

export const ClearDark = Template.bind({})
ClearDark.args = {
    theme: ButtonTheme.CLEAR,
    children: 'Button',
}
ClearDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Outline = Template.bind({})
Outline.args = {
    theme: ButtonTheme.OUTLINE,
    children: 'Button',
}
export const OutlineSizeM = Template.bind({})
OutlineSizeM.args = {
    theme: ButtonTheme.OUTLINE,
    children: 'Button',
    size: ButtonSize.M,
}
export const OutlineSizeL = Template.bind({})
OutlineSizeL.args = {
    theme: ButtonTheme.OUTLINE,
    children: 'Button',
    size: ButtonSize.L,
}
export const OutlineSizeXL = Template.bind({})
OutlineSizeXL.args = {
    theme: ButtonTheme.OUTLINE,
    children: 'Button',
    size: ButtonSize.XL,
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
    theme: ButtonTheme.OUTLINE,
    children: 'Button',
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Background = Template.bind({})
Background.args = {
    theme: ButtonTheme.BACKGROUND,
    children: 'Button',
}
export const BackgroundSizeM = Template.bind({})
BackgroundSizeM.args = {
    theme: ButtonTheme.BACKGROUND,
    children: 'Button',
    size: ButtonSize.M,
}
export const BackgroundSizeL = Template.bind({})
BackgroundSizeL.args = {
    theme: ButtonTheme.BACKGROUND,
    children: 'Button',
    size: ButtonSize.L,
}
export const BackgroundSizeXL = Template.bind({})
BackgroundSizeXL.args = {
    theme: ButtonTheme.BACKGROUND,
    children: 'Button',
    size: ButtonSize.XL,
}

export const BackgroundDark = Template.bind({})
BackgroundDark.args = {
    theme: ButtonTheme.BACKGROUND,
    children: 'Button',
}
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundInverted = Template.bind({})
BackgroundInverted.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: 'Button',
}
export const BackgroundInvertedSizeM = Template.bind({})
BackgroundInvertedSizeM.args = {
    theme: ButtonTheme.BACKGROUND,
    children: 'Button',
    size: ButtonSize.M,
}
export const BackgroundInvertedSizeL = Template.bind({})
BackgroundInvertedSizeL.args = {
    theme: ButtonTheme.BACKGROUND,
    children: 'Button',
    size: ButtonSize.L,
}
export const BackgroundInvertedSizeXL = Template.bind({})
BackgroundInvertedSizeXL.args = {
    theme: ButtonTheme.BACKGROUND,
    children: 'Button',
    size: ButtonSize.XL,
}

export const BackgroundInvertedDark = Template.bind({})
BackgroundInvertedDark.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: 'Button',
}
BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Square = Template.bind({})
Square.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: '<',
    square: true,
}

export const SquareDark = Template.bind({})
SquareDark.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: '<',
    square: true,
}
SquareDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SquareSizeM = Template.bind({})
SquareSizeM.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: '<',
    square: true,
    size: ButtonSize.M,
}

export const SquareSizeMDark = Template.bind({})
SquareSizeMDark.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: '<',
    square: true,
    size: ButtonSize.M,
}
SquareSizeMDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SquareSizeL = Template.bind({})
SquareSizeL.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: '<',
    square: true,
    size: ButtonSize.L,
}

export const SquareSizeLDark = Template.bind({})
SquareSizeLDark.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: '<',
    square: true,
    size: ButtonSize.L,
}
SquareSizeLDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SquareSizeXL = Template.bind({})
SquareSizeXL.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: '<',
    square: true,
    size: ButtonSize.XL,
}

export const SquareSizeXLDark = Template.bind({})
SquareSizeXLDark.args = {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    children: '<',
    square: true,
    size: ButtonSize.XL,
}
SquareSizeXLDark.decorators = [ThemeDecorator(Theme.DARK)]

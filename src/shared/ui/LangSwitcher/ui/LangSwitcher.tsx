import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './LangSwitcher.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
interface LangSwitcherProps {
    className?: string
    short?: boolean
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation()

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button className={classNames(cls.LangSwitcher, {}, [className])} theme={ButtonTheme.CLEAR} onClick={toggle}>
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    )
}

import React, { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './LoginForm.module.scss'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation()
    const [value, setValue] = useState('')

    const onChange = (val: string) => setValue(val)

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                type="text"
                placeholder={t('Введите логин')}
                className={cls.input}
                value={value}
                onChange={onChange}
                autofocus
            />
            <Input type="password" placeholder={t('Введите пароль')} className={cls.input} />
            <Button className={cls.loginBtn}>{t('Войти')}</Button>
        </div>
    )
}

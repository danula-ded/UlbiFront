import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginModal.module.scss'
import { Modal, ModalProps } from 'shared/ui/Modal/Modal'
import { LoginForm } from '../LoginForm/LoginForm'

export const LoginModal = ({ className, isOpen, onClose }: Omit<ModalProps, 'children'>) => {
    return (
        <Modal lazy isOpen={isOpen} onClose={onClose} className={classNames(cls.LoginModal, {}, [className])}>
            <LoginForm />
        </Modal>
    )
}

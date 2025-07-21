import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import { Portal } from '../Portal/Portal'

interface ModalProps {
    children: ReactNode
    className?: string
    isOpen?: boolean
    onClose?: () => void
}

const ANIMATION_DELAY = 300

export const Modal = ({ children, className, isOpen, onClose }: ModalProps) => {
    const [isClosing, setIsClosing] = useState(false)
    const timerRef = useRef<ReturnType<typeof setTimeout>>()

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onkeydown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler()
            }
        },
        [closeHandler]
    )

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onkeydown)
        }

        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onkeydown)
        }
    }, [isOpen, onkeydown])

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}

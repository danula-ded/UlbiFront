import { InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>

interface InputProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange?: (value: string) => void
    autofocus?: boolean
}

export const Input = memo(
    ({ className, value, onChange, type = 'text', placeholder, autofocus, ...otherProps }: InputProps) => {
        const ref = useRef<HTMLInputElement>(null)
        const [isFocused, setIsFocused] = useState<boolean>(false)
        const [caretPosition, setCaretPosition] = useState(0)

        useEffect(() => {
            if (autofocus === true) {
                setIsFocused(true)
                ref.current?.focus()
            }
        }, [autofocus])

        const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            onChange?.(e.target.value)
            setCaretPosition(e.target.value.length)
        }

        const onBlur = () => {
            setIsFocused(false)
        }

        const onFocus = () => {
            setIsFocused(true)
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const onSelect = (e: any) => {
            setCaretPosition(e?.target?.selectionStart)
        }

        return (
            <div className={classNames(cls.InputWrapper, {}, [className])}>
                {placeholder && <div className={cls.placeholder}>{`${placeholder} >`}</div>}
                <div className={cls.CaretWrapper}>
                    <input
                        ref={ref}
                        className={cls.input}
                        type={type}
                        value={value}
                        onChange={onChangeHandler}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSelect={onSelect}
                        {...otherProps}
                    />
                    {isFocused && <span className={cls.caret} style={{ left: `${caretPosition * 9}px` }} />}
                </div>
            </div>
        )
    }
)

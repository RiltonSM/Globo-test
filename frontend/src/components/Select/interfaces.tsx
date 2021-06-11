import { ReactNode, SelectHTMLAttributes  } from 'react'

export interface SelectPropsInterface extends SelectHTMLAttributes<HTMLSelectElement> {
    children: ReactNode
}
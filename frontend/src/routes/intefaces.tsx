import { ComponentType } from 'react';
import { IconType } from 'react-icons'

export interface RouteInterface {
    path: string,
    component: ComponentType,
    icon: IconType,
    text: string
}
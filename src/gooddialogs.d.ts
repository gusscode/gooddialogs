/* declare class GoodDialog {
    options: Options
    confirm : (message: string, options?: Options, onResponseCB?: (data: HTMLButtonElement) => void): Promise<boolean>{}
} */
declare module 'gooddialogs' {
    export class GoodDialogs {
        options: Options;
        /**
         * @param message (string)
         */
        confirm: (message: string, options?: Options, onResponseCB?: (data: HTMLButtonElement) => void) => Promise<boolean>
        form: <T>(message: string, data: ItemDataForm[], options?: Options) => Promise<T>
        withOptions: <T>(message: string, optionsButtons: ButtonOptions<T>[], options?: Options) => Promise<T>
        success: (message?: string, options?: Options) => void
        cancelled: (message?: string, options?: Options) => void
        createNotification: (message?: string, options?: Options) => void
    }
    export const goodDialogs: GoodDialogs;

    export type OptionTheme = 'gd-theme-primary' | 'gd-theme-blue' | 'gd-theme-indigo'


    export type GoodDialogIcon = 'infoIcon' | 'okIcon' | 'cancelIcon'
    export interface Options {
        type?: 'success' | 'info' | 'error' | 'warning'
        position?: 'top' | 'left' | 'right' | 'center' | 'top-left' | 'top-center' | 'top-right'
        alertIn?: string
        alertOut?: string
        timer?: number | null
        title?: string | null
        subtitle?: string | null
        containerClass?: string
        theme?: OptionTheme
        darkForce?: boolean
        lightForce?: boolean
        alertClass?: string
        confirmButttonClass?: string
        divIconClass?: string
        confirmButtonText?: string
        cancelButtonClass?: string
        cancelButtonText?: string
        footerClass?: string
        persistent?: boolean
        onConfirm?: () => void
    }
    export type HTMLInputTypeAttribute =
        | "button"
        | "checkbox"
        | "color"
        | "date"
        | "datetime-local"
        | "email"
        | "file"
        | "hidden"
        | "image"
        | "month"
        | "number"
        | "password"
        | "radio"
        | "range"
        | "reset"
        | "search"
        | "submit"
        | "tel"
        | "text"
        | "time"
        | "url"
        | "week";
    export interface DataInputForm<T> {
        items: {
            type: HTMLInputTypeAttribute
            label: string
            name: string
        }[]
        value?: T
    }

    export interface ItemDataForm {
        type: HTMLInputTypeAttribute
        label: string
        name: string
    }

    export interface ButtonOptions<T> {
        label: string,
        value: T,
        buttonClass?: string,
        onClick?: (value: any) => void
    }
}


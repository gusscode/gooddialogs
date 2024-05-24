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

    export interface ButtonOptions<T> {
        label: string,
        value: T,
        buttonClass?: string,
        onClick?: (value: any) => void
    }
}


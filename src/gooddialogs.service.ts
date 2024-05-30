import { goodDialogIcons, infoIcon } from "./icons.service"
export type OptionTheme = 'gd-theme-primary' | 'gd-theme-blue' | 'gd-theme-indigo'


export interface Options {
    messageAlign?: 'start' | 'end' | 'center' | 'justify'
    messageMaxWidth?: string
    instance?: boolean
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

interface ButtonOptions<T> {
    label: string,
    value: T,
    buttonClass?: string,
    onClick?: (value: any) => void
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

export class GoodDialogs {

    options: Options
    constructor(options?: Options) {

        this.options = {
            messageAlign: options?.messageAlign ?? 'center',
            messageMaxWidth: options?.messageMaxWidth ?? '100%',
            instance: options?.instance ?? true,
            type: options?.type ?? undefined,
            alertIn: options?.alertIn ?? 'goodalert-animation-aparecer',
            alertOut: options?.alertOut ?? 'goodalert-animation-desaparecer',
            position: options?.position ?? 'center',
            timer: options?.timer ?? null,
            title: options?.title ?? null,
            subtitle: options?.subtitle ?? null,
            darkForce: options?.darkForce ?? false,
            lightForce: options?.lightForce ?? false,
            containerClass: (options?.containerClass ?? 'gooddialog-container'),
            theme: options?.theme ?? 'gd-theme-indigo',
            alertClass: options?.alertClass ?? 'gooddialog-alert',
            confirmButttonClass: options?.confirmButttonClass ?? 'gooddialog-confirm-button gooddialog-button-event',
            cancelButtonClass: options?.cancelButtonClass ?? 'gooddialog-cancel-button gooddialog-button-event',
            footerClass: options?.footerClass ?? 'gooddialog-footer',
            divIconClass: options?.divIconClass ?? 'gooddialog-alert-div-icon gooddialog-svg-container',
            confirmButtonText: options?.confirmButtonText ?? 'Confirm',
            cancelButtonText: options?.cancelButtonText ?? 'Cancel',
            persistent: options?.persistent ?? false
        }
    }

    createComponent = (options?: Options) => {

        const optionsAlert: Options = {
            messageMaxWidth: options?.messageMaxWidth ?? this.options.messageMaxWidth,
            messageAlign: options?.messageAlign ?? this.options.messageAlign,
            instance: options?.instance ?? this.options.instance,
            type: options?.type ?? undefined,
            alertIn: options?.alertIn ?? this.options.alertIn,
            alertOut: options?.alertOut ?? this.options.alertOut,
            position: options?.position ?? this.options.position,
            title: options?.title ?? this.options.title,
            subtitle: options?.subtitle ?? this.options.subtitle,
            darkForce: options?.darkForce ?? this.options.darkForce,
            lightForce: options?.lightForce ?? this.options.lightForce,
            containerClass: options?.containerClass ?? this.options.containerClass,
            theme: options?.theme ?? this.options.theme,
            alertClass: options?.alertClass ?? this.options.alertClass,
            footerClass: options?.footerClass ?? this.options.footerClass,
            divIconClass: options?.divIconClass ?? this.options.divIconClass,
            confirmButttonClass: options?.confirmButttonClass ?? this.options.confirmButttonClass,
            cancelButtonClass: options?.cancelButtonClass ?? this.options.cancelButtonClass,
            confirmButtonText: options?.confirmButtonText ?? this.options.confirmButtonText,
            cancelButtonText: options?.cancelButtonText ?? this.options.cancelButtonText,
            persistent: options?.persistent ?? this.options.persistent,
            onConfirm: options?.onConfirm
        }

        const container = document.createElement('div',)
        const alert = document.createElement('div',)
        const footer = document.createElement('footer')


        const messageElement = document.createElement('section')
        const divIcon = document.createElement('div')

        divIcon.innerHTML = goodDialogIcons['infoIcon']
        divIcon.classList.value = optionsAlert.divIconClass!
        messageElement.appendChild(divIcon)
        messageElement.style.maxWidth = optionsAlert.messageMaxWidth!
        messageElement.style.display = 'flex'
        messageElement.style.justifyContent = 'center'
        messageElement.style.flexDirection = 'column'

        if (optionsAlert.title) {
            const title = document.createElement('h2')
            title.classList.value = 'gooddialog-alert-title'
            title.textContent = optionsAlert.title
            messageElement.appendChild(title)
        }
        if (optionsAlert.subtitle) {
            const subtitle = document.createElement('h3')
            subtitle.classList.value = 'gooddialog-alert-subtitle'
            subtitle.textContent = optionsAlert.subtitle
            messageElement.appendChild(subtitle)
        }
        const titleMessage = document.createElement('p')
        titleMessage.classList.value = 'gooddialog-title-message'
        titleMessage.style.textAlign = optionsAlert.messageAlign!

        //titleMessage.innerText = message

        messageElement.appendChild(titleMessage)
        alert.appendChild(messageElement)

        container.classList.value = optionsAlert.containerClass! + ' ' + optionsAlert.theme + ' ' + (optionsAlert.darkForce ? 'dark' : '') + ' ' + (optionsAlert.lightForce ? 'light' : '')
        alert.classList.value = optionsAlert.alertClass!
        alert.classList.add(optionsAlert.alertIn!)
        footer.classList.value = optionsAlert.footerClass!

        const contentDiv = document.createElement('div')

        alert.appendChild(contentDiv)
        alert.appendChild(footer)

        if (optionsAlert.type) {
            container.classList.add('gooddialog-' + optionsAlert.type)
        }



        if (!optionsAlert.persistent) {

            container.addEventListener('click', (e: any) => {
                const eventElement = e.target as HTMLElement

                if (eventElement.classList.contains('gooddialog-container')) {
                    const containerElements = document.getElementsByClassName('gooddialog-container')

                    container.classList.add('gooddialog-container-fade-out')
                    container.addEventListener('animationend', () => {
                        container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
                    })
                    alert.classList.add(optionsAlert.alertOut!)
                    alert.addEventListener('animationend', () => {

                        document.body.classList.remove('gooddialog-html-element')
                        container.remove()
                    })
                }
            })
        }


        const containerElements = document.getElementsByClassName('gooddialog-container')
        if (containerElements.length > 1) {
            //console.log('ya existe un contenedor: ' + containerElements.length);

        } else {
            container.classList.add('gooddialog-container-fade-in')
        }
        container!.appendChild(alert)

        const confirmButton = document.createElement('button');
        confirmButton.classList.value = optionsAlert.confirmButttonClass!
        confirmButton.textContent = optionsAlert.confirmButtonText!;
        confirmButton.addEventListener('click', () => {
            const containerElements = document.getElementsByClassName('gooddialog-container')
            if (containerElements.length > 0) {

                container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
            } else {
                container.classList.add('gooddialog-container-fade-out')
                container.addEventListener('animationend', () => {
                    container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
                })
            }
            alert.classList.add(optionsAlert.alertOut!)

            alert.addEventListener('animationend', () => {
                document.body.classList.remove('gooddialog-html-element')
                container.remove()
            })

            if (optionsAlert.onConfirm) {
                optionsAlert.onConfirm()
            }
        });




        footer.appendChild(confirmButton);

        const cancelButton = document.createElement('button');
        cancelButton.classList.value = optionsAlert.cancelButtonClass!
        cancelButton.textContent = optionsAlert.cancelButtonText!;
        cancelButton.addEventListener('click', () => {
            const containerElements = document.getElementsByClassName('gooddialog-container')
            if (containerElements.length > 0) {

                container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
            } else {
                container.classList.add('gooddialog-container-fade-out')
                container.addEventListener('animationend', () => {
                    container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
                })
            }
            alert.classList.add(optionsAlert.alertOut!)

            alert.addEventListener('animationend', () => {
                document.body.classList.remove('gooddialog-html-element')
                container.remove()
            })

        });

        footer.appendChild(cancelButton);
        footer.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                e.preventDefault()
                const buttons = footer.querySelectorAll('.gooddialog-button-event')
                const currentButton = document.activeElement as HTMLButtonElement;
                const currentIndex = Array.from(buttons).indexOf(currentButton);
                const nextIndex = (currentIndex + 1) % buttons.length;
                const nextButton = buttons[nextIndex] as HTMLButtonElement
                nextButton.focus();
            }

            if (e.key === 'Escape') {

                const containerElements = document.getElementsByClassName('gooddialog-container')
                if (containerElements.length > 0) {

                    container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
                } else {
                    container.classList.add('gooddialog-container-fade-out')
                    container.addEventListener('animationend', () => {
                        container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
                    })
                }
                alert.classList.add(optionsAlert.alertOut!)

                alert.addEventListener('animationend', () => {
                    document.body.classList.remove('gooddialog-html-element')
                    container.remove()
                })
            }
        })

        if (optionsAlert.instance) {
            document.body.classList.add('gooddialog-html-element')
            document.body.appendChild(container)
        }

        return {
            footer, container, alert, confirmButton, cancelButton, divIcon, titleMessage, contentDiv
        }
    }

    confirm = async (message: string, options?: Options, onResponseCB?: (data: HTMLButtonElement) => void): Promise<boolean> => {

        const { alert, cancelButton, confirmButton, container, divIcon, footer, titleMessage } = this.createComponent(options)

        confirmButton.focus()

        confirmButton.tabIndex = 1
        cancelButton.tabIndex = 2
        titleMessage.textContent = message
        return new Promise<boolean>((resolve) => {
            confirmButton.addEventListener('click', () => {
                if (onResponseCB) {
                    onResponseCB(confirmButton)
                }
                resolve(true)
            })

            cancelButton.addEventListener('click', () => {
                resolve(false)
            })
        })
    }


    async withOptions<T>(message: string, optionsButtons: ButtonOptions<T>[], options?: Options): Promise<T> {
        const { alert, cancelButton, confirmButton, container, divIcon, footer, titleMessage } = this.createComponent(options)

        titleMessage.textContent = message
        footer.classList.value = 'gooddialog-footer-1-col'
        footer.removeChild(cancelButton)
        footer.removeChild(confirmButton)
        return new Promise<T>((resolve) => {
            // Crear elementos dentro del div
            optionsButtons.forEach(option => {
                const buttonOpt = document.createElement('button')
                if (option.buttonClass) {
                    buttonOpt.classList.value = option.buttonClass
                } else {
                    buttonOpt.classList.value = options?.confirmButttonClass ?? 'gooddialog-confirm-button'
                }
                buttonOpt.classList.add('gooddialog-button-event')
                buttonOpt.textContent = option.label
                buttonOpt.addEventListener('click', () => {
                    if (option.onClick) {
                        option.onClick(option.value)
                    }
                    const containerElements = document.getElementsByClassName('gooddialog-container')
                    if (containerElements.length >= 1) {

                        container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
                    } else {
                        container.classList.add('gooddialog-container-fade-out')
                        container.addEventListener('animationend', () => {
                            container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
                        })
                    }
                    alert.classList.add(options?.alertOut!)
                    alert.addEventListener('animationend', () => {
                        document.body.classList.remove('gooddialog-html-element')
                        container.remove()
                    })

                    resolve(option.value)
                })
                footer.appendChild(buttonOpt)
            })
        });
    }

    success(message?: string, options?: Options) {
        const { alert, cancelButton, confirmButton, container, divIcon, footer, titleMessage } = this.createComponent(options)
        divIcon.innerHTML = goodDialogIcons['okIcon']
        divIcon.style.width = '100%'
        divIcon.style.height = '80px'
        divIcon.style.display = 'flex'
        divIcon.style.alignItems = 'center'
        divIcon.style.justifyContent = 'center'
        divIcon.classList.value = 'gooddialog-svg-container-ok'
        titleMessage.textContent = message ?? 'Success'
        confirmButton.textContent = options?.confirmButtonText ?? 'Ok'
        footer.removeChild(cancelButton)
        footer.style.display = 'flex'
        footer.style.alignItems = 'center'
        footer.style.justifyContent = 'center'
        footer.classList.value = ''
        confirmButton.focus()

    }

    cancelled(message?: string, options?: Options) {
        const { alert, cancelButton, confirmButton, container, divIcon, footer, titleMessage } = this.createComponent(options)
        divIcon.innerHTML = goodDialogIcons['cancelIcon']
        divIcon.style.width = '100%'
        divIcon.style.height = '80px'
        divIcon.style.display = 'flex'
        divIcon.style.alignItems = 'center'
        divIcon.style.justifyContent = 'center'
        divIcon.classList.value = 'gooddialog-svg-container-cancel'
        titleMessage.textContent = message ?? 'Cancelled'
        confirmButton.textContent = options?.confirmButtonText ?? 'Ok'
        footer.removeChild(cancelButton)
        footer.style.display = 'flex'
        footer.style.alignItems = 'center'
        footer.style.justifyContent = 'center'
        footer.classList.value = ''
        confirmButton.focus()
    }

    createNotification(message?: string, options?: Options) {
        const optionsNotification: Options = {
            instance: options?.instance ?? this.options.instance,
            type: options?.type ?? this.options.type,
            position: options?.position ?? 'top-right',
            timer: options?.timer ?? this.options.timer,
            title: options?.title ?? this.options.title,
            subtitle: options?.subtitle ?? this.options.subtitle,
            darkForce: options?.darkForce ?? this.options.darkForce,
            lightForce: options?.lightForce ?? this.options.lightForce,
            containerClass: options?.containerClass ?? this.options.containerClass,
            theme: options?.theme ?? this.options.theme,
            alertClass: options?.alertClass ?? this.options.alertClass,
            footerClass: options?.footerClass ?? this.options.footerClass,
            divIconClass: options?.divIconClass ?? this.options.divIconClass,
            confirmButttonClass: options?.confirmButttonClass ?? this.options.confirmButttonClass,
            cancelButtonClass: options?.cancelButtonClass ?? this.options.cancelButtonClass,
            confirmButtonText: options?.confirmButtonText ?? this.options.confirmButtonText,
            cancelButtonText: options?.cancelButtonText ?? this.options.cancelButtonText,
            persistent: options?.persistent ?? this.options.persistent,
            onConfirm: options?.onConfirm
        }

        let container = document.getElementById('gooddialog-notification-container-' + optionsNotification.position)

        if (!container) {
            container = document.createElement('div')
            container.id = 'gooddialog-notification-container-' + optionsNotification.position
            container.classList.value = 'gooddialog-notification-container-' + optionsNotification.position
            document.body.appendChild(container)

        }
        const notification = document.createElement('div')
        notification.classList.value = 'gooddialog-notification' + ' ' + optionsNotification.theme! + ' ' + 'goodalert-animation-aparecer' + ' ' + (optionsNotification.darkForce ? 'dark' : '') + ' ' + (optionsNotification.lightForce ? 'light' : '')

        notification.textContent = message ?? ''

        const iconClose = document.createElement('button')

        iconClose.addEventListener('click', closeNotification)

        iconClose.innerHTML = goodDialogIcons.cancelIcon
        notification.appendChild(iconClose)
        if (optionsNotification.type) {
            notification.classList.add('gooddialog-' + optionsNotification.type)
        }

        const timeOutOption = optionsNotification.timer ?? 5000
        setTimeout(() => {
            closeNotification()
        }, timeOutOption);

        function closeNotification() {
            notification.style.transform = 'translateX(100px)';
            notification.style.opacity = '0';
            //notification.style.position= 'absolute'
            notification.addEventListener('transitionend', () => {
                notification.remove()

                const notifications = document.getElementsByClassName('gooddialog-notification')
                //console.log(notifications.length);

                if (notifications.length < 1) {
                    if (container) {
                        container.remove()
                    }
                }
            })
        }
        container.appendChild(notification)
    }

    form = async <T>(message: string, data:ItemDataForm[], options?: Options) => {
        const optionsNotification: Options = {
            messageAlign: options?.messageAlign ?? this.options.messageAlign,
            messageMaxWidth: options?.messageMaxWidth ?? this.options.messageMaxWidth,
            instance: options?.instance ?? this.options.instance,
            type: options?.type ?? this.options.type,
            position: options?.position ?? 'top-right',
            timer: options?.timer ?? this.options.timer,
            title: options?.title ?? this.options.title,
            subtitle: options?.subtitle ?? this.options.subtitle,
            darkForce: options?.darkForce ?? this.options.darkForce,
            lightForce: options?.lightForce ?? this.options.lightForce,
            containerClass: options?.containerClass ?? this.options.containerClass,
            theme: options?.theme ?? this.options.theme,
            alertClass: options?.alertClass ?? this.options.alertClass,
            footerClass: options?.footerClass ?? this.options.footerClass,
            divIconClass: options?.divIconClass ?? this.options.divIconClass,
            confirmButttonClass: options?.confirmButttonClass ?? this.options.confirmButttonClass,
            cancelButtonClass: options?.cancelButtonClass ?? this.options.cancelButtonClass,
            confirmButtonText: options?.confirmButtonText ?? this.options.confirmButtonText,
            cancelButtonText: options?.cancelButtonText ?? this.options.cancelButtonText,
            persistent: options?.persistent ?? this.options.persistent,
            onConfirm: options?.onConfirm
        }

        const { alert, cancelButton, confirmButton, container, divIcon, footer, titleMessage, contentDiv } = this.createComponent(options)


        data.forEach((item, index) => {
            contentDiv.style.display = 'grid'
            contentDiv.style.gridTemplateColumns = '1fr'
            contentDiv.style.gap = '12px'
            contentDiv.style.marginBottom = '12px'
            const divContentItem = document.createElement('div')
            divContentItem.classList.add('gooddialogs-input-form-item-box')
            


            const itemLabel = document.createElement('label')
            itemLabel.textContent = item.label
            itemLabel.setAttribute('for','gooddialogs-item-' + index + '-' + item.type )
            const itemDoc = document.createElement('input')
            itemDoc.type = item.type
            itemDoc.name = item.name
            itemDoc.classList.add('gooddialogs-input-form-instance')
            itemDoc.id = 'gooddialogs-item-' + index + '-' + item.type

            
            divContentItem.appendChild(itemLabel)
            divContentItem.appendChild(itemDoc)

            contentDiv.appendChild(divContentItem)

        })

        confirmButton.focus()

        confirmButton.tabIndex = 1
        cancelButton.tabIndex = 2
        titleMessage.textContent = message

        return new Promise((resolve) => {
            const result: { [key: string]: any } = {}



            confirmButton.addEventListener('click', () => {
                const inputsFormElements = document.querySelectorAll('.gooddialogs-input-form-instance')

                inputsFormElements.forEach(item => {
                    if (item instanceof HTMLInputElement) {
                        const name = item.getAttribute('name');
                        let value: any = item.value;
                        if(item.type ==='checkbox'){
                            value = item.checked
                        }
                        if (name) {
                            result[name] = value;
                        }
                    }
                });

                resolve(result)
            })

            cancelButton.addEventListener('click', () => {
                resolve(false)
            })
        })
    }


}

class GooddialogElement extends HTMLElement {
    constructor() {
        super();
        //this.attachShadow({ mode: 'open' });
        //const {alert} = goodDialogs.createComponent({instance: false})
        const alert = document.createElement('div')
        alert.textContent = 'jajajjaj mi customElement'
        //this.shadowRoot?.appendChild(alert)


    }

    connectedCallback() {
        const { container, confirmButton } = goodDialogs.createComponent({ instance: false, persistent: true })
        container.style.position = 'relative'
        container.style.height = '100%'
        container.style.width = 'fit-content'



        this.appendChild(container)
    }

}

export const goodDialogs = new GoodDialogs()
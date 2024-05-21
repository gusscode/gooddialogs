import { goodDialogIcons, infoIcon } from "./icons.service"

interface Options {
    containerClass?: string
    alertClass?: string
    confirmButttonClass?: string
    confirmButtonText?: string
    cancelButtonClass?: string
    cancelButtonText?: string
    footerClass?: string
    persistent?: boolean
    onConfirm?: () => void
}


export class GoodDialog {

    options: Options
    constructor(options?: Options) {

        this.options = {
            containerClass: (options?.containerClass ?? 'gooddialog-container'
                /* 'w-dvw h-dvh bg-gray-900/25 flex items-center justify-center fixed top-0 left-0 z-50 ' */)
            /* + 'dark:text-slate-200 text-slate-800' */
            ,
            alertClass: options?.alertClass ?? 'w-fit bg-slate-700 aparecer p-2 min-w-60 text-slate-200 border border-sky-500/50 rounded-md ',
            confirmButttonClass: options?.confirmButttonClass ?? 'bg-green-700 text-slate-200 px-2 py-1',
            cancelButtonClass: options?.cancelButtonClass ?? 'bg-orange-700 text-slate-200 px-2 py-1',
            footerClass: options?.footerClass ?? 'w-full grid grid-cols-2 gap-2',
            confirmButtonText: options?.confirmButtonText ?? 'Confirm',
            cancelButtonText: options?.cancelButtonText ?? 'Cancel',
            persistent: options?.persistent ?? false
        }

    }

    private createComponent = (options?: Options) => {

        const optionsAlert: Options = {
            containerClass: options?.containerClass ?? this.options.containerClass,
            alertClass: options?.alertClass ?? this.options.alertClass,
            footerClass: options?.footerClass ?? this.options.footerClass,
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
        const titleMessage = document.createElement('h1')
        const divIcon = document.createElement('div')

        divIcon.innerHTML = goodDialogIcons['infoIcon']
        divIcon.classList.value = 'w-full h-20 flex items-center justify-center gooddialog-svg-container'
        //titleMessage.innerText = message
        titleMessage.classList.value = 'text-center'

        messageElement.appendChild(divIcon)
        messageElement.appendChild(titleMessage)
        alert.appendChild(messageElement)

        container.classList.value = optionsAlert.containerClass!
        alert.classList.value = optionsAlert.alertClass!
        footer.classList.value = optionsAlert.footerClass!

        alert.appendChild(footer)


        document.documentElement.appendChild(container)

        if (!optionsAlert.persistent) {

            container.addEventListener('click', (e: any) => {
                const eventElement = e.target as HTMLElement

                if (eventElement.classList.contains('gooddialog-container')) {
                    const containerElements = document.getElementsByClassName('gooddialog-container')
                    if (containerElements.length > 1) {

                        container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
                    } else {
                        container.classList.add('gooddialog-container-fade-out')
                        container.addEventListener('animationend', () => {
                            container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
                        })
                    }
                    alert.classList.add('desaparecer')
                    //container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'

                    /* container.classList.add('gooddialog-container-fade-out')
                    container.addEventListener('animationend', () => {
                        container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
                    }) */
                    alert.addEventListener('animationend', () => {
                        container.remove()
                    })

                }
            })
        }
        //container.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
        /* container.style.transition = "background-color 300ms";
        container.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; */

        const containerElements = document.getElementsByClassName('gooddialog-container')
        if (containerElements.length > 1) {
            console.log('ya existe un contenedor: ' + containerElements.length);

        } else {
            container.classList.add('gooddialog-container-fade-in')
        }
        container!.appendChild(alert)



        const confirmButton = document.createElement('button');
        confirmButton.classList.value = optionsAlert.confirmButttonClass!
        confirmButton.textContent = optionsAlert.confirmButtonText!;
        confirmButton.addEventListener('click', () => {
            const containerElements = document.getElementsByClassName('gooddialog-container')
            if (containerElements.length >= 1) {

                container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
            } else {
                container.classList.add('gooddialog-container-fade-out')
                container.addEventListener('animationend', () => {
                    container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
                })
            }
            alert.classList.add('desaparecer')
            //container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'

            /* container.classList.add('gooddialog-container-fade-out')
            container.addEventListener('animationend', () => {
                container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
            }) */
            alert.addEventListener('animationend', () => {
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
            if (containerElements.length >= 1) {

                container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
            } else {

                container.classList.add('gooddialog-container-fade-out')
                container.addEventListener('animationend', () => {
                    container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
                })
            }
            alert.classList.add('desaparecer')
            //container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'

            alert.addEventListener('animationend', () => {
                container.remove()
            })

        });

        footer.appendChild(cancelButton);

        return {
            footer, container, alert, confirmButton, cancelButton, divIcon, titleMessage
        }
    }

    confirm = async (message: string, options?: Options, onResponseCB?: (data: HTMLButtonElement) => void): Promise<boolean> => {

        const optionsAlert: Options = {
            containerClass: options?.containerClass ?? this.options.containerClass,
            alertClass: options?.alertClass ?? this.options.alertClass,
            footerClass: options?.footerClass ?? this.options.footerClass,
            confirmButttonClass: options?.confirmButttonClass ?? this.options.confirmButttonClass,
            cancelButtonClass: options?.cancelButtonClass ?? this.options.cancelButtonClass,
            confirmButtonText: options?.confirmButtonText ?? this.options.confirmButtonText,
            cancelButtonText: options?.cancelButtonText ?? this.options.cancelButtonText,
            persistent: options?.persistent ?? this.options.persistent,
            onConfirm: options?.onConfirm
        }

        return new Promise<boolean>((resolve) => {
            // Crear elementos dentro del div

            const container = document.createElement('div',)
            const alert = document.createElement('div',)
            const footer = document.createElement('footer')




            const messageElement = document.createElement('section')
            const titleMessage = document.createElement('h1')
            const divIcon = document.createElement('div')

            divIcon.innerHTML = goodDialogIcons['infoIcon']
            divIcon.classList.value = 'w-full h-20 flex items-center justify-center gooddialog-svg-container'
            titleMessage.innerText = message
            titleMessage.classList.value = 'text-center'

            messageElement.appendChild(divIcon)
            messageElement.appendChild(titleMessage)
            alert.appendChild(messageElement)

            container.classList.value = optionsAlert.containerClass!
            alert.classList.value = optionsAlert.alertClass!
            footer.classList.value = optionsAlert.footerClass!

            alert.appendChild(footer)


            document.documentElement.appendChild(container)

            if (!optionsAlert.persistent) {

                container.addEventListener('click', (e: any) => {
                    const eventElement = e.target as HTMLElement

                    if (eventElement.classList.contains('gooddialog-container')) {
                        const containerElements = document.getElementsByClassName('gooddialog-container')
                        if (containerElements.length > 1) {

                            container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
                        } else {
                            container.classList.add('gooddialog-container-fade-out')
                            container.addEventListener('animationend', () => {
                                container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
                            })
                        }
                        alert.classList.add('desaparecer')
                        //container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'

                        /* container.classList.add('gooddialog-container-fade-out')
                        container.addEventListener('animationend', () => {
                            container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
                        }) */
                        alert.addEventListener('animationend', () => {
                            container.remove()
                        })

                    }
                })
            }
            //container.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
            /* container.style.transition = "background-color 300ms";
            container.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; */

            const containerElements = document.getElementsByClassName('gooddialog-container')
            if (containerElements.length > 1) {
                console.log('ya existe un contenedor: ' + containerElements.length);

            } else {
                container.classList.add('gooddialog-container-fade-in')
            }
            container!.appendChild(alert)



            const confirmarBoton = document.createElement('button');
            confirmarBoton.classList.value = optionsAlert.confirmButttonClass!
            confirmarBoton.textContent = optionsAlert.confirmButtonText!;
            confirmarBoton.addEventListener('click', () => {
                const containerElements = document.getElementsByClassName('gooddialog-container')
                if (containerElements.length >= 1) {

                    container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
                } else {
                    container.classList.add('gooddialog-container-fade-out')
                    container.addEventListener('animationend', () => {
                        container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
                    })
                }
                alert.classList.add('desaparecer')
                //container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'

                /* container.classList.add('gooddialog-container-fade-out')
                container.addEventListener('animationend', () => {
                    container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
                }) */
                alert.addEventListener('animationend', () => {
                    container.remove()
                })
                resolve(true)
                if (optionsAlert.onConfirm) {
                    optionsAlert.onConfirm()
                }
            });

            if (onResponseCB) {
                onResponseCB(confirmarBoton)
            }
            footer.appendChild(confirmarBoton);

            const cancelarBoton = document.createElement('button');
            cancelarBoton.classList.value = optionsAlert.cancelButtonClass!
            cancelarBoton.textContent = optionsAlert.cancelButtonText!;
            cancelarBoton.addEventListener('click', () => {
                const containerElements = document.getElementsByClassName('gooddialog-container')
                if (containerElements.length >= 1) {

                    container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
                } else {

                    container.classList.add('gooddialog-container-fade-out')
                    container.addEventListener('animationend', () => {
                        container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
                    })
                }
                alert.classList.add('desaparecer')
                //container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
                resolve(false)
                alert.addEventListener('animationend', () => {
                    container.remove()
                })

            });

            footer.appendChild(cancelarBoton);
        });
    }

    async whitOptions<T>(message: string, optionsButtons: { label: string, value: T, onClickL?: () => void }[], options?: Options) {
        const optionsAlert: Options = {
            containerClass: options?.containerClass ?? this.options.containerClass,
            alertClass: options?.alertClass ?? this.options.alertClass,
            footerClass: options?.footerClass ?? this.options.footerClass,
            confirmButttonClass: options?.confirmButttonClass ?? this.options.confirmButttonClass,
            cancelButtonClass: options?.cancelButtonClass ?? this.options.cancelButtonClass,
            onConfirm: options?.onConfirm
        }

        return new Promise<T>((resolve) => {
            // Crear elementos dentro del div

            const container = document.createElement('div',)
            const alert = document.createElement('div',)
            const footer = document.createElement('footer')

            const messageElement = document.createElement('section')
            const titleMessage = document.createElement('h1')
            titleMessage.innerText = message

            messageElement.appendChild(titleMessage)
            alert.appendChild(messageElement)

            container.classList.value = optionsAlert.containerClass!
            alert.classList.value = optionsAlert.alertClass!
            footer.classList.value = optionsAlert.footerClass!

            alert.appendChild(footer)


            document.documentElement.appendChild(container)
            const containerElements = document.getElementsByClassName('gooddialog-container')
            if (containerElements.length > 1) {
                console.log('ya existe un contenedor: ' + containerElements.length);

            } else {
                container.classList.add('gooddialog-container-fade-in')
            }
            container!.appendChild(alert)

            optionsButtons.forEach(option => {
                const buttonOpt = document.createElement('button')
                buttonOpt.classList.value = 'p-1 bg-green-700'
                buttonOpt.textContent = option.label
                buttonOpt.addEventListener('click', () => {
                    if (option.onClickL) {
                        option.onClickL()
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
                    alert.classList.add('desaparecer')
                    alert.addEventListener('animationend', () => {
                        container.remove()
                    })
                    if (optionsAlert.onConfirm) {
                        optionsAlert.onConfirm()
                    }
                    resolve(option.value)
                })
                footer.appendChild(buttonOpt)
            })


        });
    }

    success(message?: string, options?: Options) {
        const optionsAlert: Options = {
            containerClass: options?.containerClass ?? this.options.containerClass,
            alertClass: options?.alertClass ?? this.options.alertClass,
            footerClass: options?.footerClass ?? this.options.footerClass,
            confirmButttonClass: options?.confirmButttonClass ?? this.options.confirmButttonClass,
            cancelButtonClass: options?.cancelButtonClass ?? this.options.cancelButtonClass,
            confirmButtonText: options?.confirmButtonText ?? this.options.confirmButtonText,
            cancelButtonText: options?.cancelButtonText ?? this.options.cancelButtonText,
            onConfirm: options?.onConfirm
        }
        //console.log(optionsAlert);


        const container = document.createElement('div',)
        const alert = document.createElement('div',)
        const footer = document.createElement('footer')

        const messageElement = document.createElement('section')
        const titleMessage = document.createElement('h1')
        const divIcon = document.createElement('div')

        divIcon.innerHTML = goodDialogIcons['okIcon']
        divIcon.classList.value = 'w-full h-20 flex items-center justify-center gooddialog-svg-container-ok overflow-visible'
        titleMessage.innerText = message ?? 'Success'
        titleMessage.classList.value = 'text-center'

        messageElement.appendChild(divIcon)
        messageElement.appendChild(titleMessage)
        alert.appendChild(messageElement)

        container.classList.value = optionsAlert.containerClass!
        alert.classList.value = optionsAlert.alertClass!
        footer.classList.value = 'w-full flex items-center justify-center'

        alert.appendChild(footer)


        document.documentElement.appendChild(container)
        //container.classList.add('gooddialog-container-fade-in')
        const containerElements = document.getElementsByClassName('gooddialog-container')
        if (containerElements.length > 1) {
            console.log('ya existe un contenedor: ' + containerElements.length);

        } else {
            container.classList.add('gooddialog-container-fade-in')
        }
        container!.appendChild(alert)


        const confirmarBoton = document.createElement('button');
        confirmarBoton.classList.value = optionsAlert.confirmButttonClass!
        confirmarBoton.textContent = 'Ok';
        confirmarBoton.addEventListener('click', () => {
            const containerElements = document.getElementsByClassName('gooddialog-container')
            if (containerElements.length > 1) {

                container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
            } else {
                container.classList.add('gooddialog-container-fade-out')
                container.addEventListener('animationend', () => {
                    container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
                })
            }
            alert.classList.add('desaparecer')
            container.classList.add('gooddialog-container-fade-out')
            container.addEventListener('animationend', () => {
                container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
            })
            //container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
            alert.addEventListener('animationend', () => {
                container.remove()
            })

        });


        footer.appendChild(confirmarBoton);

    }

    cancelled(message?: string, options?: Options) {
        const optionsAlert: Options = {
            containerClass: options?.containerClass ?? this.options.containerClass,
            alertClass: options?.alertClass ?? this.options.alertClass,
            footerClass: options?.footerClass ?? this.options.footerClass,
            confirmButttonClass: options?.confirmButttonClass ?? this.options.confirmButttonClass,
            cancelButtonClass: options?.cancelButtonClass ?? this.options.cancelButtonClass,
            confirmButtonText: options?.confirmButtonText ?? this.options.confirmButtonText,
            cancelButtonText: options?.cancelButtonText ?? this.options.cancelButtonText,
            onConfirm: options?.onConfirm
        }
        //console.log(optionsAlert);


        const container = document.createElement('div',)
        const alert = document.createElement('div',)
        const footer = document.createElement('footer')

        const messageElement = document.createElement('section')
        const titleMessage = document.createElement('h1')
        const divIcon = document.createElement('div')

        divIcon.innerHTML = goodDialogIcons['cancelIcon']
        divIcon.classList.value = 'w-full h-20 flex items-center justify-center gooddialog-svg-container-cancel'
        titleMessage.innerText = message ?? 'Camcelled'
        titleMessage.classList.value = 'text-center'

        messageElement.appendChild(divIcon)
        messageElement.appendChild(titleMessage)
        alert.appendChild(messageElement)

        container.classList.value = optionsAlert.containerClass!
        alert.classList.value = optionsAlert.alertClass!
        footer.classList.value = 'w-full flex items-center justify-center'

        alert.appendChild(footer)


        document.documentElement.appendChild(container)
        const containerElements = document.getElementsByClassName('gooddialog-container')
        if (containerElements.length > 1) {
            console.log('ya existe un contenedor: ' + containerElements.length);

        } else {
            container.classList.add('gooddialog-container-fade-in')
        }

        container!.appendChild(alert)


        const confirmarBoton = document.createElement('button');
        confirmarBoton.classList.value = optionsAlert.confirmButttonClass!
        confirmarBoton.textContent = 'Ok';
        confirmarBoton.addEventListener('click', () => {
            const containerElements = document.getElementsByClassName('gooddialog-container')
            if (containerElements.length > 1) {

                container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
            } else {
                container.classList.add('gooddialog-container-fade-out')
                container.addEventListener('animationend', () => {
                    container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
                })
            }
            alert.classList.add('desaparecer')
            //container.style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
            alert.addEventListener('animationend', () => {
                container.remove()
            })

        });


        footer.appendChild(confirmarBoton);
    }
}

export const goodDialog = new GoodDialog({ cancelButtonText: 'Cancelar', confirmButtonText: 'Confirmar' })
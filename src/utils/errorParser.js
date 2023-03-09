function errorParser(err) {
    if (err instanceof Error) {
        const { response: { data: { message } } } = err
        if (message) {
            var parsedError = { error: '' }
            if (Array.isArray(message)) {
                message.forEach(e => {
                    if (e instanceof Object) {
                        for (const key in e) {
                            if (key === 'ticket') return { error: 'Ticket is required or session expired. Please try again.' }
                            parsedError[key] = e[key]
                        }
                    } else parsedError = { error: e }
                })
            } else if (message instanceof Object) {
                for (const key in message) {
                    parsedError[key] = message[key]
                }
            } else if (typeof message === 'string') return { error: message }
            return parsedError
        }
        return { error: err?.message }
    }
    return err
}

export default errorParser;
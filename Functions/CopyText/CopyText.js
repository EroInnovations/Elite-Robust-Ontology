function COPY(text, onSuccess) {
    navigator.clipboard.writeText(text).then(() => {
        if (onSuccess) {
            onSuccess();
        }
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
};

export {COPY};
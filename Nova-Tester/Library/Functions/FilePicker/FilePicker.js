const FILEPICKER = (callback) => {
    const input = document.createElement("input");
    input.type = "file";
    input.style.display = "none";
    input.accept = "*/*"; // Allow all file types
    document.body.appendChild(input);

    input.addEventListener("change", function () {
        var file = this.files[0];
        if (!file) return;

        // Check the file size (10MB = 10 * 1024 * 1024 bytes)
        const MAX_SIZE = 10 * 1024 * 1024; // 10MB
        if (file.size > MAX_SIZE) {
            TOAST("The file is too large. Please select a file smaller than 10MB.");
            return;
        }

        var reader = new FileReader();
        reader.onload = function (event) {
            var base64Data = event.target.result;
            // Call the callback with the raw Base64 data (no compression)
            callback(base64Data);
        };
        reader.readAsDataURL(file);
    });

    input.click();
    input.remove();
};

export { FILEPICKER };

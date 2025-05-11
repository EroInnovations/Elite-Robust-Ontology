const CAMERA = (imageElement, callback) => {
    // Check if camera access is available
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                var video = document.createElement("video");
                video.srcObject = stream;
                video.play();
                document.body.appendChild(video);
    
                // Create a button to capture the image
                var captureButton = document.createElement("button");
                captureButton.innerHTML = "Capture Image";
                document.body.appendChild(captureButton);
    
                captureButton.addEventListener("click", function () {
                    // Create a canvas to capture the image
                    var canvas = document.createElement("canvas");
                    var ctx = canvas.getContext("2d");
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    
                    // Convert the image to base64
                    var base64Data = canvas.toDataURL("image/jpeg", 0.7);

                    // Check if the base64 data length is under the limit
                    if (base64Data.length < 49800) {
                        imageElement.src = base64Data;
                        callback(base64Data);

                        // Save the base64 data to sessionStorage
                        sessionStorage.setItem("TakenPhoto", base64Data);
                    } else {
                        TOAST("Image Format Error");
                    }

                    // Stop the camera stream after capture
                    stream.getTracks().forEach(track => track.stop());
                    video.remove();
                    captureButton.remove();
                });
            })
            .catch(function (err) {
                TOAST("Camera access denied or unavailable");
            });
    } else {
        TOAST("Camera not supported");
    }
};

export{CAMERA};

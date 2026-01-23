const cameraFeed = document.getElementById('cameraFeed');

navigator.mediaDevices.getUserMedia({video: true})
.then(stream => {
    cameraFeed.srcObject = stream;
})
.catch(error => {
    console.error('Error acessing camera:' , error);
})
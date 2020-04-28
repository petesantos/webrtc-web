
var video = document.getElementById('video');
var photo = document.getElementById('photo');

function snapPhoto() {
  photoContext.drawImage(video, 0, 0, photo.width, photo.height);
  show(photo, sendBtn);
}

const withErrorHandling = (message, WrappedFn) => async (...args) => {
  try {
    return await WrappedFn(...args)
  } catch (e) {
    alert(`${message} : ${e.name}`)
  }
}

const getWebCamVideo = withErrorHandling('getUserMediaError', async () => {
  gotStream(await navigator.mediaDevices.getUserMedia({video: true}))
})

const takePhoto = (videoEl, photoEl) => {
  const photContext = photoEl.getContext('2d')
  photoContext.drawImage(videoEl, 0, 0, photoEl.width, photoEl.height)
  show(photoEl, sendBtn)
}
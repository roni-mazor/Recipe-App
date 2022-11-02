export const imageUploadService = {
    uploadImg,
    imgFromLink,
}





async function imgFromLink(src: string) {
    return new Promise((resolve, reject) => {
        const image = new Image()
        image.onload = () => {
            console.log(image.height)
            console.log(image.width)
            const proportion = image.width / image.height
            if (proportion >= 6 / 7 && proportion <= 7 / 4) {
                resolve(image.src)
            } else resolve(false)
        }
        image.src = src


    })
}
async function uploadImg(ev: any) {
    const CLOUD_NAME = "dcwibf9o5"
    const UPLOAD_PRESET = "vt0iqgff"
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

    const formData = new FormData()
    formData.append('upload_preset', UPLOAD_PRESET)
    formData.append('file', ev.target.files[0])

    try {
        const res = await fetch(UPLOAD_URL, {
            method: 'POST',
            body: formData
        })
        const resData = await res.json()
        const proportion = resData.width / resData.height
        if (proportion >= 6 / 7 && proportion <= 7 / 4) {
            return resData.url
        } else return false // something better maybe
    } catch (err) {
        console.error(err)
    }

}
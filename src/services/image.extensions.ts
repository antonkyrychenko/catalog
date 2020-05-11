export const imageToDataUrl = (imageFile: any, callback: any) => {
    var reader = new FileReader();

    reader.readAsDataURL(imageFile);
    reader.onloadend = (e: any) => callback(reader.result);
}
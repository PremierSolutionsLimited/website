/* eslint-disable no-useless-concat */
import * as React from "react";
// import { ImageListType, ImageType } from "react-images-uploading";
// import { storage } from "../../services/firebase";

let storage: any;

export type ImageUrlProps = {
  name: string;
  fileUrl: string;
};

// for multiple image upload to firebase
const useMultipleImageUpload = () => {
  const [load, setLoad] = React.useState<number | null>(null);

  const handleFileSelection = async (images: any) => {
    // get files
    let imageUrls: ImageUrlProps[] = [];
    for (let i = 0; i < images.length; i++) {
      let imageFile: File = images[i];
      let singleImageUrl: ImageUrlProps = await uploadImageAsPromise(
        imageFile,
        i
      );
      imageUrls.push(singleImageUrl);
    }
    return imageUrls;
  };

  //handle waiting to upload each file to firebase using promise
  const uploadImageAsPromise = async (
    imageFile: any,
    i: number
  ): Promise<ImageUrlProps> => {
    return new Promise(function (resolve, reject) {
      let fileName = `${imageFile.file?.name.split(".")[0]}`;
      let storageRef = storage.ref("store" + "/" + fileName);
      setLoad(i + 1);

      //Upload file with data url
      let task = storageRef.putString(imageFile.dataURL as string, "data_url");

      //Update progress bar
      task.on(
        "state_changed",
        function progress(snapshot: any) {
          // let percentage =
          //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // uploader.value = percentage;
        },
        function error(err: any) {
          reject(err);
        },
        function complete() {
          storage
            .ref("store")
            .child(fileName)
            .getDownloadURL()
            .then((downloadURL: string) => {
              setLoad(null);
              let imageUrlsss: ImageUrlProps = {
                name: fileName,
                fileUrl: downloadURL,
              };
              resolve(imageUrlsss);
            });
        }
      );
    });
  };

  return { handleFileSelection, load };
};

export default useMultipleImageUpload;

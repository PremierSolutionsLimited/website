import { useState } from "react";
import { storage } from "../../services/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

const useImageUpload = (assetFolderName: string) => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState<number | null>(null);

  const upload = (file: File): Promise<string> =>
    new Promise<string>((resolve, reject) => {
      setLoading(true); // true
      const fileNewName: string = new Date().toString() + file.name;
      const storeRef = ref(storage, `${assetFolderName}/${fileNewName}`);
      const uploadTask = uploadBytesResumable(storeRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot:any) => {
          let initProgress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(initProgress);
        },
        (error:any) => {
          setLoading(false);
          reject(error);
        },
        () => {
          // storage
          //   .ref(assetFolderName)
          //   .child(fileNewName)
          //   .getDownloadURL()
          //   .then((url:any) => {
          //     setLoading(false);
          //     resolve(url);
          //   })
          //   .catch((e: any) => reject(e));
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setLoading(false);
            resolve(downloadURL);
          }).catch((e: any) => reject(e));
        }
      );
    });

  return { upload, progress, loading };
};

export default useImageUpload;

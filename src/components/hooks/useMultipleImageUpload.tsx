import { useState } from "react";
import { storage } from "../../services/firebase";

const useImageUpload = (assetFolderName: string) => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState<number | null>(null);

  const upload = (file: File): Promise<string> =>
    new Promise<string>((resolve, reject) => {
      setLoading(true); // true
      const fileNewName: string = new Date().toString() + file.name;
      const uploadTask = storage
        .ref(`${assetFolderName}/${fileNewName}`)
        .put(file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          let initProgress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(initProgress);
        },
        (error) => {
          setLoading(false);
          reject(error);
        },
        () => {
          storage
            .ref(assetFolderName)
            .child(fileNewName)
            .getDownloadURL()
            .then((url) => {
              setLoading(false);
              resolve(url);
            })
            .catch((e) => reject(e));
        }
      );
    });

  return { upload, progress, loading };
};

export default useImageUpload;

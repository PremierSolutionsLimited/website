export const getImage = (imageFile1: any, imageFile2: any, imageFile3: any) => {
  let files: any = [];

  if (imageFile1) {
    files.push({
      value: imageFile1,
    });
  }

  if (imageFile2) {
    files.push({
      value: imageFile2,
    });
  }
  if (imageFile3) {
    files.push({
      value: imageFile3,
    });
  }

  return files;
};

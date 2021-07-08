export const getImage = (
  driverFile: any,
  driverLicenseFrontFile: any,
  driverLicenseBackFile: any
) => {
  let files: any = [];

  let driverFiles: any = {
    driverFile: driverFile,
    driverLicenseFront: driverLicenseFrontFile,
    driverLicenseBack: driverLicenseBackFile,
  };

  for (let file in driverFiles) {
    files.push(file);
  }

  return files;
};

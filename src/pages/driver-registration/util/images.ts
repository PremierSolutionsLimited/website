export const getImage = (
    driverFile: any,
    driverLicenseFrontFile: any,
    driverLicenseBackFile: any
) => {
  let files: any = [];

  files.push({
    value: driverFile,
  });
  files.push({
    value: driverLicenseFrontFile,
  });
  files.push({
    value: driverLicenseBackFile,
  });
  return files;
};

export const getImage = (
  driverFile: any,
  ghanaCardFrontFile: any,
  ghanaCardBackFile: any,
  driverLicenseFrontFile: any,
  driverLicenseBackFile: any,
  certImageFile: any
) => {
  let files: any = [];

  files.push({
    value: driverFile,
  });
  files.push({
    value: ghanaCardFrontFile,
  });

  files.push({
    value: ghanaCardBackFile,
  });
  files.push({
    value: driverLicenseFrontFile,
  });
  files.push({
    value: driverLicenseBackFile,
  });
  files.push({
    value: certImageFile,
  });

  return files;
};

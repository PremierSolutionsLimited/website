interface Props {
  driverFile: any;
  driverLicenseFrontFile: any;
  driverLicenseBackFile: any;
}
export const getImage = ({
  driverFile,
  driverLicenseFrontFile,
  driverLicenseBackFile,
}: Props) => {
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

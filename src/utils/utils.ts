export const componentToHex = (num: number) => {
  const hex = Math.abs(num).toString(16);
  if (hex.length === 1) {
    return "0" + hex;
  }
  return hex;
};
export const rgbToHex = (r: number, g: number, b: number) => {
  const hex = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  return hex;
};

export const getRandomHexNumber = () => {
  return Math.floor(Math.random() * 256);
};

export const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex) || "";

  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
};

export const getStartingColour = () => {
  const hexCode = rgbToHex(
    getRandomHexNumber(),
    getRandomHexNumber(),
    getRandomHexNumber()
  );
  return hexCode;
};

export const gameFinishPercentage = (startHex: string, finishHex: string) => {
  const { r: startRed, g: startGreen, b: startBlue } = hexToRgb(startHex);
  const { r: finishRed, g: finishGreen, b: finishBlue } = hexToRgb(finishHex);

  const maxDistance = Math.sqrt(255 ** 2 + 255 ** 2 + 255 ** 2);

  const redDistance = Math.sqrt((startRed - finishRed) ** 2);
  const greenDistance = Math.sqrt((startGreen - finishGreen) ** 2);
  const blueDistance = Math.sqrt((startBlue - finishBlue) ** 2);

  const redPercentage = (1 - redDistance / maxDistance) * 100;
  const greenPercentage = (1 - greenDistance / maxDistance) * 100;
  const bluePercentage = (1 - blueDistance / maxDistance) * 100;

  const totalPercentage =
    (redPercentage + greenPercentage + bluePercentage) / 3;

  return {
    r: Number(redPercentage.toFixed(0)),
    g: Number(greenPercentage.toFixed(0)),
    b: Number(bluePercentage.toFixed(0)),
    total: Number(totalPercentage.toFixed(0)),
  };
};

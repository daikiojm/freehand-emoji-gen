export const useStaticConfig = () => {
  const config = {
    freehandCanvasWidth: 500,
    freehandCanvasHeight: 500,
    outputImageWidth: 128,
    outputImageHeight: 128,
    outputImageExtension: 'png',
    outputImageDefaultName: 'image_freehand',
    swatches: [
      ['#000000'],
      ['#FFFFFF'],
      ['#3AB0C7'],
      ['#38BA91'],
      ['#EC71A1'],
      ['#EAA822'],
      ['#1111FF'],
      ['#00BB00'],
      ['#FF0000'],
    ],
  } as const

  return {
    ...config,
  }
}

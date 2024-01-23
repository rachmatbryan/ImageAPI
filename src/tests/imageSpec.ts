import resizeImage from '../utilities/imagemodules';

describe('Testing image processing', () => {
  it('Throws a missing input error if the wrong filename is provided', async () => {
    await expectAsync(resizeImage('alaska', 200, 200)).toBeRejectedWithError(
      Error,
      'Input file is missing: C:\\Users\\rachm\\OneDrive\\Desktop\\EX\\Project1\\images\\original\\alaska.jpg'
    );
  });

  it('Resolves succesfully when provided the right filename, height and width parameters', async () => {
    await expectAsync(resizeImage('encenadaport', 200, 200)).toBeResolved();
  });
});

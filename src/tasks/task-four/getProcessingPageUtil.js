const handleProcess = () => {
  console.log('...processing');
  setTimeout(() => {
    console.log('fetch some data');
  }, 2000);
};

const handleError = (errorCode) => {
  switch (errorCode) {
    case 'NO_STOCK':
      return { title: 'Error page', message: 'No stock has been found' };
    case 'INCORRECT_DETAILS':
      return {
        title: 'Error page',
        message: 'Incorrect details have been entered',
      };
    case null:
      return { title: 'Error page', message: null };
    case undefined:
      return { title: 'Error page', message: null };
    default:
      break;
  }
};

const handleSuccess = () => ({ title: 'Order complete', message: null });

export const getProcessingPage = (array) => {
  array.forEach(({ state, errorCode }) => {
    switch (state) {
      case 'processing':
        handleProcess();
        break;
      case 'error':
        handleError(errorCode);
        break;
      case 'success':
        handleSuccess();
        break;
      default:
        break;
    }
  });
};

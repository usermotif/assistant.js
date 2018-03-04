import html2canvas from 'html2canvas';

const getSnapshot = function (el) {
  return new Promise((fulfill, reject) => {
    html2canvas(el).then(canvas => {
      fulfill(canvas);
    });
  });
};

export { getSnapshot };

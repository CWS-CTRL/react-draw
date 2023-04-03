const downloadSVG = (svgEle: SVGSVGElement) => {
  const data = svgEle.outerHTML || '';
  const blob = new Blob([data], { type: 'image/svg+xml' });
  const aEle = window.document.createElement('a');
  aEle.href = window.URL.createObjectURL(blob);
  aEle.download = 'svgloading.svg';
  document.body.appendChild(aEle);
  aEle.click();
  document.body.removeChild(aEle);
};

export default downloadSVG;

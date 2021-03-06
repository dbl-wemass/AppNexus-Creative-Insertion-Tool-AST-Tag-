let getOffset=(el) => {
  var _x = 0;
  var _y = 0;
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft;
    _y += el.offsetTop;
    el = el.offsetParent;
  }
  return {
    top: _y,
    left: _x
  };
};
export {getOffset}
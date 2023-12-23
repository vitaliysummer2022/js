document.querySelectorAll('div img').forEach(el => {
  el.onmousedown = e => {
    document.body.append(el);
    el.style.position = 'absolute';
    el.ondragstart = () => false;

    moveItem(e);
    function moveItem(e) {
      el.style.top = e.pageY - el.height / 2 + 'px';
      el.style.left = e.pageX - el.width / 2 + 'px';
    }

    document.onmousemove = e => moveItem(e);
    el.onmouseup = () => document.onmousemove = '';
  };
});
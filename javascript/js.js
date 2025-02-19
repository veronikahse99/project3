train.onclick = function() {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      train.style.left = timePassed / 5 + 'px';
      train.style.top = timePassed / 15 + 'px';

      if (timePassed > 2000) clearInterval(timer);

    }, 20);
  }
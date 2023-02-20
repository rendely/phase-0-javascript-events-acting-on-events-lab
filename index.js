function bindKeydown() {
  document.addEventListener('keydown', function (e) {
    switch (e.key) {
      case 'ArrowLeft':
        moveDodgerLeft();
        break;
      case 'ArrowRight':
        moveDodgerRight();
        break;
    }

  });
}

function moveDodgerLeft() {
  const dodger = document.getElementById('dodger');
  const left_num = parseInt(dodger.style.left);
  if (left_num > 0) {
    dodger.style.left = `${left_num - 10}px`;
  }
};
function moveDodgerRight() {
  const dodger = document.getElementById('dodger');
  const left_num = parseInt(dodger.style.left);
  const parent_width = parseInt(document.getElementById('game').offsetWidth);
  const dodger_width = parseInt(dodger.offsetWidth);
  if (left_num < 400 - 40) {
    dodger.style.left = `${left_num + 10}px`;
  }
};

bindKeydown()
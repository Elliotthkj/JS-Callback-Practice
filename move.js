
function move(element) {
  element.style.position = "fixed";
  let x = 0;
  let y = 0;

  function moveToCoordinates(left, bottom) {
    x = left;
    y = bottom;
    element.style.left = x + "px";
    element.style.bottom = y + "px";
  }

  return {
    to: moveToCoordinates,
    withArrowKeys: function () {
      let direction = null;

      function moveCharacter() {
        if (direction === "west") {
          x -= 1;
        }
        if (direction === "north") {
          y += 1;
        }
        if (direction === "east") {
          x += 1;
        }
        if (direction === "south") {
          y -= 1;
        }
        element.style.left = x + "px";
        element.style.bottom = y + "px";
      }

      setInterval(moveCharacter, .0001);

      document.addEventListener("keydown", function (e) {
        if (e.repeat) return;

        if (e.key === "ArrowLeft") {
          direction = "west";
        }
        if (e.key === "ArrowUp") {
          direction = "north";
        }
        if (e.key === "ArrowRight") {
          direction = "east";
        }
        if (e.key === "ArrowDown") {
          direction = "south";
        }
        handleDirectionChange(direction);
      });

      document.addEventListener("keyup", function (e) {
        direction = null;
        handleDirectionChange(direction);
      });
    },
  };
}
$(document).ready(function () {
  flavors = ["pistachio", "chocolate", "green tea"];

  listToDisplay = [".flavor1", ".flavor2", ".flavor3"];

  let counter = 0;
  flavors.forEach(function (flavor) {
    $(listToDisplay[counter]).text("I love " + flavor + ".");
    counter += 1;
  });
});

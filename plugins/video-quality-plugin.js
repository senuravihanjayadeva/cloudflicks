import videojs from "video.js";

videojs.registerPlugin("customVideoQualityChanger", function (options) {
  const player = this;

  player.ready(() => {
    let myButton = player.controlBar.addChild(
      "button",
      {},
      player.controlBar.children().length
    );

    // Create our button's DOM Component
    let selectBoxContainer = myButton.el();
    selectBoxContainer.id = "custom-select-quality"
    selectBoxContainer.classList.add("custom-select-quality");
    selectBoxContainer.classList.add("vjs-button");
    selectBoxContainer.style.marginRight = "2px"
    selectBoxContainer.style.marginLeft = "2px"

    const selectBox = document.createElement("select");
    selectBox.id = "video-quality-select-box";
    // styles for the select
    selectBox.style.backgroundColor = "transparent";
    selectBox.style.cursor = "pointer";
    selectBox.style.color = "#ffffff";

    options.sources && options.sources.forEach((option) => {
      const opt = document.createElement("option");
      // styles for the option
      opt.style.backgroundColor = "rgb(109, 110, 111)";
      opt.style.padding = "3px";
      opt.value = option.src;
      opt.text = option.quality;
      selectBox.appendChild(opt);
    });

    selectBox.onchange = function () {
      const source = this.value;
      player.src(source);
    };

    selectBoxContainer.appendChild(selectBox);
  });
});

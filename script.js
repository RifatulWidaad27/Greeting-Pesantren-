const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const nameInput = document.getElementById("name");
const downloadBtn = document.getElementById("download-btn");

const image = new Image();
image.src = "MLM3.png";
image.onload = function () {
  drawImage();
};

//var textWidth = ctx.measureText(nameInput).width

function drawImage() {
  // ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  ctx.font = "35px ara hamah kilania";
  ctx.fillStyle = "#000000";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";

  ctx.fillText(nameInput.value, canvas.width / 2, 860);
}

nameInput.addEventListener("input", function () {
  drawImage();
});

downloadBtn.addEventListener("click", download);

function download() {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "Ied Greeting Card - " + nameInput.value;
  link.click();
}

//downloadBtn.addEventListener("click", function () {
//downloadBtn.href = canvas.toDataURL("image/png", 1);
//downloadBtn.download = "Ied Greeting Card - " + nameInput.value;
// console.log(downloadBtn.href);
//downloadBtn.click();
//});

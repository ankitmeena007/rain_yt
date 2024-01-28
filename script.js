
const canvas = document.querySelector("#canvas");

// Set canvas size to fit the real size
const rect = canvas.getBoundingClientRect();
canvas.width = rect.width;
canvas.height = rect.height;

const raindropFx = new RaindropFX({
    canvas: canvas,
    // background: "path/to/backgroundImage",
    background: "https://i.imgur.com/YwQ85yC.jpeg",
    
});
raindropFx.start();

// Resize the effect renderer
window.onresize = () =>
{
    const rect = canvas.getBoundingClientRect();
    raindropFx.resize(rect.width, rect.height);
}

//Week 1 Share Your Sketch - My Second Sketch!- RECREATING THE DARK SIDE OF THE MOON ALBUM COVER IN P5

//Setting up the canvas
function setup() {
  createCanvas(800, 800);
  background(0);

  noFill();
  stroke(255);
  strokeWeight(2);

  // Variables for the triangle
  let centerX = 400; // Center of the canvas
  let centerY = 400; // Vertical center for the base of the triangle
  let sideLength = 200; // Length of each side of the triangle
  let height = (sqrt(3) / 2) * sideLength; // Height of an equilateral triangle

  // Calculate triangle vertices
  let x1 = centerX - sideLength / 1.5, y1 = centerY + height / 1.5; // Bottom left vertex of triangle
  let x2 = centerX + sideLength / 1.5, y2 = centerY + height / 1.5; // Bottom right vertex of triangle
  let x3 = centerX, y3 = centerY - height / 1.5; // Top vertex of triangle

  // Add white inner glow effect to the triangle
  drawingContext.shadowBlur = 20;  // Set the blur radius of the shadow
  drawingContext.shadowColor = color(255, 255, 255); // Set shadow color to white so it glows

  // Draw the triangle/prism
  triangle(x1, y1, x2, y2, x3, y3);

  // Reset the shadow properties for the glow
  drawingContext.shadowBlur = 0;
  drawingContext.shadowColor = color(0, 0, 0);

  // Draw the White light line that passes through the prism
  stroke(255);
  strokeWeight(2);
  line(-8, centerY + 42, x3 - 48, y3 + 80); // begins off canvas and connects to the middle of the triangle

  // Variable for the Rainbow lines colors 
  let rainbow = [
    color(255, 0, 0),
    color(255, 165, 0),
    color(255, 255, 0),
    color(0, 255, 0),
    color(0, 0, 255),
    color(75, 0, 130),
    color(148, 0, 211)
  ];

  for (let i = 0; i < rainbow.length; i++) {
    stroke(rainbow[i]);
    line(x3 + 48, y3 + 80, width + 30, centerY - 10 + i * 15); // Extend off-canvas to the right
  }
}

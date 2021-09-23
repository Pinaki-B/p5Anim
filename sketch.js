ims = [];
numFrames = 16;
let counter = 0;
let imWidth, imHeight;

function preload() {
  for (let i = 0; i < numFrames; i++) {
    let path = ('SpriteIms/sprite_' + '15' + '.png') 
    console.log('SpriteIms/sprite_' + i + '.png')
    // ims.push(loadImage('SpriteIms/sprite_15.png'));
    ims.push(loadImage(path));

    // ims.push(loadImage(path))
  }
}

function setup() {
  createCanvas(400, 400);
//   for (let i = 0; i < numFrames; i++) {
//     let path = ('SpriteIms/sprite_' + '15' + '.png') 
//     console.log('SpriteIms/sprite_' + i + '.png')
//     ims.push(loadImage('SpriteIms/sprite_15.png'));
//     // ims.push(loadImage(path));

//     // ims.push(loadImage(path))
//   }
  frameRate(2);
  imWidth = width > height ? height / 2 : width / 2;
  imHeight = imWidth;
}

function draw() {
  background(220);
  image(ims[counter], 0, 0, imWidth, imHeight);
  counter++;
  counter = counter % numFrames;
  // console.log(counter)
  // console.log(ims[counter])
}

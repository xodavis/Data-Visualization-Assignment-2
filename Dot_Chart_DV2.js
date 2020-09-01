let codes = [];

function preload(){
  table = loadTable('airlines.csv', 'csv', 'header');
}

function setup() {
  createCanvas(500, 500);
  for(let i = 0; i < 29; i++){
    codes[i] = table.get(i, "Airport.Code");
    //print(codes[i]);
  }
}

function draw() {
  background(250, 210, 100);
  stroke(0);
  strokeWeight(1);
  
  line(35, 465, 485, 465); //horizontal line
  line(35, 465, 35, 15); //vertical line
  line(485, 465, 470, 450); //x-axis arrows
  line(485, 465, 470, 480); //x-axis arrows
  line(35, 15, 45, 30); //y-axis arrows
  line(35, 15, 20, 30); //y-axis arrows
  
  text("X axis - total number of carriers", 60, 40); 
  text("Y axis - Airport codes", 60, 60);
  
  fill(0);
  text("Number of Carriers by Airport, June 2003", 150, 20); //title
  text("X", 480, 490); //labeling x axis
  text("Y", 15, 20); //labeling y axis 
  
  //labeling the airport codes 
  for(let i = 0; i < codes.length; i++){ 
    text(codes[i] + "", 1, 40 + 15*i);
  }
  
  //labeling the values on the x-axis
  for(let i = 0; i < 16; i++){ 
    text(i, 35 + i*28, 485);
  }
  
  stroke(0);
  for(let i = 0; i < codes.length; i++){ //creates data points
    let temp = table.getNum(i, "Statistics.Carriers.Total");
    strokeWeight(7);
    point(35 + 28*temp, 40 + 15*i);
  }
  
}
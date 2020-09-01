let LAX = 0;
let SFO = 0;
let DCA = 0;
let JFK = 0;
let DEN = 0;
let loc = [1609, 1621, 1599, 1607, 1600];
let list = ["LAX", "SFO", "DCA", "JFK", "DEN"];
//location of the airports

function preload(){
  table = loadTable('airlines.csv', 'csv', 'header');
}

function setup() {
  createCanvas(600, 500);
  
  //accumilating the values 
  for(let i = 0; i < 12; i++){
    LAX += table.getNum(loc[0] + 29*i, "Statistics.Flights.Cancelled")
  }
  print(LAX);
  
  for(let i = 0; i < 12; i++){
    SFO += table.getNum(loc[1] + 29*i, "Statistics.Flights.Cancelled")
  }
  print(SFO);
  
  for(let i = 0; i < 12; i++){
    DCA += table.getNum(loc[2] + 29*i, "Statistics.Flights.Cancelled")
  }
  print(DCA);
  
  for(let i = 0; i < 12; i++){
    JFK += table.getNum(loc[3] + 29*i, "Statistics.Flights.Cancelled")
  }
  print(JFK);
  
  for(let i = 0; i < 12; i++){
    DEN += table.getNum(loc[4] + 29*i, "Statistics.Flights.Cancelled")
  }
  print(DEN);
  
  //for(let i = 0; i < 12; i++){
    
}

function draw() {
  stroke(3);
  background(255);
  fill(255);
  rect(65, 0, 400, 400);
  fill(0);
  //labeling airpots and vertical lines
  for(let i = 0; i < list.length; i++){  
    text(list[i], 95 + 80*i, 450);
    line(65 + 80*i, 0, 65 + 80*i, 400);
  }
  
  //labeling the months and horizontal lines
  for(let i = 0; i < 12; i++){
    text(table.get(203 + 29*i, "Time.Month Name"), 0, 20 + ((400/12)*i));
    line(65, (400/12) + ((400/12)*i), 465, (400/12) + ((400/12)*i));
  }
  
  fill(255);
  rect(500, 200, 25, 210);
  for(let i = 0; i < 7; i++){ //creating legend
    line(500, 200 + 30*i, 525, 200 + 30*i); //grid lines
    fill(0, 30*i, 0);
    rect(500, 200 + 30*i, 25, 30); //colors
    text(125 + 125*i, 530, 215 + 30*i);
  }
  fill(0);
  stroke(4);
  text("Airports", 250, 475); //labeling airport
  text("Flights Cancelled", 480, 180); //labeling the legend
  
  for(let i = 0; i < 12; i++){
    let number = table.getNum(loc[0] + 29*i, "Statistics.Flights.Cancelled")
    if(number <= 125 && i == 0){
      fill(0, 30, 0);
      rect(65, 0 , 80, -(400/12));
    }
    if(number <= 125){
      fill(0, 30, 0);
      rect(65, (400/12) + ((400/12)*i) , 80, -(400/12));
    }
    if(number > 125 && number <= 250){
      fill(0, 60, 0);
      rect(65, (400/12) + ((400/12)*i), 80, -(400/12));
    }
    if(number > 250 && number <= 375){
      fill(0, 90, 0);
      rect(65, (400/12) + ((400/12)*i), 80, -(400/12));
    }
    if(number > 375 && number <= 500){
      fill(0, 120, 0);
      rect(65, (400/12) + ((400/12)*i), 80, -(400/12));
    }
    if(number > 500 && number <= 625){
      fill(0, 150, 0);
      rect(65, (400/12) + ((400/12)*i), 80, -(400/12));
    }
    if(number > 625 && number <= 750){
      fill(0, 180, 0);
      rect(65, (400/12) + ((400/12)*i), 80, -(400/12));
    }
    if(number > 750 && number <= 875){
      fill(0, 210, 0);
      rect(65, (400/12) + ((400/12)*i), 80, -(400/12));
    }
  }
  
  for(let i = 0; i < 12; i++){
    let number = table.getNum(loc[1] + 29*i, "Statistics.Flights.Cancelled")
    if(number <= 125 && i == 0){
      fill(0, 30, 0);
      rect(145, 0, 80, -(400/12));
    }
    if(number <= 125){
      fill(0, 30, 0);
      rect(145, (400/12) + ((400/12)*i), 80, -(400/12));
    }
    if(number > 125 && number <= 250){
      fill(0, 60, 0);
      rect(145, (400/12) + ((400/12)*i), 80, -(400/12));
    }
    if(number > 250 && number <= 375){
      fill(0, 90, 0);
      rect(145, (400/12) + ((400/12)*i), 80, -(400/12));
    }
    if(number > 375 && number <= 500){
      fill(0, 120, 0);
      rect(145, (400/12) + ((400/12)*i), 80, -(400/12));
    }
    if(number > 500 && number <= 625){
      fill(0, 150, 0);
      rect(145, (400/12) + ((400/12)*i), 80, -(400/12));
    }
    if(number > 625 && number <= 750){
      fill(0, 180, 0);
      rect(145, (400/12) + ((400/12)*i), 80, -(400/12));
    }
    if(number > 750 && number <= 875){
      fill(0, 210, 0);
      rect(145, (400/12) + ((400/12)*i), 80, -(400/12));
    }
  }
  
  for(let i = 0; i < 12; i++){
    let number = table.getNum(loc[2] + 29*i, "Statistics.Flights.Cancelled")
    if(number <= 125 && i ==0){
      fill(0, 30, 0);
      rect(225, 0, 80, -(400/12));
    }
    if(number <= 125){
      fill(0, 30, 0);
      rect(225, (400/12) + ((400/12)*i), 80, -(400/12));
    }
    if(number > 125 && number <= 250){
      fill(0, 60, 0);
      rect(225, (400/12) + ((400/12)*i), 80, -(400/12));
    }
    if(number > 250 && number <= 375){
      fill(0, 90, 0);
      rect(225, (400/12) + ((400/12)*i), 80, -(400/12));
    }
    if(number > 375 && number <= 500){
      fill(0, 120, 0);
      rect(225, (400/12) + ((400/12)*i), 80, -(400/12));
    }
    if(number > 500 && number <= 625){
      fill(0, 150, 0);
      rect(225, (400/12) + ((400/12)*i), 80, -(400/12));
    }
    if(number > 625 && number <= 750){
      fill(0, 180, 0);
      rect(225, (400/12) + ((400/12)*i), 80, -(400/12));
    }
    if(number > 750 && number <= 875){
      fill(0, 210, 0);
      rect(225, (400/12) + ((400/12)*i), 80, -(400/12));
    }
  }
  
  for(let i = 0; i < 12; i++){
    let number = table.getNum(loc[3] + 29*i, "Statistics.Flights.Cancelled")
    if(number <= 125 && i == 0){
      fill(0, 30, 0);
      rect(305, 0, 80, -(400/12));
    }
    if(number <= 125){
      fill(0, 30, 0);
      rect(305, (400/12) + ((400/12)*i), 80, -(400/12));
    }
    if(number > 125 && number <= 250){
      fill(0, 60, 0);
      rect(305, (400/12) + ((400/12)*i), 80, -(400/12));
    }
    if(number > 250 && number <= 375){
      fill(0, 90, 0);
      rect(305, (400/12) + ((400/12)*i), 80, -(400/12));
    }
    if(number > 375 && number <= 500){
      fill(0, 120, 0);
      rect(305, (400/12) + ((400/12)*i), 80, -(400/12));
    }
    if(number > 500 && number <= 625){
      fill(0, 150, 0);
      rect(305, (400/12) + ((400/12)*i), 80, -(400/12));
    }
    if(number > 625 && number <= 750){
      fill(0, 180, 0);
      rect(305, (400/12) + ((400/12)*i), 80, -(400/12));
    }
    if(number > 750 && number <= 875){
      fill(0, 210, 0);
      rect(305, (400/12) + ((400/12)*i), 80, -(400/12));
    }
  }
  
  for(let i = 0; i < 12; i++){
    let number = table.getNum(loc[4] + 29*i, "Statistics.Flights.Cancelled")
    if(number <= 125 && i == 0){
      fill(0, 30, 0);
      rect(385, 0, 80, -(400/12));
    }
    if(number <= 125){
      fill(0, 30, 0);
      rect(385, (400/12) + ((400/12)*i), 80, -(400/12));
    }
    if(number > 125 && number <= 250){
      fill(0, 60, 0);
      rect(385, (400/12) + ((400/12)*i), 80, -(400/12));
    }
    if(number > 250 && number <= 375){
      fill(0, 90, 0);
      rect(385, (400/12) + ((400/12)*i), 80, -(400/12));
    }
    if(number > 375 && number <= 500){
      fill(0, 120, 0);
      rect(385, (400/12) + ((400/12)*i), 80, -(400/12));
    }
    if(number > 500 && number <= 625){
      fill(0, 150, 0);
      rect(385, (400/12) + ((400/12)*i), 80, -(400/12));
    }
    if(number > 625 && number <= 750){
      fill(0, 180, 0);
      rect(385, (400/12) + ((400/12)*i), 80, -(400/12));
    }
    if(number > 750 && number <= 875){
      fill(0, 210, 0);
      rect(385, (400/12) + ((400/12)*i), 80, -(400/12));
    }
  }
  
}
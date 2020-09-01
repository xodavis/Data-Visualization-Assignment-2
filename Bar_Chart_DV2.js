let table;
let font;
let fontSize = 40;
let months = [];
let tracker = 203;
let jan = 0;
let feb = 0;
let mar = 0;
let apr = 0;
let may = 0;
let jun = 0;
let jul = 0;
let aug = 0;
let sep = 0;
let oct = 0;
let nov = 0;
let dec = 0;
//i apologize for doing this the long way. I had too many issues trying to add the values in an array. I'd like to discuss this issue another time!

//let sample = [];
//for(let i = 0; i < months.length; i++){
  //for(let z = 0; z < 29; z++){
    //sample[i] += table.getNum(tracker++, "Statistics.# of Delays.Weather");
  //}
//}
//print(sample[1]);

function preload(){
  table = loadTable('airlines.csv', 'csv', 'header');
}

function setup() {
  createCanvas(450, 450);
  //print(table.columns);
  for(let i = 0; i < 12; i++){
    //print(table.get(203 + i*30,"Time.Month"));  
    //get the months
    months[i] = table.get(203 + i*30,"Time.Month"); 
    //array the months
    //change to month names^
  }
  
  for(let i = 0; i < 29; i++){
      jan += table.getNum(tracker++, "Statistics.# of Delays.Weather");
  }
  
  for(let i = 0; i < 29; i++){
      feb += table.getNum(tracker++, "Statistics.# of Delays.Weather");
  }
  
  for(let i = 0; i < 29; i++){
      mar += table.getNum(tracker++, "Statistics.# of Delays.Weather");
  }
  
  for(let i = 0; i < 29; i++){
      apr += table.getNum(tracker++, "Statistics.# of Delays.Weather");
  }
  
  for(let i = 0; i < 29; i++){
      may += table.getNum(tracker++, "Statistics.# of Delays.Weather");
  }
  
  for(let i = 0; i < 29; i++){
      jun += table.getNum(tracker++, "Statistics.# of Delays.Weather");
  }
  
  for(let i = 0; i < 29; i++){
      jul += table.getNum(tracker++, "Statistics.# of Delays.Weather");
  }
  
  for(let i = 0; i < 29; i++){
      aug += table.getNum(tracker++, "Statistics.# of Delays.Weather");
  }
  
  for(let i = 0; i < 29; i++){
      sep += table.getNum(tracker++, "Statistics.# of Delays.Weather");
  }
  
  for(let i = 0; i < 29; i++){
      oct += table.getNum(tracker++, "Statistics.# of Delays.Weather");
  }
  
  for(let i = 0; i < 29; i++){
      nov += table.getNum(tracker++, "Statistics.# of Delays.Weather");
  }
  
  for(let i = 0; i < 29; i++){
      dec += table.getNum(tracker++, "Statistics.# of Delays.Weather");
  }
}

function draw() {
  background(130,200,150);
  stroke(0);
  
  line(35, 400, 430, 400); //horizontal line
  line(35, 400, 35, 15); //vertical line
  line(430, 400, 420, 415); //x-axis arrows
  line(430, 400, 420, 385); //x-axis arrows
  line(35, 15, 45, 30); //y-axis arrows
  line(35, 15, 20, 30); //y-axis arrows
  
  fill(0);
  text("Flights by Weather in 2004", 150, 20); //title
  text("X", 435, 430); //labeling x axis
  text("Y", 15, 20); //labeling y axis
  text("X axis - months by number", 290, 50);
  text("Y axis - Weather dealys/10", 290, 70);
  
  for(let i = 0; i < 10; i++){
    text(i*50, 5, 400 - i*40); //y-axis labels
    line(30, 400 - i*40, 40, 400 - i*40); //y-axis markers "-"
  }
  
  for(let i = 0; i < months.length; i++){ //labeling the months 
    text(months[i], 50 + i*32, 430);
  }
  
  rect(20 + 32, 400, 10, -(jan/10) + 80);
  rect(20 + 32*2, 400, 10, -(feb/10) + 60);
  rect(20 + 32*3, 400, 10, -(mar/10) + 40);
  rect(20 + 32*4, 400, 10, -(apr/10) + 40);
  rect(20 + 32*5, 400, 10, -(may/10) + 70);
  rect(20 + 32*6, 400, 10, -(jun/10) + 90);
  rect(20 + 32*7, 400, 10, -(jul/10) + 70);
  rect(20 + 32*8, 400, 10, -(aug/10) + 80);
  rect(20 + 32*9, 400, 10, -(sep/10) + 40);
  rect(20 + 32*10, 400, 10, -(oct/10) + 50);
  rect(20 + 32*11, 400, 10, -(nov/10) + 60);
  rect(20 + 32*12, 400, 10, -(dec/10) + 90);
}
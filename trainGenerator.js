console.log("\nTrain Generator\n");

function* getStop() {
  yield "Poughkeepsie";
  yield "Newburgh";
  yield "Peekskill";
  yield "Yonkers";
  yield "Bronx";
  yield "Grand Central"; 
}

const nycTrainline = getStop()
const nextStopBtn = document.querySelector("#next-stop")

nextStopBtn.addEventListener("click", () => {
  let currStop = nycTrainline.next()
  if(currStop.done){
    console.log("WE MADE IT🎉🎉🎉🎉!!")
    nextStopBtn.setAttribute("disabled", true)
  }
  else{
    console.log(currStop.value)
  }
})

console.log(nycTrainline)
console.log(nycTrainline.next())
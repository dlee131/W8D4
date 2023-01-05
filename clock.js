class Clock {
    constructor() {
        const timeNow = new Date () 

        this.hours = timeNow.getHours() 
        this.minutes = timeNow.getMinutes()
        this.seconds = timeNow.getSeconds()

        printTime();

        setInterval(this._tick.bind, 1000)
    }

        printTime() {
            
            const printedTime = [this.hours, this.minutes, this.seconds].join(":");

                console.log(printedTime)
    }

    _tick() {
      seconds(){
      this.seconds += 1;
      if (this.seconds === 60) {
        this.seconds = 0;
      }
    }
      minutes() {
        this.minutes += 1;
      if (this.minutes === 60) {
        this.minutes = 0;
      }
    }
      hours() {
        this.hour += 1;
      if (this.hour === 12) {
        this.hour = 0;
      }
      }  
    }
    
}
const clock = new Clock();

  


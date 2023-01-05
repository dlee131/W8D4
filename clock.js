class Clock {
    constructor() {
        const timeNow = new Date () 

        this.hours = timeNow.prototype.getHours() 
        this.minutes = timeNow.prototype.getMinutes()
        this.seconds = timeNow.prototype.getSeconds()

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
      
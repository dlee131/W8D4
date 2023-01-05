class Clock {
    constructor() {
        const timeNow = new Date () 

        this.hours = timeNow.prototype.getHours() 
        this.minutes = timeNow.prototype.getMinutes()
        this.seconds = timeNow.prototype.getSeconds()

        printTime();

        setInterval()
    }

        printTime() {
            
            const printedTime = [this.hours, this.minutes, this.seconds].join(":");

                console.log(printedTime)
    }

    
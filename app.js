class Audience {
    constructor(
      name,
      age,
      seatNum,
      ticket,
      seatPlace,
      seatPrice,
      performanceTime
    ) {
      this._name = name;
      this._age = age;
      this._seatNum = seatNum;
      this._seatPrice = seatPrice;
      this._seatPlace = seatPlace;
      this._performanceTime = performanceTime;
      this._ticket = ticket = Math.floor(Math.random() * 1557) + 1;
      {
        if (ticket === "879" || "963") {
          return `Congratulations, you have won the ticket giveaway. Please go to the box office on the day of the performance to collect your ticket.`;
        }
      }
    }
    get name() {
      return this._name;
    }
    get age() {
      return "Age" + this._age;
    }
    get seatNum() {
      return "Seat Number" + this._seatNum;
    }
    get performanceTime() {
      return this._performanceTime;
    }
    get seatPlace() {
      return this._seatPlace;
    }
    get ticket() {
      if (ticket === "879" || "963") { return `error`; }
      else { return ticket = Math.floor(Math.random() * 1557) + 1; }
    }
    totalPrice(audienceMembers) {
      return `Total price is £${this._seatPrice * audienceMembers}.`;
    }
    childAge(ageNum) {
      if (ageNum <= 17 && this._performanceTime === "7.30") {
        return `Children aged ${ageNum} can not watch the 7.30pm show, please purchase the 2pm show.`;
      }
      else if (ageNum <= "3" === true);
      {
        return "Can not purchase tickets for a " + ageNum + " year old.";
      }
    }
  }
  class stallAudience extends Audience {
    constructor(
      name,
      age,
      seatNum,
      ticket,
      seatPlace,
      seatPrice,
      performanceTime
    ) {
      super(name, age, seatNum, ticket, seatPrice, seatPlace, performanceTime);
      this._childAge = "2";
      this._performanceTime = "2"
    }
    get performanceTime() {
      return "2"
    }
  }
  const audienceRiley = new stallAudience(
    "Riley",
    "25",
    ["A34, A35"],
    "2",
    "130",
    "Stalls",
    "2"
  );
  console.log(audienceRiley);
  class royalCircleAudience extends Audience {
    constructor(
      name,
      age,
      seatNum,
      ticket,
      seatPlace,
      seatPrice,
      performanceTime,
      childAge
    ) {
      super(
        name,
        age,
        seatNum,
        ticket,
        seatPrice,
        seatPlace,
        performanceTime,
        childAge
      );
      this._childAge = "[14], [15]";
    }
  }
  
  const audienceTaylor = new royalCircleAudience(
    "Taylor",
    "52",
    "[JJ37][JJ39][JJ38]",
    "[15],[14]",
    "80",
    "Royal Circle",
    "7.30"
  );
  class grandCircleAudience extends Audience {
    constructor(
      name,
      age,
      seatNum,
      ticket,
      seatPlace,
      seatPrice,
      performanceTime
    ) {
      super(name, age, seatNum, ticket, seatPrice, seatPlace, performanceTime);
      this._seatPrice = "49";
      this._seatPlace = "Grand Circle";
      this._performanceTime = "7.30";
    }
  }
  const audienceYasheema = new grandCircleAudience(
    "Yasheema",
    "21",
    "S14",
    "49",
    "grandCircle",
    "7.30"
  );
  //const Audience = require('../src/mainfile.js');//the thing inside the statement is the path of the file relative to the current file
  //dot dot (..)means go up a directory and a single dot (.)= same directory
  console.log(audienceRiley.childAge(3))
  console.log(audienceRiley.totalPrice(2))
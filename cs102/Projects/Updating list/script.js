let food = "";
let id = 102;
let passangers = [];

function addToList() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let dOb = document.getElementById('DoB').value;
    console.log(dOb);
    let leaving = document.getElementById('departing').value;
    let arriving = document.getElementById('arriving').value;
    let leaveDate = document.getElementById('leaveDate').value;
    let arriveDate = document.getElementById('returnDate').value;
    let bags = document.getElementById('bags').value;

    let passanger = new Passanger(id, firstName, lastName, dOb, leaving, arriving, leaveDate, arriveDate, bags)
    id++
    console.log(passanger.dOb)
    passangers.push(passanger);
    findFood();
    findExtras();
    console.log(passangers);

}



class Passanger {
    constructor(id, firstName, lastName, dOb, leaving, arriving, leaveDate, arriveDate, bags) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dOb = dOb;
        this.leaving = leaving;
        this.arriving = arriving;
        this.leaveDate = leaveDate;
        this.arriveDate = arriveDate;
        this.bags = bags;
        this.id = id;
    }

    formatDate(date) {
        date = new Date(date);
        let month = "";
        let day = "";
        if(date.getMonth() + 1 < 10) {
            month = '0' + (date.getMonth()+1);
        } else {
            month = `${(date.getMonth() + 1)}`;
        }
        if (date.getDate() < 10){
            day = '0' + (date.getDate());
        }else {
            day = (date.getDate());
        }

        let newDate = `${date.getFullYear()}-${month}-${day}`;
        return newDate
    }
}

let bean = new Passanger('100' ,'Mr.', 'Bean', '1/9/1955', 'Consett, United Kingdom', 'London, England', '1/8/2006', '1/9/2006', '69', 'Sbubby');
passangers.push(bean);

let connor = new Passanger('101', 'Connor', 'Vokel', '6/21/2001', 'Phoenix, AZ', 'Flagstaff, AZ', '3/7/2006', '3/8/2006', '0', 'Mc Dongle');
passangers.push(connor);

function findFood() {
    food = "";
    let kB = document.getElementById('kb').checked;
    let mcD = document.getElementById('mcd').checked;
    let sbu = document.getElementById('sbu').checked;

    if(kB) {
        food = document.getElementById('kb').value;
    }else if(mcD) {
        food = document.getElementById('mcd').value;
    }else if(sbu) {
        food = document.getElementById('sbu').value;
    }
}

function findExtras() {
    let extra = [];
    let elemList = document.getElementsByName('extra');
    for(let i = 0; i < elemList.length; i++) {
        if (elemList[i].checked){
            extra.push(elemList[i].value) 
        }
    }
}

let passangerList = document.querySelector('#names');

function print() {
    let div = document.getElementById('names');
    div.innerHTML = "";
    
    for(let i = 0; i < passangers.length; i++) {
        let li = document.createElement('li');
        passangerList.appendChild(li);
        li.onclick = function(){fillInInfo(passangers[i].id ,passangers[i].firstName, passangers[i].lastName, passangers[i].dOb, passangers[i].leaving, passangers[i].arriving, passangers[i].leaveDate, passangers[i].arriveDate, passangers[i].meal);}
        li.textContent = `${passangers[i].id} | ${passangers[i].firstName} ${passangers[i].lastName}`
    }
}

function fillInInfo(firstName, lastName, dOb, bags, inLeaving, inArriving, inLeaveDate, inArriveDate, meal) {
    document.getElementById('outfirstName').value = firstName;
    document.getElementById('outlastName').value = lastName;
    document.getElementById('outDoB').value = dOb;
    document.getElementById('outbags').value = bags;
    document.getElementById('outdeparting').value = inLeaving;
    document.getElementById('outarriving').value = inArriving;
    document.getElementById('outleaveDate').value = inLeaveDate;
    document.getElementById('outreturnDate').value = inArriveDate;
    document.getElementById('outmeal').value = meal;
}
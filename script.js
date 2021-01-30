
// addFirstClassTicket
const addFirstClassBtn = document.getElementById('addFirstClassTicket');
    addFirstClassBtn.addEventListener('click', function(){
    firstClassTicketBooking(true);
    calculateTotal ();
})

// decreaseFirstClassTicket
const decreaseFirstClassBtn = document.getElementById('decreaseFirstClassTicket');
    decreaseFirstClassBtn.addEventListener('click', function(){
    firstClassTicketBooking(false);
    calculateTotal ();
})

// firstClassTicketBooking
function firstClassTicketBooking(isAdd){
    const firstClassTickets = document.getElementById('firstClassTicket');
    const firstClassTicketNumber = parseInt(firstClassTicket.value);
    let firstClassTicketNumbers = firstClassTicketNumber;
    if (isAdd === true) {
        firstClassTicketNumbers = firstClassTicketNumber + 1;
    }
    else if(isAdd === false && firstClassTicketNumbers > 0){
        firstClassTicketNumbers = firstClassTicketNumber - 1;
    }
    firstClassTickets.value = firstClassTicketNumbers;
}

// addEconomyClassTicket
const addEconomyClassBtn = document.getElementById('addEconomyClassTicket');
    addEconomyClassBtn.addEventListener('click', function(){
        economyClassTicketBooking(true);
    calculateTotal ();
})

// decreaseEconomyClassTicket
const decreaseEconomyClassBtn = document.getElementById('decreaseEconomyClassTicket');
    decreaseEconomyClassBtn.addEventListener('click', function(){
        economyClassTicketBooking(false);
        calculateTotal ();
})

// economyClassTicketBooking
function economyClassTicketBooking(isAdd){
    const economyClassTickets = document.getElementById('economyClassTicket');
    const economyClassTicketNumber = parseInt(economyClassTicket.value);
    economyClassTicketNumbers = economyClassTicketNumber;
    if (isAdd === true) {
        economyClassTicketNumbers = economyClassTicketNumber + 1;
    }
    else if(isAdd === false && economyClassTicketNumbers > 0){
        economyClassTicketNumbers = economyClassTicketNumber - 1;
    }
    economyClassTickets.value = economyClassTicketNumbers;
}

// total
 function calculateTotal (){
    const firstClass = document.getElementById('firstClassTicket');
    const firstClasses = firstClass.value;  
    const economyClass = document.getElementById('economyClassTicket');
    const economyClasses = economyClass.value;

    const subtotal = firstClasses * 150 + economyClasses * 100;
    document.getElementById('subtotal').textContent = subtotal;

    const vat = subtotal * 0.1;
    document.getElementById('vat').textContent = vat;
    document.getElementById('total').textContent = subtotal + vat;

 }




/* //addFirstClassTicket
const addFirstClassBtn = document.getElementById('addFirstClassTicket');
addFirstClassBtn.addEventListener('click', function(){
    
    // const firstClassTickets = document.getElementById('firstClassTicket');
    // const firstClassTicketNumber = parseInt(firstClassTicket.value);
    // const firstClassTicketNumbers = firstClassTicketNumber + 1;
    // firstClassTickets.value = firstClassTicketNumbers;
    calculateTotal ();
})

// decreaseFirstClassTicket
const decreaseFirstClassBtn = document.getElementById('decreaseFirstClassTicket');
    decreaseFirstClassBtn.addEventListener('click', function(){
    // const firstClassTickets = document.getElementById('firstClassTicket');
    // const firstClassTicketNumber = parseInt(firstClassTicket.value);
    // const firstClassTicketNumbers = firstClassTicketNumber - 1;
    // firstClassTickets.value = firstClassTicketNumbers;
    calculateTotal ();
})

// addEconomyClassTicket
const addEconomyClassBtn = document.getElementById('addEconomyClassTicket');
    addEconomyClassBtn.addEventListener('click', function(){
    const economyClassTickets = document.getElementById('economyClassTicket');
    const economyClassTicketNumber = parseInt(economyClassTicket.value);
    const economyClassTicketNumbers = economyClassTicketNumber + 1;
    economyClassTickets.value = economyClassTicketNumbers;  
    calculateTotal ();
})

// decreaseEconomyClassTicket
const decreaseEconomyClassBtn = document.getElementById('decreaseEconomyClassTicket');
    decreaseEconomyClassBtn.addEventListener('click', function(){
        const economyClassTickets = document.getElementById('economyClassTicket');
        const economyClassTicketNumber = parseInt(economyClassTicket.value);
        const economyClassTicketNumbers = economyClassTicketNumber - 1;
        economyClassTickets.value = economyClassTicketNumbers;
        calculateTotal ();
})

*/
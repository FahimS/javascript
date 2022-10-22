// first 100 ticket -> 100tk/ticket
// 101 to 200 -> 90tk/ticket
// 200+ -> 70tk/ticket

function ticketPrice(ticketQuantity) {
    const first100TicketsPrice = 100;
    const second100TicketsPrice = 90;
    const restTicketsPrice = 70;
    if (ticketQuantity <=100) {
        const price = ticketQuantity * first100TicketsPrice;
        return price;
    }
    else if ( ticketQuantity <=200) {
        const first100price = 100 * first100TicketsPrice;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicket = restTicketQuantity * second100TicketsPrice;
        const totalPrice = first100price + restTicket;

        return totalPrice ;
    }
    else{
        const first100price = 100 * first100TicketsPrice;
        const second100price = 100 * second100TicketsPrice;
        const remainingTickets = ticketQuantity - 200;
        const remainingTicketPrice = remainingTickets * restTicketsPrice;
        const totalCost = first100price + second100price + remainingTicketPrice;
        return totalCost ;
    }
}
const price = ticketPrice(250);
console.log(price);
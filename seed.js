const mongoose = require('mongoose');
const users = require('./models/user');
const appointments = require('./models/appointment');
const salons = require('./models/salon');


mongoose.connect('mongodb://127.0.0.1:27017/salondb')
    .then(() => {
        console.log("Database connected");
    })
    .catch(err => {
        console.log("OH NO ERROR!!!");
        console.log(err);
    })


const salon1 = new salons({
    name: "Om's Salon",
    address: "Gaziabaad",
    image: "https://i.imgur.com/khQOIuX.png"
});

const salon2 = new salons({
    name: "Jajoo Hair Dressers",
    address: "Delhi NCR",
    image: "https://i.imgur.com/LN4pgS5.png"
})

const salon3 = new salons({
    name: "Cute Cut",
    address: "IIT Mandi South",
    image: "https://i.imgur.com/AYUQoXa.png"
})

const salon4 = new salons({
    name: "Kitkit Salon",
    address: "Delhi",
    image: "https://i.imgur.com/BOmolFJ.png"
})

const salon5 = new salons({
    name: "Chaetenya Salon",
    address: "Delhi NCR",
    image: "https://i.imgur.com/BpHvNg9.png"
})

const salon6 = new salons({
    name: "Kushagra Salon",
    address: "Bhawani Mandi",
    image: "https://i.imgur.com/7YOOLEI.png"
})

const salon7 = new salons({
    name: "Soni Not Sony",
    address: "Indore",
    image: "https://i.imgur.com/xbELBsn.png"
})

const salon8 = new salons({
    name: "Vanshaj Beauty Salon",
    address: "Pune",
    image: "https://i.imgur.com/P2DiikH.png"
})

async function saveThem() {
    await salon1.save();
    await salon2.save();
    await salon3.save();
    await salon4.save();
    await salon5.save();
    await salon6.save();
    await salon7.save();
    await salon8.save();
}

saveThem();
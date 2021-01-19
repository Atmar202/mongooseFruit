const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/fruitDB', { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Error: no name specified"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);
/*
const fruit = new Fruit({
    rating: 10,
    review: "Yummy"
});
*/

//fruit.save();

const orange = new Fruit({
    name: "Orange",
    rating: 8
})

// Task 1
const peopleSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    age: Number
});

const People = mongoose.model("People", peopleSchema);
const People2 = new People({
    name: "John",
    lastname: "Doe",
    age: 29
})

People2.save();

const fruit2 = new Fruit({
    name: "Apple",
    rating: 8,
    review: "Sweet and crunchy"
})

fruit2.save();

Fruit.update({_id: "6006b2629c6647400c8210f5"}, {review: "Juicy fruit"},
function(error){
    if(error) {
        console.log(error);
    } else {
        console.log("Record successfully updated.");
    }
});

People.update({_id: "6006b2629c6647400c8210f4"}, {age: 30},
function(error){
    if(error) {
        console.log(error);
    } else {
        console.log("Age successfully updated.");
    }
});


// Task 6
Fruit.deleteMany({name: "orange"}, function(error){
    if(error){
        console.log(error);
    } else {
        console.log("Item successfully deleted.");
    }
});

//People.save();

/*
const banana = new Fruit({
    name: "Banana",
    rating: 5,
    review: "Soft texture"
});

const Fruit = new Fruit({
    name: "Lemon",
    rating: 5,
    review: "Sour as hell"
});
*/
/*
Fruit.insertMany([banana, lemon], (error)=> {
    if(error){
        console.log(err);
    } else {
        console.log("Fruit successfully added to the fruitDB");
    }
})
*/

// Task 2

/*
const firstPerson = new People({
    name: "Jack",
    lastname: "Doe",
    age: 31
});

const secondPerson = new People({
    name: "Ryan",
    lastname: "Doe",
    age: 41
});

People.insertMany([firstPerson, secondPerson], (error)=> {
    if(error){
        console.log(err);
    } else {
        console.log("People successfully added to the PeopleDB");
    }
})
*/

Fruit.find(function(error, fruits) {
    if(error) {
        console.log(error);
    } else {
        fruits.forEach(fruit => {
            console.log(fruits);
        });
        
    }
});

// Task 4
People.find(function(error, peoples) {
    if(error) {
        console.log(error);
    } else {
        peoples.forEach(people => {
            console.log(peoples);
        });
    }
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});
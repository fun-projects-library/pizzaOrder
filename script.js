

let addButton = document.getElementById("add_btn");
let orderButton = document.getElementById("submit_btn");
let selectPizza = document.getElementById("pizzaSelect");




//sample timedelay function, you may use or not
  function wait(ms = 0) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    })
  }


let pizza=[];



addButton.onclick = () => {

  pizza.push(selectPizza.value);
  console.log(pizza)
}

const cookingTime = () => {


  return new Promise ( (resolve,reject) => { 

    if(pizza.includes("pineapple")){
      reject(`seriously?!`)
    } else {
      cookTime = (pizza.length * 500)+1000;
      resolve(cookTime);
      console.log(`your waiting time is ${cookTime/1000} min!`);
    }
  });
};


const cookPizza = (pizza, time) => {

  return new Promise ((resolve, reject) => {

    if(time>5000){
      reject(`no pizza for you!`)
    } else {
      console.log(`your order is about to be ready!`);
      setTimeout(() => {
        resolve(`your order is ready with the ${pizza}! Enojoy...`)
      }, time);
    }
  }); 
};


async function orderPizza(pizza) {

  try {
    let timeCooking = await cookingTime(pizza);
    let pizzaReady = await cookPizza(pizza, timeCooking);
    console.log(pizzaReady);
  } catch(error){
    console.log(error);
  };
};

orderButton.onclick = () => {

  orderPizza(pizza);
}


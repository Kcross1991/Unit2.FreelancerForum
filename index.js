const names=["Alice", "Bob", "Carol"];
const Occupations = ["Writer", "Teacher", "Programmer"];
const Prices = [30, 50, 70]
const maxfreelancers= 6;

  const freelancers=[
    { name: "Alice",
     Occupation: "Writer",
      price:30 
    },
    { name: "Bob",
     Occupation: "Teacher",
     price: 50 
    },
    { name: "Carol",
     Occupation: "Programmer", 
     price: 70 
    },
    { name: "Chuck",
     Occupation: "Lawyer",
      price: 80
    },
    { name: "John",
    Occupation: "Chef",
     price:75
    },
    { name: "Bucky",
     Occupation: "SuperHero",
      price: 200
    },
   ];

   setInterval (addfreelancer,3000)
render()

  function render() {
    //Render the Freelancers
    const freelance = document.querySelector("#freelance");
    const freelancerElements = freelancers.map((freelancer) => {
      const element = document.createElement("li");
      element.classList.add(freelancers.name, freelancers.Occupation, freelancers.price);
      element.textContent = `${freelancers.name}, ${freelancers.occupation}, ${freelancers.price}`;
      return element;
    });
    freelance.replaceChildren(...freelancerElements);
}

render()

function getAverage(){
    let num = 1
    for (i = 0; i < price.length; i++){
        average = average+Price[i]/3
        return average
    };
    const getAverage = document.querySelector("average")
    averagePrice.textContent = `The average start price is ${average}`
}



function addfreelancer() {
    const addedfreelancer = freelancers[Math.floor(Math.random() * freelancers.length)]
    console.log(addedfreelancer)

freelancers.push({ freelancers: addedfreelancer})

render()

}
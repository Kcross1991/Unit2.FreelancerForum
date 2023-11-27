   const freelancers=[
    { name: "Alice", Occupation: "Writer", price:30 },
    { name: "Bob", Occupation: "Teacher", price: 50 },
    { name: "Carol", Occupation: "Programmer", price: 70 },
    { name: "Chuck", Occupation: "Lawyer", price: 80},
    { name: "John", Occupation: "Chef", price:75},
    { name: "Bucky", Occupation: "SuperHero", price: 200 },
   ] 
   console.log(freelancers)
   const maxfreelancers= 6;

   const addfreelancersIntervalId = setInterval(freelancers, 3000);
   render()
  function render() {
    //Render the Freelancers
    const freelance = document.querySelector("#freelance");
    const freelancerElements = freelancers.map((freelancer) => {
      const element = document.createElement("li");
      element.classList.add(freelancers.name, freelancers.Occupation,freelancers.price);
      return element;
    })
    freelance.replaceChildren(...freelancersElements);
}

render()

function getAverage(price){
    let num = 0;
    for (i = 0; i < price.length; i++){
        num +=(price[i]/ price.length);
    }
    return num
}
console.log ( getAverage);


function addfreelancer() {
    const name = name[Math.floor(Math.random() * colors.length)];
    const occupation = occupation[Math.floor(Math.random() * colors.length)];
    const price = price[Math.floor(Math.random() * colors.length)];

freelancers.push({freelancer});
  if (freelancers.length >= maxfreelancers){
    clearInterval(addfreelancersIntervalId);
  };
  render()
}

const freelancers = [
  { name: "Dr.Slice", price: 25, occupation: "gardener" },
  { name: "Dr.Pressure", price: 51, occupation: "programmer" },
];

const maxFreelancers = 10;
const names = ["chris","sarah","william","elia"];
const prices = [30,20,10,100,50,40,80];
const occupations = ["writer","programmer","athlete"];

const addFreelancers = setInterval(addFreelancer,1000);


render();
function render(){
  const freelancersId = document.querySelector("#freelancers");
  freelancersId.innerHTML =
    `<tr>
      <th>Name</th>
      <th>Occupation</th>
      <th>Starting Price</th>
     </tr>`;

  freelancers.forEach((freelancer) => {
    const tr = document.createElement("tr");
    const tdName = document.createElement("td");
    tdName.textContent = freelancer.name;

    const tdOccupation = document.createElement("td");
    tdOccupation.textContent = freelancer.occupation;

    const tdPrice = document.createElement("td");
    tdPrice.classList.add("price");
    tdPrice.textContent = `$${freelancer.price}`;

    tr.appendChild(tdName);
    tr.appendChild(tdOccupation);
    tr.appendChild(tdPrice);

    freelancersId.appendChild(tr);
  });
}




function addFreelancer() {
    const name = names[Math.floor(Math.random() * names.length)];
    const price = prices[Math.floor(Math.random() * prices.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    freelancers.push({name, price, occupation});

    
    render();

     if(freelancers.length >= maxFreelancers){
    clearInterval(addFreelancers);
     }
  }
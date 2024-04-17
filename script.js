
let rootElement = document.querySelector("section")

// got.houses.forEach((house) => {
//     house.people.forEach((person) => {
//       let imgContainer = document.createElement("div");
//       imgContainer.classList.add("flex");
  
//       let img = document.createElement("img");
//       img.src = person.image;
//       let h2 = document.createElement("h2");
//       h2.innerText = person.name;
  
//       let p = document.createElement("p");
//       p.innerText = person.description;
  
//       imgContainer.append( img,h2);
  
//       let a = document.createElement("a");
//       a.innerText = "Read More!";
//       a.classList.add("btn")
//       a.href = person.wikiLink;
  
//       let personContainer = document.createElement("div");
//       personContainer.append(imgContainer, p, a);
//       personContainer.classList.add("cards");
  
//       rootElement.append(personContainer);
//     });
//   });
  

got.houses.forEach((house) => {
  house.people.forEach((person) => {
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("flex")

    let img = document.createElement("img")
    img.src = person.image;

    let h2 = document.createElement("h2")
    h2.innerText = person.name;

    let p = document.createElement("p")
    p.innerText = person.description

    imgContainer.append(img,h2)

    let a = document.createElement("a") 
    a.innerText = "Read More"
    a.classList.add("btn")
    a.href = person.wikilink

    let personContainer = document.createElement("div")
    personContainer.append(imgContainer,p,a);
    personContainer.classList.add("cards")

    rootElement.append(personContainer)
  })
})




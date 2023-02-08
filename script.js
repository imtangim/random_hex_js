const container = document.querySelector(".container")
const refreshbtn = document.querySelector(".refresh-btn")
const maxpalletboxes =32;
const generatepallate = ()=>{
    container.innerHTML = "";
    for (let i = 0; i < maxpalletboxes; i++) {

        let randomhex = Math.floor(Math.random()*0xffffff).toString(16).toUpperCase();
        randomhex = `#${randomhex.padStart(6,"0")}` //template lierals

        //Creating a new li 
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style ="background: ${randomhex}"></div>
                           <span class="hex-value">${randomhex}</span>`;
        color.addEventListener("click", () => copycolor(color, randomhex))
        container.appendChild(color); //inserted it to container

        
    }

}
generatepallate();
const copycolor = (elem,hexval) => {
    const colorelement =elem.querySelector(".hex-value");
    navigator.clipboard.writeText(hexval).then(()=>
    {
        colorelement.innerHTML = "Copied"
        setTimeout(() => colorelement.innerHTML = hexval,1000);
    }).catch(() => alert("Failed to Copy color code"))

}

refreshbtn.addEventListener("click",generatepallate)
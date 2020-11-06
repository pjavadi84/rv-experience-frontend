class Rvs {
    constructor(){
        this.rvs = []
        this.rvsAdapter = new RvsAdapter()
    }

    createRvsCard(fetchedRvData){
        console.log(fetchedRvData);
        this.compCard = document.querySelector("section.company-card")
        this.rvSection = document.createElement("div")
        this.rvSection.setAttribute("class","rv-div")

        this.compCard.appendChild(this.rvSection)
    }

    
}
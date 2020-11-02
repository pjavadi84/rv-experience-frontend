class Company {
    constructor(id, name, address, city, state, zipcode, phonenumber, building_number, password,email, rvs){
        this.id = id,
        this.name = name,
        this.address = address,
        this.city = city,
        this.state = state,
        this.zipcode = zipcode,
        this.phonenumber = phonenumber,
        this.building_number = building_number,
        this.password = password, 
        this.email = email,
        this.rvs = rvs
        // this.renderRvList()
        
    }

    // renderCompany(){
    //     return (`<div id="company-id-${this.id}">
    //             <a href="" data-id="${this.id}">${this.name}</a>
    //             <ul id="rvs">
    //             </ul>
    //             </div>
    //     `)
    // }
    createCompanyCard(){
        let companyList = document.querySelector("div.company-card-container")
        let card = document.createElement('section');
        card.setAttribute("company-id",`${this.id}`)
        card.className = "company-card";
        let companyInfo = document.createElement('div');
        companyInfo.className = "company-info";
        // debugger
        let companyName = document.createElement("h3");
        companyName.innerText = this.name;
        let coZipCode = document.createElement("ul")
        coZipCode.innerText = `zip code: ${this.zipcode}`
        // debugger
        companyInfo.appendChild(companyName);
        let coDetailsBtn = document.createElement("button")
        coDetailsBtn.setAttribute("class","btn btn-dark")
        coDetailsBtn.setAttribute("id","company-details")
        coDetailsBtn.setAttribute("data-id",`${this.id}`)
        coDetailsBtn.innerText = "Details"
        
        let companyAddress = document.createElement("li");
        companyAddress.innerText = `street: ${this.address};`
        companyInfo.appendChild(companyAddress);
        let companyCity = document.createElement("li");
        companyCity.innerText = `city: ${this.city}`;
        companyInfo.appendChild(companyCity);
        let ul = document.createElement('ul')
        // ul.innerHTML = "<b>List of Rvs:</b>"
        companyInfo.appendChild(ul)
        card.appendChild(coZipCode);
        card.appendChild(companyInfo)
        ul.appendChild(coDetailsBtn);
        companyList.appendChild(card)

        coDetailsBtn.addEventListener('click', ()=>{
            this.renderRvList();
        })
    }

    renderRvList(){
        let companySection = document.getElementsByClassName("company-card")
        let rvLi = document.createElement('li')
        
        for(let rv of this.rvs){
            rvLi.setAttribute('rv-id',`${rv.id}`)
            rvLi.innerText = `${rv.name}`
        }
        
        companySection.appendChild(rvLi);
        
    }

}
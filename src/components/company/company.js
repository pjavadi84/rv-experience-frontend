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
        card.setAttribute("id",`${this.id}`)
        card.className = "company-card";
        let companyInfo = document.createElement('div');
        companyInfo.className = "company-info";
        // debugger
        let companyName = document.createElement("h3");
        companyName.innerText = this.name;
        // debugger
        companyInfo.appendChild(companyName);
        let companyAddress = document.createElement("li");
        companyAddress.innerText = `street: ${this.address};`
        companyInfo.appendChild(companyAddress);
        let companyCity = document.createElement("li");
        companyCity.innerText = `city: ${this.city}`;
        companyInfo.appendChild(companyCity);
        let ul = document.createElement('ul')
        ul.innerHTML = "<b>List of Rvs:</b>"
        
        for (let rv of this.rvs){
            debugger
            let rvForLi = document.createElement('ul')
            rvForLi.setAttribute("class","rv-class")
            rvForLi.setAttribute("id",`${rv.id}`)
            // debugger
            rvForLi.innerHTML = `<b>${rv.name}</b> - maximum capacity:${rv.capacity} - price per day:$ ${rv.rate_per_day}`
            ul.appendChild(rvForLi);
        }
        
        companyInfo.appendChild(ul);
        card.appendChild(companyInfo)
        // debugger
        companyList.appendChild(card)
        // debugger
        // companyList.innerHTML(card);
        // debugger
    }


}
class Company {
    constructor(id,name, address, city, state, zipcode, phonenumber, building_number,email, rvs){
        this.id = id,
        this.name = name,
        this.address = address,
        this.city = city,
        this.state = state,
        this.zipcode = zipcode,
        this.phonenumber = phonenumber,
        this.building_number = building_number,
        this.email = email,
        this.rvs = rvs
    }


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
        companyInfo.appendChild(companyName);

        // RV button
        let coDetailsBtn = document.createElement("button")
        coDetailsBtn.setAttribute("class","btn btn-dark")
        coDetailsBtn.setAttribute("id","company-rvs")
        coDetailsBtn.setAttribute("data-id",`${this.id}`)
        coDetailsBtn.innerText = "Rvs"

        // RV Uls
        let rvUls = document.createElement("ul")
        rvUls.setAttribute("id","rvs")

        // EDIT Company Button
        let coEditBtn = document.createElement("button")
        coEditBtn.setAttribute("class","btn btn-warning")
        coEditBtn.setAttribute("id","update-company")
        coEditBtn.setAttribute("data-id", `${this.id}`)
        coEditBtn.innerText = "Edit"
        

        // DELETE Company Button
        let coDeleteBtn = document.createElement("button")
        coDeleteBtn.setAttribute("class","btn btn-danger")
        coDeleteBtn.setAttribute("id","delete-company")
        coDeleteBtn.setAttribute("data-id", `${this.id}`)
        
        coDeleteBtn.innerText = "Delete"

        
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
        ul.appendChild(coDeleteBtn)
        ul.appendChild(coEditBtn)
        card.appendChild(rvUls)
        companyList.appendChild(card)
        
    }

}
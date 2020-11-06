class Rv{
    constructor(id, name, capacity, rate_per_day, company_id){
        this.id = id,
        this.name = name,
        this.capacity = capacity,
        this.rate_per_day = rate_per_day,
        this.company_id = company_id
        this.rvFormDiv = document.getElementsByClassName("rv-form")
        
    }

    renderRvForm(event){
            let form = document.getElementsByClassName(`rv-form-${event.target.dataset.id}`)[0]
            let rvForm = document.createElement("form")
            let rvFormDiv = document.createElement("div")
            rvFormDiv.setAttribute("class","form-group")
           
            // RV NAME
            let rvNameLabel = document.createElement("label")
            rvNameLabel.setAttribute("for","rv-name")
            rvNameLabel.innerText = "Rv's Name: "
            let rvNameInput = document.createElement("input")
            rvNameInput.setAttribute("class","form-control")
            rvNameInput.setAttribute("id", `${event.target.dataset.id}`)
            rvNameInput.setAttribute("placeholder", "Enter an RV name")

            // RV CAPACITY
            let rvCapacityLabel = document.createElement("label")
            rvCapacityLabel.setAttribute("for","rv-capacity")
            rvCapacityLabel.innerText = "Maximum Capacity: "
            let rvCapacityInput = document.createElement("input")
            rvCapacityInput.setAttribute("class","form-control")
            rvCapacityInput.setAttribute("id", `${event.target.dataset.id}`)
            rvCapacityInput.setAttribute("placeholder", "Enter number of guests this vehicle can fit")

            // RV Price-per-dat
            let rvDailyPriceLabel = document.createElement("label")
            rvDailyPriceLabel.setAttribute("for","rv-daily-price")
            rvDailyPriceLabel.innerText = "Price/day: "
            let rvDailyPriceInput = document.createElement("input")
            rvDailyPriceInput.setAttribute("class","form-control")
            rvDailyPriceInput.setAttribute("id", `${event.target.dataset.id}`)
            rvDailyPriceInput.setAttribute("placeholder", "Enter number of guests this vehicle can fit")

            // SUBMIT
            let rvSubmitBtn = document.createElement("button")
            rvSubmitBtn.innerText = "Submit"
            rvSubmitBtn.setAttribute("id","company-form-submit")
            rvSubmitBtn.setAttribute("type","submit")
            rvSubmitBtn.setAttribute("value","Add Rv")

            rvForm.appendChild(rvNameLabel)
            rvForm.appendChild(rvNameInput)
            rvForm.appendChild(rvCapacityLabel)
            rvForm.appendChild(rvCapacityInput)
            rvForm.appendChild(rvDailyPriceLabel)
            rvForm.appendChild(rvDailyPriceInput)
            rvForm.appendChild(rvSubmitBtn)
            rvFormDiv.appendChild(rvForm)
            form.appendChild(rvFormDiv)
        
    }


}
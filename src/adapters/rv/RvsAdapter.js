class RvsAdapter {
    constructor(){
        this.baseUrl = `http://localhost:3000/api/v1/companies`
    }


    postRvToApi(eventId, configObject){
        this.rvsUrl = this.baseUrl + `/${eventId}/rvs`

        fetch(this.rvsUrl, configObject).then(
          response => alert(`This RV added to the record`)
        );

    }


    fetchRvs(event) {
        let rvsUrl = this.baseUrl + `/${event}/rvs`
        

        try {
          let response = axios.get(rvsUrl);
          
          return response
          
        } catch {
          alert("Cannot load Rvs from database")
        }
    }

}
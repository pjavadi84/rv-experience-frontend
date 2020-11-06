class RvsAdapter {
    constructor(){
        this.baseUrl = `http://localhost:3000/api/v1/companies`
        // this.getRvs()
        // this.loadRvResource()
    }

    fetchRvs(id) {
        let rvsUrl = this.baseUrl + `/${id}/rvs`

        try {
          const response = axios.get(rvsUrl);
          return response
        } catch {
          alert("Cannot load Rvs from database")
        }
    }

    postRvToApi(id,configObject){
        let rvsUrl = this.baseUrl + `/${id}/rvs`
        return fetch(rvsUrl, configObject)
        .then(res => res.json())
        .catch(error => alert("Cannot save this RV record into its associated company" + error))
    }

}
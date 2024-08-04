import { defineStore } from 'pinia' 
import axios from 'axios'
import { BASE_URL } from '../constants/api'
export const useRootStore = defineStore('root', {
  state: () => ({
    organization: [],
    params:{
      page: 1,
      page_size: 2,
      ordering: '-id'
    },
  }),
  actions: {
    async getOrganization(page = 1,page_size = 20,ordering ='-id') {

      this.params.page = page
      this.params.ordering = ordering
      this.params.page_size = page_size

      const data = await axios.get(BASE_URL,{
        params:this.params
      })

      this.organization = data?.data?.results   
    },
    async addOrganization(addParams) {
      console.log(addParams.short_name)
      const data = await axios.post(BASE_URL,
        {
          description: addParams.description,
          is_active: addParams.is_active,
          name: addParams.name,
          short_name: addParams.shortName,
      })
      this.getOrganization(this.params.page,this.params.page_size,this.params.ordering)
      console.log(data)
    },
    async deleteOrganization(id) {
      await axios.delete(`${BASE_URL}${id}`)
      this.getOrganization(this.params.page,this.params.page_size,this.params.ordering)
    },
  }
})

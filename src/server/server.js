// lib
import { createServer, Model } from "miragejs";
// src
import { categories, themes } from './seeds';

function dummyServer() {
  createServer({
    models: {
      category: Model,
      theme: Model
    },

    seeds(server) {
      categories.forEach(category => {
        server.create("category", category)
      })
      
      themes.forEach(theme => {
        server.create("theme", theme)
      })
      
    },

    routes() {
      this.get("/api/categories", (schema) => {
        return schema.categories.all();
      });

      this.get("/api/themes", (schema, { queryParams }) => {
        let query = {}
        if(!!queryParams.popular) {
          query = {
            ...query,
            popular: true
          }
        }
        
        if(!!queryParams.latest) {
          query = {
            ...query,
            latest: true
          }
        }

        if(!!queryParams.category) {
          query = {
            ...query,
            categoryKey: queryParams.category
          }
        }

        if(!!query) {
          return schema.themes.where(query);
        }

        return schema.themes.all();

      });
    },
  });
}

export default dummyServer;



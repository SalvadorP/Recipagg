# Recipe Aggregator

## Steps to install the frontend
* clone the repository
* yarn install
* yarn start
---
## Steps for the backend
### Drupal 8
1. Install D8
2. Modify services.yml to accept CORS
3. Create a user and a role for REST and give the proper permissions (access content type, etc)
4. Expose the proper services in REST UI (content, user, ...)
5. Create a content type name recipes (title, body, link, recipe_type, recipe_tags)
6. Create a view to expose all the recipes (expose the fields not the content)
7. Create some content using devel generator
---

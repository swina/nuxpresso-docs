# Strapi CMS template

**nuxpresso-strapi-template** is a Strapi CMS template to work with NUXPRESSO.


## Collections

After installation at bootstrap it adds the following collections to the general schema:

| Collection | Description | REST API endpoint
| :---          | :--           | :---
| Articles      | your CMS content | /articles
| Categories    | your content categories | /categories
| Components    | all blocks created with MOKAStudio | /components
| Contacts      | collects visitors information populated thru contact form/subscribe form. **NOT AVAILABLE WITH FULL STATIC CONFIGURATION**  | /contacts
| Elements      | single type collection with the elements definitions used in MOKAStudio to create blocks | /elements
| Settings      | single type collection with general configuration settings | /settings
| Languages     | languages availables | /languages

## Roles and users

The administrator user will be created automatically at Strapi CMS bootstrap (development mode only).

> email: admin@strapi.local
> username: admin
> password: password


**In order to use MOKAStudio you need to create a user (Users collection) and grant full permission to the authenticated role to the collections above mentioned and File Upload endpoints.**

> My advice is to create a custom role (like Developers) and assign the MOKAStudio user to that role. Then grant full permissions only to this role. In this way you can manage the Authenticated role in a standard way, or as per your needs.

## Initial Data

When you create Strapi CMS using nuxpresso-strapi-template it will create some initial data that can be useful to start with:

- a library of blocks (page samples and a default template)
- a default article as homepage with a default template
- settings and elements needed to use with MOKAStudio (single collections)


## Custom API models and controllers

Following are the custom models and controllers created by nuxpresso-strapi-template


### API 

#### Articles Slug

To take advantage of friendly URLs STRAPI whenever an article is create or updated slugify the title to create a valid slug. 

The slug will be used by nuxpresso website as pages URL 

**http://your_website/articles/_article_slug_**

**Path -** ./api/articles/models/article.js

```
'use strict';
module.exports = {
    lifecycles : {
        beforeCreate: async ( data ) => {
            data.slug = data.title.toLowerCase()
            .replace(/ /g,'-')
            .replace(/[^\w-]+/g,'') 
        }
    }
};
```

**This create a stripped slug based on the title used by nuxpresso as friendly url when a new article has been added**



#### Contacts

> **This is availabled only with a public Strapi CMS**

**Path -** ./api/contacts/controllers/contacts.js
```
'use strict';

module.exports = {
    async create(ctx){
        let email = {
            to: process.env.SITE_EMAIL,
            from: ctx.request.body.email,
            subject: 'Contact Us',
            text: `
            Name:  ${ctx.request.body.firstname} ${ctx.request.body.lastname} 
            Message: ${ctx.request.body.message}`
        }
        if ( ctx.request.body.subscriber ){
            email = {
                to: process.env.SITE_EMAIL,
                from: ctx.request.body.email,
                subject: 'Subscription',
                text: `Subscription from ${ctx.request.body.email}`
            }
        }
        await strapi.plugins['email'].services.email.send(
            email
        );
        await strapi.services.contacts.create( ctx.request.body )
        return ctx
    }
};
```

The controller has 2 scopes:

- register the contact basic information 
- register the contact information with a subscribe flag 

It also automatically send email to site email contact about the new contact registration.

You can update this controller as per your need.



## GraphQL

NUXPRESSO take advantages of GraphQL to reduce the fetch overload of using REST API. Thus means that only the required information is sent out from Strapi CMS.

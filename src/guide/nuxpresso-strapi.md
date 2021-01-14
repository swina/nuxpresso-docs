# Strapi CMS starter

**nuxpresso-strapi** is a Strapi CMS starter configured to work with NUXPRESSO.


## Collections

During installation it adds the following collections to the general schema:

<table>
    <thead>
        <th>Collection</th>
        <th>Description</th>
        <th>REST API endpoint</th>
    </thead>
    <tbody>
        <tr>
            <td>Articles</td>
            <td>your content</td>
            <td>/articles</td>
        </tr>
        <tr>
            <td>Categories</td>
            <td>your content categories</td>
            <td>/categories</td>
        </tr>
        <tr>
            <td>Components</td>
            <td>all blocks created with MOKAStudio</td>
            <td>/components</td>
        </tr>
        <tr>
            <td>Contacts</td>
            <td>
                collects visitors information populated thru contact form/subscribe form
            </td>
            <td>/contacts</td>
        </tr>
        <tr>
            <td>Elements</td>
            <td>
                single type collection with the elements definitions used in MOKAStudio to create blocks
            </td>
            <td>/elements</td>
        </tr>
        <tr>
            <td>Languages</td>
            <td>
                enabled languages 
            </td>
            <td>/languages</td>
        </tr>
        <tr>
            <td>Settings</td>
            <td>
                single type collection with general configuration settings
            </td>
            <td>/settings</td>
        </tr>
    </tbody>
</table>


## Roles and users

If you have installed **nuxpresso-strapi** using the CLI and the config command the administrator user will be created automatically at Strapi CMS bootstrap.

**In order to use MOKAStudio you need to create a user (Users collection) and grant full permission to the authenticated role to the collections above mentioned and File Upload endpoints.**

> My advice is to create a custom role (like Developers) and assign the MOKAStudio user to that role. Then grant full permissions only to this role. In this way you can manage the Authenticated role in a standard way, or as per your needs.

## Custom config and controllers

### Articles


```
// api/articles/models/article.js

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

**This create a stripped slug based on the title used by nuxpresso as friendly url**



### Contacts


```
// api/contacts/controllers/contacts.js
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



## GraphQL and external providers

### GraphQL 

NUXPRESSO take advantages of GraphQL to reduce the fetch overload of using REST API. Thus means that only the required information is sent out from Strapi CMS.

**The GraphQL configuration is required in order to make NUXPRESSO working correctly**

### External providers

If you plan to use external providers like Cloudinary and Mailgun you need to update the ```config/plugin.js``` file as follow.


```
// config/plugins.js

module.exports = ({env})=>({
    //GraphQL is required and installed by default: do not remove
    graphql: {
      endpoint: '/graphql',
      tracing: false,
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
    },

    //Cloudinary media provider
    upload: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env('CLOUDINARY_CLOUD_NAME'),
        api_key: env('CLOUDINARY_API_KEY'),
        api_secret: env('CLOUDINARY_API_SECRET')
      }
    },
    //Mailgun media provider
    email: {
      provider: 'mailgun',
      providerOptions: {
        apiKey: env('MAILGUN_API_KEY'),
        domain: env('MAILGUN_DOMAIN')
      },
      settings: {
        defaultFrom: env('MAILGUN_FROM'),
        defaultReplyTo: env('MAILGUN_REPLYTO')
      },
    },

})
```

If you are using different providers you have to install the relative dependencies needed and update the ```config/plugins.js``` depending on the provider you are using and update the relative environment variables. 

Please refer to the official [Strapi CMS documentation](https://strapi.io/documentation/) on how to configure you providers.
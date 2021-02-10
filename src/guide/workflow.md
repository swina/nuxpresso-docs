# Workflow

NUXPRESSO has been designed to simplify the process to create and maintain web sites based on Strapi CMS.

The concept is to deploy a **full static serverless website**. 

By the way nuxpresso can work with 3 different scenario:

| Application      | Serverless | Strapi Cloud  | nuxpresso / Strapi Cloud | Notes
| :---              | :---      | :--- | :--- | :--- | :---
| **nuxpresso**     | local     | local   | deploy | Generate locally / Deploy **./dist** folder
| **MOKAStudio**    | local     | local   | local  | Suggested always locally
| **Strapi CMS**    | local     | deploy  | deploy | 


Thus means that the normal workflow should be as follows:

## Serverless 

- create the local development environment installing the apps required
- configure the local environment
- create blocks, content and add media assets using MOKAStudio
- local preview of the result using NUXPRESSO Static Site Generator

### Deployment to production

Deploy **./dist** folder as indicated in the deployment section [**nuxpresso**](/guide/deploy.html#nuxpresso) 


## Strapi in the Cloud

Suppose you have different remote contributors to your Strapi CMS like editors, published that constantly add or update contents you need to deploy you Strapi to the cloud.

### Layout updates or new design 

In this case you can connect MOKAStudio directly to the remote Strapi backend and manage the publishing of new revisions or any update of the website.
Then run a new generate with nuxpresso-nuxt and deploy the changes.

### Flexibility of working locally

nuxpresso has been developed thinking to developers that loves to work locally      

If you are not planning to deploy a full static serverless website your workflow will require to transfer your content to the Strapi CMS using MOKAStudio.


### Staging: Transfer articles/pages

If you worked on a local Strapi installation but you need to deploy it in the cloud you can use MOKAStudio Staging option to transfer only the articles/blocks that you need to publish.

> In order to be able to transfer/update your articles you need to set the environment variables to connect to your deployed Strapi CMS.
>
> Your env file will be as follow


**Path -** *./.env*

```
VUE_APP_API_URL=http://localhost:1337/
VUE_APP_GRAPHQL=http://localhost:1337/graphql
VUE_APP_LOCAL=true|false
VUE_APP_DEV_USER=_username_
VUE_APP_DEV_PASSWORD=_password_
VUE_APP_DEV_EMAIL=_email_
VUE_APP_FONT_FAMILIES=|Abel|Alice|Alegreya|Amethysta|Nunito+Sans|Roboto|Quattrocento|Raleway|Lora|PT+Sans
VUE_APP_PRODUCTION_URL=_STRAPI_CMS_REMOTE_URL_
VUE_APP_PRODUCTION_GRAPHQL=_REMOTE_STRAPI_CMS_GRAPHQL_URL_
VUE_APP_REMOTE_USER=_REMOTE_STRAPI_CMS_USER_
VUE_APP_REMOTE_PASSWORD=_REMOTE_STRAPI_CMS_PASSWORD
```

VUE_APP_PRODUCTION_URL : Your Strapi production URL

VUE_APP_PRODUCTION_GRAPHQL : Your Strapi GraphQL endpoint

VUE_APP_REMOTE_USER : Strapi production user

VUE_APP_REMOTE_PASSWORD: Strapi production user password


<img src="https://res.cloudinary.com/moodgiver/image/upload/v1611680287/moka_studio_staging_7bdc71b70c.png"/>

When you have your production environment ready and running :
- from MOKAStudio select **Staging**
- wait for connection to your remote Strapi CMS instance
- click on Articles
- from the list of Articles double click on the page of your local environment that you want to transfer/update

This procedure will add/update the remote Strapi CMS instance tranferring only the pages you need for your website.

If a page exists (same slug) you will be asked to overwrite the page. Confirm to update the page.

### Transfer blocks

Normally you don't need to transfer any block other then the loop template block. This is used to output the articles list (page loop) as per your design.

> Production environment doesn't require you transfer any block other then the loop templates.

### Media assets

In this case my advice is to use an external media provider also in development mode since this will simplify the deployment and data transfer. 

Thus because using the staging feature you can update your production data without the need to transfer any media.

In NUXPRESSO all media reference are automatically converted with the relative URL of the location of the media asset.

For this reason **if you don't use an external provider** your media assets will be referred with the following URL

```
https://_your_strapi_url/upload/_file_name
```

> **If you are planning to run Strapi file upload local option on Heroku or similar without persistent storage of data since that uses a ephemeral filesystem your upload folder will be deleted at every ciclyng process**
> Read more from this [article](https://help.heroku.com/K1PPS2WM/why-are-my-file-uploads-missing-deleted)
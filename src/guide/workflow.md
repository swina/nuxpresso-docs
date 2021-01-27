# Workflow

NUXPRESSO has been designed to simplify the process to create and maintain web sites based on Strapi CMS.

The concept is to deploy only the data you need nothing more. This will keep your production environment clean and more efficient.

Using MOKAStudio in development mode you will be able to transfer/update your articles and the relative design (blocks) easily with just a click.

Thus means that the normal workflow should be as follows:

## Local development

- create the local development environment installing the apps required
- configure the local environment
- create blocks, content and add media assets using MOKAStudio
- local preview of the result using NUXPRESSO Static Site Generator

## Deployment to production

- deploy **nuxpresso** static site generator [**nuxpresso-nuxt**](https://github.com/swina/nuxpresso-nuxt)
- create a repo (Github,GitLab) of your Strapi CMS created with **nuxpresso-strapi-template**
- deploy using your repo on a provider of your choice

## Staging: Transfer articles/pages

> In order to be able to transfer/update your articles you need to set the environment variables to connect to your deployed Strapi CMS.
>
> Your env file will be as follow


**Path -** *./.env*

```
VUE_APP_API_URL=http://localhost:1337/
VUE_APP_GRAPHQL=http://localhost:1337/graphql
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

My advice is to use an external media provider also in development mode since this will simplify the deployment and data transfer. 

Thus because using the staging feature you can update your production data without the need to transfer any media.

In NUXPRESSO all media reference are automatically converted with the relative URL of the location of the media asset.

For this reason **if you don't use an external provider** your media assets will be referred with the following URL

```
https://_your_strapi_url/upload/_file_name
```

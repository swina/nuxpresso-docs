# Workflow

NUXPRESSO has been designed to be a set of developer tools to create and maintain web sites based on Strapi CMS.

Thus means that the normal workflow should be as follows:

## Standard Workflow

### Local development

- create the local development environment installing the apps required
- configure the local environment
- create blocks, content and add media assets using MOKAStudio
- local preview of the result using NUXPRESSO Static Site Generator

### Deployment to production

- create a repo (Github,GitLab) of your Strapi CMS created with **nuxpresso-strapi-template**
- deploy using your repo on a provider of your choice, settings the environment variables as follows

```
HOST=0.0.0.0
PORT=1337
DEV_USER=_STRAPI_ADMIN_USERNAME_
DEV_PASS=_STRAPI_ADMIN_PASSWORD
DEV_EMAIL=_STRAPI_ADMIN_EMAIL_
DATABASE_CLIENT=_DATABASE_CLIENT_
DATABASE_HOST=_DATABASE_HOST_
DATABASE_PORT=_DATABASE_PORT_
DATABASE_NAME=_DATABASE_NAME_
DATABASE_USERNAME=_DATABASE_USERNAME_
DATABASE_PASSWORD=_DATABASE_PASSWORD
DATABASE_SSL=_DATABASE_SSL_
SITE_EMAIL=_SITE_EMAIL_
```

Export your local database to the remote one.

## Mixed workflow

A mixed workflow means that your development will work on a Strapi CMS public installation and deployment. 
In this case you won't need to dump any data from your local development.

- create a repo (Github,GitLab) of your Strapi CMS created with **nuxpresso-strapi-template**
- deploy using your repo on a provider of your choice, settings the environment variables as indicated above
- update the environment variables for **nuxpresso** and **MOKAStudio** to connect to your Strapi installation

## Which workflow to use?

The answer depends on your needs. 

#### Test environment

If you are planning to set a test environment use the **standard workflow**. It's a full local development environment. You can also use an external media provider and an external email provider. Follows the [Strapi CMS configuration notes](/guide/configuration.html#strapi-cms-configuration-notes) on how to configure external providers

#### Staging environment

If you are planning to develop a real website my suggestion is to use a mixed workflow, where the CMS is in a pre-production configuration with a public access. You need to add the environment configuration manually depending on your provider where Strapi CMS is installed.

> If you plan to deploy Strapi CMS with a local media upload option please notice that for some hosting providers that regenerate the app (like the dynos for Heroku free plan) assets are not persistent. This will result in possible broken links or reference to media assets in your blocks or even pages. 
> In this case my advice is to use an external provider (like Cloudinary that has a free plan) as a stable source.

Run **nuxpresso** static site generator and **MOKAStudio** locally to start working on your website.

When your development is completed or you just want to check a public preview of your website deploy **nuxpresso** static site generator to production.

> **MOKAStudio is not required to be deployed since it can connect directly to your CMS.**
> 
> **For security reasons my advice is to not deploy MOKAStudio**

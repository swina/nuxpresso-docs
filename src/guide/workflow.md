# NUXPRESSO Workflow

NUXPRESSO has been designed to be a set of developer tools to create and maintain web sites based on Strapi CMS.

Thus means that the normal workflow should be as follows:

## Standard Workflow

### Local development

- create the local development environment installing the apps required
- configure the local environment
- create blocks, content and add media assets using MOKAStudio
- local preview of the result using NUXPRESSO Static Site Generator

### Deployment to production

- deploy **nuxpresso-strapi** Strapi CMS Starter on a provider of your choice
- deploy **nuxpresso** static site generator on a provider of your choice
- transfer your assets, database to the production environment


## Mixed Workflow

- deploy **nuxpresso-strapi** Strapi CMS Starter to a provider of your choice. In this case you need to set the environment key values depending on your provider requirements. The keys required are:

```
HOST=0.0.0.0
PORT=1337
DEV_USER=_STRAPI_ADMIN_USERNAME_
DEV_PASS=_STRAPI_ADMIN_PASSWORD
DEV_EMAIL=_STRAPI_ADMIN_EMAIL_
ADMIN_JWT_SECRET=_add_your_JWT_secret_
DATABASE_CLIENT=_DATABASE_CLIENT_
DATABASE_HOST=_DATABASE_HOST_
DATABASE_PORT=_DATABASE_PORT_
DATABASE_NAME=_DATABASE_NAME_
DATABASE_USERNAME=_DATABASE_USERNAME_
DATABASE_PASSWORD=_DATABASE_PASSWORD
DATABASE_SSL=_DATABASE_SSL_
CLOUDINARY_API_KEY=_CLOUDINARY_API_KEY_
CLOUDINARY_API_SECRET=_CLOUDINARY_API_SECRET_
CLOUDINARY_CLOUD_NAME=_CLOUDINARY_CLOUD_NAME_
MAILGUN_API_KEY=_MAILGUN_API_KEY_
MAILGUN_DOMAIN=_MAILGUN_DOMAIN_
MAILGUN_FROM=_MAILGUN_FROM_EMAIL_ADDRESS_
MAILGUN_REPLYTO=_MAILGUN_REPLYTO_EMAIL_ADDRESS
SITE_EMAIL=_SITE_EMAIL_
```

- create the local development environment settings the Strapi CMS configuration to the remote **nuxpresso-strapi** installation
- run **nuxpresso** and **MOKAStudio** locally. In this way they will connect to the remote Strapi CMS installation

## Which workflow to use?

The answer depends on your needs. 

#### Test environment

If you are planning to set a test environment use the **standard workflow**. It's a full local development environment. You can also use an external media provider and an external email provider. Follows the [Strapi CMS configuration notes](/guide/configuration.html#strapi-cms-configuration-notes) on how to configure external providers

#### Staging environment

If you are planning to develop a real website my suggestion is to use a mixed workflow, where the CMS is in a pre-production configuration with a public access. You need to add the environment configuration manually depending on your provider where **nuxpresso-strapi** Strapi CMS Starter is installed.

> If you plan to deploy Strapi CMS with a local media upload option please notice that for some hosting providers that regenerate the app (like the dynos for Heroku free plan) assets are not persistent. This will result in possible broken links or reference to media assets in your blocks or even pages. 
> In this case my advice is to use an external provider (like Cloudinary that has a free plan) as a stable source.

Run **nuxpresso** static site generator and **MOKAStudio** locally to start working on your website.

When your development is completed or you just want to check a public preview of your website deploy **nuxpresso** static site generator to production.

> **MOKAStudio is not required to be deployed since it can connect directly to your CMS.**
> 
> **For security reasons my advice is to not deploy MOKAStudio**

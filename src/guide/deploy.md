# Deployment

To publish your website you need to deploy **nuxpresso** (nuxpresso-nuxt) static site generator and **Strapi CMS**


## nuxpresso deployment

nuxpresso is the static site generator that will run your website.
You can deploy nuxpresso using directly the official [repo](https://github.com/swina/nuxpresso-nuxt).
Set the deployment environment variables according to your Strapi CMS.

## MOKAStudio deployment

> MOKAStudio doesn't require a production deployment since you can run on a local environment and connect to your Strapi CMS. Just update the environment variables to set the credentials. Refer to [MOKAStudio configuration](http://localhost:8081/guide/configuration.html#mokastudio-configuration)

**For security reasons my advice is to not deploy MOKAStudio**

If you plan to deploy MOKAStudio on a public server just use the original [repo](https://github.com/swina/nuxpresso-moka) and set the environment variables to connect to the Strapi CMS.


## Strapi CMS deployment

Strapi CMS for nuxpresso is based on a custom template. If you plan to deploy on most common providers like Heroku, AWS or others that support, you must create a repository with the Strapi CMS created following this guide.

### Strapi assets

nuxpresso Strapi CMS template is configured to work with local assets and service (upload and email).
Thus means that for some providers, like Heroku free plan, the assets will be deleted when application is restarted (dynos)

I suggest to read my [NUXPRESSO Workflow](/guide/workflow.html) guide in order to decide your own workflow that fits with your needs.


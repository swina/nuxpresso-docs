# NUXPRESSO Static Site Generator

**nuxpresso-nuxt** is the static site generator used to publish your website. 

It generates your website based on the Strapi CMS content, based on the general settings, the pages and the templates connected to each content itself.

All settings and configuration, as well the content (articles) and relative layout/template are defined in MOKAStudio.

**nuxpresso-nuxt** needs only some environment variables to connect to your Strapi CMS app.

*.env*

```
API_URL=_Strapi_CMS_URL_
RECAPTCHA=_RECAPTCHA_API_KEY_
NUXPRESSO_TITLE=_YOUR_WEBSITE_TITLE_
NUXPRESSO_HEADLINE=_YOUR_WEBSITE_HEADLINE_
```
> Environment variables are automatically generated if you use nuxp-cli to configure your local environment
>
> By the way you need to create the environment variables in the deploy environment in order to work correctly


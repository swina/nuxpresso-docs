# nuxpresso Static Site Generator

**nuxpresso-nuxt** is the static site generator used to publish your website. 

It generates your website based on the Strapi CMS content, based on the general settings, the pages and the templates connected to each content itself.

All settings and configuration, as well the content (articles) and relative layout/template are defined in MOKAStudio.

**nuxpresso-nuxt** needs only some environment variables to connect to your Strapi CMS app.

> Please read the [configuration section](/guide/configuration.html#nuxpresso) before to run nuxpresso.

**Required configuration**

**Path-***./.env*

```
API_URL=_Strapi_CMS_URL_
GOOGLE_ANALYTICS=UA-XXXXXXX
RECAPTCHA=_RECAPTCHA_API_KEY_
NUXPRESSO_TITLE=_YOUR_WEBSITE_TITLE_
NUXPRESSO_HEADLINE=_YOUR_WEBSITE_HEADLINE_
FONT_FAMILIES=_FONTS_LIST_SEPARATED_BY_|_
```

> GOOGLE_ANALYTICS and RECAPTCHA are not required in development mode


## First run

```
nuxpresso $ cd /nuxpresso-nuxt
nuxpresso/nuxpresso-nuxt $ yarn dev
```

Connect to [nuxpresso](http://localhost:3000)

By default a sample homepage will be displayed.


## Google Analytics

nuxpresso by default install the package **@nuxtjs/google-analytics**.
If you are not planning to use Google Analytics on your website remove with

```
yarn remove @nuxtjs/google-analytics
```

Then update **./nuxt.config.js** removing 

```
    ....
    /*
    ** GOOGLE ANALYTICS remove if you don't use
    */
    googleAnalytics: {
        id: process.env.GOOGLE_ANALYTICS || 'UA-XXX-X'
    }
    ...
```

and remove from the buildModules


```
  buildModules: [
     ...
    '@nuxtjs/google-analytics'
  ],
```
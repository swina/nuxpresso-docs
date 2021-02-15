# Configuration

In order to connect to your Strapi CMS you need to configure **nuxpresso** and **MOKA Studio**

> Cloning the nuxpresso repos you will find **.env.default.example** in the root folder.
>
> Update them with your data and rename to **.env**

## nuxpresso

Create an ```.env``` file at the root folder of nuxpresso (default ```nuxpresso-nuxt```) and add the following environment variables


```
API_URL=_Strapi_CMS_URL_
FULL_STATIC=true|false
LOCAL_ASSETS=true|false
UPLOADS_FOLDER=_Strapi_CMS_UPLOADS_FOLDER_PATH
NUXPRESSO_TITLE=_YOUR_WEBSITE_TITLE_
NUXPRESSO_HEADLINE=_YOUR_WEBSITE_HEADLINE_
FONT_FAMILIES=_FONTS_LIST_SEPARATED_BY_|_
GOOGLE_ANALYTICS=UA-XXXXXXX
FORM_SENDER=_YOUR_FORM_SENDER_ENDPOINT
RECAPTCHA=_RECAPTCHA_API_KEY_
```

| Variable | Description | Notes
| :---      | :---      | :---
| API_URL     | Strapi CMS url
| FULL_STATIC | when you go to full static during the generate process your media assets will be copied from your local Strapi
| LOCAL_ASSETS | true / false 
| UPLOADS_FOLDER | Strapi CMS uploads folder path. Used if LOCAL_ASSETS is true
| NUXPRESSO_TITLE | website title
| NUXPRESSO_HEADLINE | website headline
| FONT_FAMILIES | list of fonts used separated by the character`|` Set only fonts used by your website
| GOOGLE_ANALYTICS | Google Analytics ID
| FORM_SENDER  | Going full static you need a remote form submission URL with email send support
| RECAPTCHA   | the Recaptcha API KEY (not required in local environment). We suggest to use it in production environment


### Google Analytics

nuxpresso by default install the package **@nuxtjs/google-analytics**. The package is installed as dev dependency since it will be used only at building.

If your website will not use Google Analytics update **./nuxt.config.js** removing 

**Path -** *./nuxt.config.js*
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

and remove the buildModules configuration


```
  buildModules: [
     ...
    '@nuxtjs/google-analytics'
  ],
```

## MOKAStudio

Create an ```.env``` file at the root folder of MOKAStudio (default ```nuxpresso-moka```) and add the following environment variables

**Path -** *./.env*
```
VUE_APP_API_URL=http://localhost:1337/
VUE_APP_GRAPHQL=http://localhost:1337/graphql
VUE_APP_LOCAL=true|false
VUE_APP_DEV_USER=_username_
VUE_APP_DEV_PASSWORD=_password_
VUE_APP_DEV_EMAIL=_email_
VUE_APP_FONT_FAMILIES=|Abel|Alice|Alegreya|Amethysta|Nunito+Sans|Roboto|Quattrocento|Raleway|Lora|PT+Sans
```

| Variable | Description | Notes
| :---      | :---        | :---
| VUE_APP_API_URL | Strapi CSM url | *ex. http://localhost:1337/*
| VUE_APP_GRAPHQL | Strapi Graphql endpoint | *ex. http://localhost:1337/graphql*
| VUE_APP_LOCAL   | Strapi local | Set false if connecting to a remote Strapi 
| VUE_APP_DEV_USER | Strapi CMS Authenticated user | Required only in *production*
| VUE_APP_DEV_PASSWORD | user password | Required only in *production*
| VUE_APP_DEV_EMAIL | email address | Required only in *production*
| VUE_APP_FONT_FAMILIES | list of font families separated by '\|' | MOKAStudio adds by default the Barlow Condensed font used by the application. For this reason the first character of the environment variable is |.

>
> **No user is required in order to update Strapi CMS data in development environment**
> 
> **If MOKAStudio will connect to a remote Strapi it will create the user at first run**
> **You need also to grant full permissions to the authenticated user**

#### Fonts support

> You can add google fonts using the environment variables. Any font added here will be available in MOKAStudio as font setting for any element. 
>
> To reduce the size of extra fonts in **nuxpresso** add only fonts that are used on your website 



## Strapi CMS

In local development no special configuration is required. All configuration and settings are automatically created at installation time except for the GraphQL plugin. 

**To add GraphQL support you need to create a ./config/plugins.js as follows**

**Path -** ./config/plugins.js

```
module.exports = ({ env }) => ({
    //.. other plugins configuration ...
    graphql: {
      endpoint: '/graphql',
      tracing: false,
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
    }
});
```




## Running nuxpresso 


#### Run Strapi CMS
If you followed our installation and configuration guide you have a [Strapi CMS running](http://localhost:1337/admin), otherwise 

```
/nuxpresso/nuxpresso-strapi $ yarn develop
```

### Update the Public Role permissions in production

**In order to work with a remote Strapi CMS installation nuxpresso needs you need to grant read permissions to the Public role.**

- Login to the Strapi CMS.
- Go to **Settings**
- **USER PERMISSIONS AND SETTINGS > Roles**
- Click on **Public**
- Checkout the find / findone / count (if available) for all the APPLICATION collections
- Checkout the find / findone / count for FILE UPLOAD

<img src="https://res.cloudinary.com/moodgiver/image/upload/v1610886096/strapi_public_permissions_c6999fee15.png"/>

> **Checkout as per image for all APPLICATION collections and FILE UPLOAD**



#### Run nuxpresso
```
/nuxpresso/nuxpresso-nuxt $ yarn dev
```
Checkout here [nuxpresso](http://localhost:3000)

#### Run MOKAStudio

```
/nuxpresso/nuxpresso-moka $ yarn serve
```
Checkout here [MOKAStudio](http://localhost:8080)

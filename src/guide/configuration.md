# Configuration

In order to connect to your Strapi CMS you need to configure **nuxpresso** and **MOKA Studio**

## nuxpresso configuration

Create an ```.env``` file at the root folder of nuxpresso (default ```nuxpresso-nuxt```) and add the following environment variables

```
API_URL=http://localhost:1337/
RECAPTCHA=_RECAPTCHA_API_KEY (if used)
NUXPRESSO_TITLE=nuxpresso
NUXPRESSO_HEADLINE=Your next CMS
```

- API_URL : Strapi CMS url
- RECAPTCHA : the Recaptcha API KEY (not required in local environment). We suggest to use it in production environment
- NUXPRESSO_TITLE: website title
- NUXPRESSO_HEADLINE : website headline



## MOKAStudio configuration

Create an ```.env``` file at the root folder of nuxpresso (default ```nuxpresso-moka```) and add the following environment variables

```
VUE_APP_API_URL=http://localhost:1337/
VUE_APP_GRAPHQL=http://localhost:1337/graphql
VUE_APP_DEV_USER=_username_
VUE_APP_DEV_PASSWORD=_password_
VUE_APP_DEV_EMAIL=_email_
VUE_APP_FONT_FAMILIES=|Abel|Alice|Alegreya|Amethysta|Nunito+Sans|Roboto|Quattrocento|Raleway|Lora|PT+Sans
```

- VUE_APP_API_URL : Strapi CSM url
- VUE_APP_GRAPHQL : Strapi Graphql endpoint
- VUE_APP_DEV_USER : Strapi CMS Authenticated user to work with MOKAStudio
- VUE_APP_DEV_PASSWORD : user password
- VUE_APP_DEV_EMAIL : email address

> **A user is required in order to update Strapi CMS data.**
>
> **Setting this user credential MOKAStudio will create the user at first run**

## Strapi CMS configuration

In local development no special configuration is required. All configuration and settings are automatically created at installation time.


## Running nuxpresso 


#### Run Strapi CMS
If you followed our installation and configuration guide you have a [Strapi CMS running](http://localhost:1337/admin), otherwise 

```
/nuxpresso/nuxpresso-strapi $ yarn develop
```

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

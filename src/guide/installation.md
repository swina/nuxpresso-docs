# Installation

## Requirements

| Software | Version | Remarks
| :---      | :---    | :---
| Nodejs    | > 12    | Strapi CMS supported version. See Strapi documentation
| yarn      | > 1.22  | (recommended)
| npm       | > 6.6
| database  | any supported by Strapi | **MondoDB is not supported by the current version of nuxpresso**

> If you plan to go Servless Full Static with nuxpresso no database is required (SQLLite usage) 


## Installation

Create a working folder

```
/ $ mkdir nuxpresso
/ $ cd nuxpresso
```

### Install nuxpresso-nuxt

Clone the [repo](https://github.com/swina/nuxpresso-nuxt) and install **nuxpresso-nuxt** dependencies

```
/nuxpresso $ git clone https://github.com/swina/nuxpresso-nuxt
/nuxpresso $ cd nuxpresso-nuxt
/nuxpresso/nuxpresso-nuxt $ yarn (or npm install)
```

### Install MOKA Studio

Clone the [repo](https://github.com/swina/nuxpresso-moka) and install **MOKA Studio** dependencies

```
/nuxpresso $ git clone https://github.com/swina/nuxpresso-moka
/nuxpresso $ cd nuxpresso-moka
/nuxpresso/nuxpresso-moka $ yarn (or npm install)
```

### Install Strapi CMS

Install Strapi CMS using the **nuxpresso-strapi-template** template

With **yarn** 

```
/nuxpresso $ yarn create strapi-app nuxpresso-strapi --template https://github.com/swina/nuxpresso-strapi-template
```

With **npx**

```
npx create-strapi-app nuxpresso-strapi --template https://github.com/swina/nuxpresso-strapi-template
```

Follow the instructions required by the Strapi CMS installation.

For local development select **Quickstart** installation.

At first run **nuxpresso-strapi-template** will: 

- create the admin user 
    - user : admin
    - password: password
    - firstname: Admin
    - lastname: Admin
    - email: admin@strapi.local
- import a library of blocks ready to use
- set a default settings
- create a initial simple homepage
- set the permission to create/update used by MOKAStudio. Since is running locally the template will grat full permission to the Public Role.

> **nuxpresso-strapi-template** is intended to be used in local environment and uses a custom ./config/bootstrap.js. If you plan to deploy your Strapi CMS installation create environment variables according to the [deployment section](/guide/deploy.html#strapi-cms-deployment)

After Strapi CMS installation your nuxpresso Strapi CMS is running at [localhost:1337/admin](http://localhost:1337/admin)
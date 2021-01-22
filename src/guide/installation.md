# Installation

## Requirements

<table>
    <thead>
        <th>Software</th>
        <th>Minimum version</th>
        <th>Recommended version</th>
    </thead>
    <tbody>
        <tr>
            <td>Node.js</td>
            <td>12.x</td>
            <td>14.x</td>
        </tr>
        <tr>
            <td>yarn (suggested)</td>
            <td>1.22</td>
            <td>1.22</td>
        </tr>
        <tr>
            <td>npm</td>
            <td>6.x</td>
            <td>6.x</td>
        </tr>
    </tbody>
</table>


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

> **nuxpresso-strapi-template** is intended to be used in local environment and uses a custom ./config/bootstrap.js. If you plan to deploy your Strapi CMS installation create environment variables according to the [deployment section](/guide/deploy.html#strapi-cms-deployment)

After Strapi CMS installation your nuxpresso Strapi CMS is running at [localhost:1337/admin](http://localhost:1337/admin)
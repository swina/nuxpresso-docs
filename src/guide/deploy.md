# Deployment

## Full static

> Default configuration doesn't require any server deployment since it generates a **full static** website
> You just need to deploy the *./dist* folder to your hosting provider


### nuxpresso


1. Create a repo of your nuxpresso installation. 

2. run the generate command 

```
/nuxpresso/nuxpresso-nuxt $ yarn generate
```

This will create you static version in the **./dist** folder

3. Commit to your repo including the **./dist** folder (remove from .gitignore)

```
/nuxpresso/nuxpresso-nuxt $ git add .
/nuxpresso/nuxpresso-nuxt $ git commit -m "My website"
/nuxpresso/nuxpresso-nuxt $ git push -u origin master
```

If you are using providers like Netlify, Vercel, ecc. connect the deployment to your repo.

4. To publish leave the deployment command to build empty

5. Set the destination folder to **./dist**

### Assets

#### Local Upload

Using local upload requires to copy the **./public/uploads** folder content to **./static/uploads** folder of nuxpresso

#### External provider for upload

Using an external upload provider for your assets doesn't require any action.


## Public Strapi CMS

### nuxpresso

Set the deployment environment variables as indicated in the configuration updating the data to connect to your production Strapi CMS. Refer to [nuxpresso configuration](/guide/configuration.html#nuxpresso-configuration)


### Strapi CMS

Strapi CMS for nuxpresso is based on a custom template. If you plan to deploy on most common providers like Heroku, AWS or others that support, you must create a repository with the Strapi CMS created following this guide.


### Configuration variables

Following are the configuration variables to create in your production environment


```
DATABASE_CLIENT=_DATABASE_CLIENT_
DATABASE_HOST=_DATABASE_HOST_
DATABASE_PORT=_DATABASE_PORT_
DATABASE_NAME=_DATABASE_NAME_
DATABASE_USERNAME=_DATABASE_USERNAME_
DATABASE_PASSWORD=_DATABASE_PASSWORD
DATABASE_SSL=_DATABASE_SSL_
SITE_EMAIL=_SITE_EMAIL_
```

### Database connection 

- update  **./config/database.js**

**Path -** ./config/database.js (using postgres)

```
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: env('DATABASE_CLIENT),
        host: env('DATABASE_HOST'),
        port: env.int('DATABASE_PORT'),
        database: env('DATABASE_NAME'),
        username: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD')
      },
      options: {}
    },
  },
});
```


### External providers plugins

If you plan to use external providers plugins (upload, email, etc) in your production environment you have to: 
- add the packages required in your ```package.json``` file
- add the environment variables required by your plugins
- update the ```./config/plugin.js```

### Create a repo and deploy it

Create a repo on your repository account

Add remote origin to your nuxpresso Strapi CMS folder

```
/nuxpresso/nuxpresso-strapi $ git remote add origin https://github.com/_user_/_repo.git_
```

Where _user_ is your username and _repo.git_ your repo name

> Be sure the env files are included in the .gitignore list

Deploy using your repo.

### Strapi documentation

> For more info please read the [official Strapi CMS documentation](https://strapi.io/documentation/developer-docs/latest/admin-panel/deploy.html) about deployment and plugin installation



### Strapi assets

nuxpresso Strapi CMS template is configured to work with local assets and service (upload and email).
Thus means that for some providers, like Heroku free plan, the assets will be deleted when application is restarted (dynos)

I suggest to read my [Workflow](/guide/workflow.html) guide in order to understand better NUXPRESSO workflow.


## MOKAStudio

> MOKAStudio doesn't require a production deployment since you can run on a local environment and connect to your Strapi CMS. Just update the environment variables to set the credentials. Refer to [MOKAStudio configuration](/guide/configuration.html#mokastudio-configuration)

**For security reasons my advice is to not deploy MOKAStudio**

If you plan to deploy MOKAStudio on a public server just use the original [repo](https://github.com/swina/nuxpresso-moka) and set the environment variables to connect to the Strapi CMS.

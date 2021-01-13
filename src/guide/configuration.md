# Configuration

## Strapi CMS configuration notes

nuxpresso-strapi is configured to run using [Cloudinary](https://cloudinary.com) as media provider and [Mailgun](https://mailgun.com) as mail service provider. 

If you are using different providers you have to update the ```config/plugins.js``` and install the relative dependencies needed. 

Please refer to the official [Strapi CMS documentation](https://strapi.io/documentation/) on how to configure you providers.


## Configure nuxpresso installation

```
nuxp-cli config


? Do you want to configure nuxpresso (existing configuration will be overwritten)? Yes
? Strapi HOST IP 0.0.0.0
? Strapi HOST PORT 1338
? Strapi Admin username admin
? Strapi Admin password [hidden]
? Strapi Admin Email admin@test.test
? DATABASE Type postgres
? DATABASE Host 127.0.0.1
? DATABASE Port 5435
? DATABASE Name nuxpresso-strapi
? DATABASE Username
? DATABASE Password [hidden]
? DATABASE SSL No
? Cloudinary API KEY
? Cloudinary API SECRET
? Cloudinary Cloud Name
? Mailgun API KEY
? Mailgun Domain
? Mailgun Email From
? Mailgun Reply To
? SITE Email ()


? Confirm configuration? (Use arrow keys)
> Confirm
  Restart
  Quit                                                                                                                                                                                
```

When confirmed the CLI will automatically create the env configuration files for all the apps.

## Build Strapi admin

After the configuration you need to run the Strapi CMS build in order to set it working. This will also create the admin user defined in the config process. Be sure to move to the nuxpresso-strapi installation folder.

```
cd nuxpresso-strapi
yarn build
```

## Run the development environment

When the Strapi build process is completed you can run the nuxpresso development environment using the following CLI command

```
nuxp-cli nuxpresso:dev
```

As for the configuraiton procedure you will have


As per default configuration you will have: 
 - Strapi CMS running (http://localhost:1337 by default)
 - NUXPRESSO (http://localhost:3000)
 - MOKAStudio (http://localhost:8080)


Alternatively you can run each app indipendently

Strapi CMS
```
/nuxpresso/nuxpresso-strapi $ yarn develop
```

nuxpresso
```
/nuxpresso/nuxpresso-nuxt $ yarn dev
```

MOKAStudio

```
/nuxpresso/nuxpresso-moka $ yarn serve
```
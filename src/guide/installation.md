# Installation

## Requirements

The following repos are required 

- **[nuxpresso](https://github.com/swina/nuxpresso-nuxt)** a static site generator based on NuxtJS
- **[MOKAStudio](https://github.com/swina/nuxpresso-moka)** a visual blocks builder
- **[nuxpresso-strapi](https://github.com/swina/nuxpresso-strapi)** a [Strapi CMS](https://strapi.io) starter configured to work with nuxpresso and MOKAStudio

To facilitate the process of running a working development environment I create a CLI to:

- install the repos required
- set the configuration for the apps required
- run the development environment based on the configuration set during the installation

## Using the CLI

### Install the CLI

```
npm install -g nuxp-cli 
```

### Install Nuxpresso

```
mkdir nuxpresso
cd nuxpresso
nuxp-cli nuxpresso:new
```

This will install all the repos required with the following structure from your nuxpresso folder.

```
|--nuxpresso-moka
|--nuxpresso-nuxt
|--nuxpresso-strapi
```

**nuxpresso-moka** : MOKAStudio 

**nuxpresso-nuxt** : nuxpresso site generator based on NUXTJS

**nuxpresso-strapi** : Strapi CMS starter to work with nuxpresso


## Manual Installation

#### NUXPRESSO - Static site generator 

```
git clone https://github.com/swina/nuxpresso-nuxt
yarn install
```
#### MOKAStudio - Visual Blocks Builder

```
git clone https://github.com/swina/nuxpresso-moka
yarn install
```

#### nuxpresso-strapi - Strapi CMS starter

```
git clone https://github.com/swina/nuxpresso-strapi
yarn install
```




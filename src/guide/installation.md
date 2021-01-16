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

The following repos are required 

- **[nuxpresso](https://github.com/swina/nuxpresso-nuxt)** a static site generator based on NuxtJS
- **[MOKAStudio](https://github.com/swina/nuxpresso-moka)** a visual blocks builder
- **[nuxpresso-strapi-template](https://github.com/swina/nuxpresso-strapi)** a [Strapi CMS](https://strapi.io) template

## Installation

Create a working folder

```
/ $ mkdir nuxpresso
/ $ cd nuxpresso
```

### Install nuxpresso-nuxt

Install **nuxpresso-nuxt** dependencies

```
/nuxpresso $ git clone https://github.com/swina/nuxpresso-nuxt
/nuxpresso $ cd nuxpresso-nuxt
/nuxpresso/nuxpresso-nuxt $ yarn (or npm install)
```

### Install MOKA Studio

Install **MOKA Studio** dependencies

```
/nuxpresso $ git clone https://github.com/swina/nuxpresso-moka
/nuxpresso $ cd nuxpresso-moka
/nuxpresso/nuxpresso-moka $ yarn (or npm install)
```

### Install Strapi CMS

Install Strapi CMS using the **nuxpresso-strapi-template** template

With yarn 

```
/nuxpresso $ yarn create strapi-app nuxpresso-strapi --template https://github.com/swina/nuxpresso-strapi-template
```

With npx

```
npx create-strapi-app nuxpresso-strapi --template https://github.com/swina/nuxpresso-strapi-template
```





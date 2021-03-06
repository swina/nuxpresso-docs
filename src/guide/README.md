# Introduction


<img src="https://res.cloudinary.com/moodgiver/image/upload/v1609196023/layers_big_cc995d26d2.png" style="width:400px;height:auto;margin:0 auto;">


## What is Nuxpresso?

- a visual blocks builder (**MOKAStudio**) to create pages, templates, widgets
- static website generator (**nuxpresso-nuxt**) to create a full static website
- a Strapi custom template designed to work with nuxpresso as backend

The main concept is to create a website based on block driven page design.

Using **MOKAStudio visual blocks builder** you compose your page according to the pieces of information you need to publish.

You can reuse created blocks, change layout, css classes can be customized, HTML elements can be added, copied, duplicated, removed. Your blocks are filled like a form, you stack them and create a page.

Thus means enabling maximum reusability and design control while allowing content changes with clear boundaries.

> NUXPRESSO is markup, js and styling coupling applied to webpages. All of this without coding.

You can create shareable blocks that can be used for rich editing experiences in a UI in different projects just exporting/importing them.

The ultimate scope is to build a website that has the cost and time reduction of reusing well known information archetypes expressed as blocks (head, call for action, slider, footer, etc.).

## Full Static

nuxpresso by default configuration is designed to generate a full static version of your website (serverless) and doesn't require any deployment of Strapi CMS.

## Public Backend 

When required nuxpresso can use a public Strapi CMS as backend. 

See the configuration and deployment section for more info.

## Design concept
 

- [**MOKAStudio**](https://github.com/swina/nuxpresso-moka) a visual blocks builder created to improve the websites creative experience for developers.
- [**nuxpresso-nuxt**](https://github.com/swina/nuxpresso-nuxt) a static site generator based on NuxtJS.
- [**nuxpresso-strapi-template**](https://github.com/swina/nuxpresso-strapi-template) a Strapi CMS template to configure Strapi working with nuxpresso.
Based on [Strapi CMS](https://strapi.io) it also takes advantages of the [Strapi CMS templates feature](https://strapi.io/documentation/developer-docs/latest/concepts/templates.html#templates) to set a custom configuration upon installation.
- [**TailwindCSS**](https://tailwindcss.com) as styling framework.


The following diagram shows how nuxpresso works.

<img src="https://res.cloudinary.com/moodgiver/image/upload/v1607699698/nuxpresso_concept_last_e14ca7a8df.jpg"/>


## Open source and free

NUXPRESSO as a website builder and generator with full design control is completely open source and free.

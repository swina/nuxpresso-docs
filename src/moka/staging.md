# Staging

> **This option is available only in development mode and if you have a production Strapi CMS different from the local Strapi installation**

The basic concet of nuxpresso is to help developers to create, publish and maintain websites easily.

In a normal workflow MOKAStudio is used to develop a website locally and then transfer your work to production.

In order to simplify the workflow MOKAStudio Staging gives you the ability to publish your website with a simple process.

By design the deployment and the publish of your website requires only the content of your Strapi production environment. 

<img src="https://res.cloudinary.com/moodgiver/image/upload/v1611680287/moka_studio_staging_7bdc71b70c.png"/>

## Articles transfer

> **The transfer to production process is available only in development mode**

To transfer an article to production just double-click on tha article. You will be asked to confirm.
If an article exists in the remote environment (same slug) you will be asked to overwrite it.

When an article is transferred it contains all the info (content and layout) to publish your page using nuxpresso.

## Blocks transfer

You need to transfer only the Loop Templates used by your website. If you are not using any loop template (slug /articles) you don't need to transfer any block.

## Media

Please refer to the relative [section](/guide/workflow.html#media-assets)
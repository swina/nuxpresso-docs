# Introduction


<div style="display:flex;align-items:center;text-align:center;align-content:center;width:120px;height:120px;border-radius:999rem;background-color:#555;color:#fff;margin:0 auto;">
<div style="flex:1 1 0;font-size:1.4rem;">M O K A</div>
</div>



**MOKAStudio** is a visual blocks builder and generator for Strapi CMS created to improve the websites creative experience for developers.

It has also other functionalities like Strapi content manager (Articles), media manager, staging to production workflow and deploy actions.

<img src="https://res.cloudinary.com/moodgiver/image/upload/v1610372315/nuxpresso_splash_screen_b4149ebc5a.jpg" style="margin:0 auto;"/>


## Features

- WYSIWYG design and creation of reusable blocks, templates, pages, widgets, forms and elements with full control of your content appearance without coding

- Assign pages and templates created with MOKAStudio to your content

- Copy&Paste, Duplicate elements, Hotkeys shortcuts, instant preview, screenshots, component treeview

- Apply advanced animations to any element using GSAP animation engine (15 most common animations pre-configured)

- Import/Export any block/component ot any other nuxpresso installation

- Create/edit your Strapi contents (articles)

- Manage media assets (upload included)

- Transfer from development to production articles and blocks


#### Run MOKAStudio

If you didn't use the CLI to launch the app start with the following command

```
/nuxpresso/nuxpresso-moka $ yarn serve
```

Run first *nuxpresso-strapi* before to use MOKAStudio

## Login 

In order to create/update any block or article you need to authenticate as user on Strapi CMS.

Thus means that you need to create a user and grant full permissions for the authenticated role to the following collections:

- Articles
- Categories
- Components
- Settings
- Elements
- File Upload

You can alternatively create a custom role, create a user with your custom role and grant full permissions as above.


# Introduction


<div style="display:flex;align-items:center;text-align:center;align-content:center;width:120px;height:120px;border-radius:999rem;background-color:#555;color:#fff;margin:0 auto;">
<div style="flex:1 1 0;font-size:1.4rem;">M O K A</div>
</div>



**MOKAStudio** is a visual blocks builder and generator for Strapi CMS created to improve the websites creative experience for developers.

It has also other functionalities like Strapi content manager (Articles), media manager, staging to production workflow and deploy actions.

<img src="https://res.cloudinary.com/moodgiver/image/upload/v1610372315/nuxpresso_splash_screen_b4149ebc5a.jpg" style="margin:0 auto;"/>



## Terminology

| Term | Description
| :------- | :--- |
| **Article** | represent a content saved in your CMS 
| **Category** | used to classify and organize articles
| **Document** | refers to a block of group blocks
| **Block** | a block is a structured object composed of HTML elements and rendered as HTML and CSS
| **Element** | HTML element like div, p, img, etc. In MOKAStudio each element is an object
| **Container** | HTML element (grid and flexbox) used to define a block layout and that includes other HTML |elements or even other containers (nested containers)
| **Customizer** | an option panel used to define its layout and appearance an element/block assigning defined CSS classes 
| **Reusable block** | any block you create becomes a reusable block. Reusable blocks can be imported in any other block.
| **Page** | block category; a group of blocks which output is normally a complete webpage
| **Template** | block category; a group of blocks which output is a mix of static elements and dynamic elements referred to an article or a group of articles
| **Widget** | block category; a block or group of blocks that has a specific scope or functionality (call to action, content, menu, header, footer, etc)
| **Block type** | used to organize blocks depending on their usage scope



## Features

- WYSIWYG design and creation of reusable blocks, templates, pages, widgets, forms and elements with full control of your content appearance without coding

- Granular control of the blocks/elements design supported by TailwindCSS pseudo classes

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

**Run first *nuxpresso-strapi* before to use MOKAStudio**



## Login 

At first run MOKAStudio will create the user you defined in the .env as per the configuration guide.

After the creation refresh the page (F5). MOKAStudio will automatically login to Strapi CMS


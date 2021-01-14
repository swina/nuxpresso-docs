(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{381:function(e,t,o){"use strict";o.r(t);var a=o(42),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"blocks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#blocks"}},[e._v("#")]),e._v(" Blocks")]),e._v(" "),o("img",{attrs:{src:"https://res.cloudinary.com/moodgiver/image/upload/v1610379492/moka_studio_blocks_aad94d299f.png"}}),e._v(" "),o("p",[e._v("The Blocks option gives you access to the block manager.")]),e._v(" "),o("p",[e._v("From here you can create, edit, duplicate, remove, import and export your blocks.")]),e._v(" "),o("h2",{attrs:{id:"blocks-categories"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#blocks-categories"}},[e._v("#")]),e._v(" Blocks categories")]),e._v(" "),o("p",[e._v("MOKAStudio organizes your blocks with the following categories:")]),e._v(" "),o("ul",[o("li",[e._v("Widgets: blocks with specific functionalities or scope.")]),e._v(" "),o("li",[e._v("Pages: collection of blocks representing webpages")]),e._v(" "),o("li",[e._v("Templates: blocks used to output dynamic content from your Strapi CMS content. Single or loop colections")]),e._v(" "),o("li",[e._v("Slider: a special category used to manage your slider")]),e._v(" "),o("li",[e._v("Components: collection of generic blocks")]),e._v(" "),o("li",[e._v("Archive: blocks not used or considered archive")]),e._v(" "),o("li",[e._v("Favorites: blocks marked as favorite")])]),e._v(" "),o("h2",{attrs:{id:"blocks-types"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#blocks-types"}},[e._v("#")]),e._v(" Blocks types")]),e._v(" "),o("p",[e._v("You can also assign to each block a specific type. Block types are not related to a block category. In this way you can have block of same type that belongs to different categories.\nTypes are fully customizable and you can add, remove as per your need.\nYou can filter your blocks inside any category by type with the buttons at the top of the window.")]),e._v(" "),o("h2",{attrs:{id:"blocks-gallery-list"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#blocks-gallery-list"}},[e._v("#")]),e._v(" Blocks gallery/list")]),e._v(" "),o("p",[e._v("Any category you select gives you a gallery of the blocks you have in the system.\nThe preview image is available when you save your block from the preview window in editing mode.\nFor each block you have the following options:")]),e._v(" "),o("ul",[o("li",[o("i",{staticClass:"material-icons"},[e._v("edit")]),e._v(" opens the "),o("RouterLink",{attrs:{to:"/moka/block-editor.html"}},[e._v("Block editor")])],1),e._v(" "),o("li",[o("i",{staticClass:"material-icons"},[e._v("remove_red_eye")]),e._v(" fast preview")]),e._v(" "),o("li",[o("i",{staticClass:"material-icons"},[e._v("file_copy")]),e._v(" duplicate block")]),e._v(" "),o("li",[o("i",{staticClass:"material-icons"},[e._v("delete")]),e._v(" delete block")])]),e._v(" "),o("h2",{attrs:{id:"create-a-new-block"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-block"}},[e._v("#")]),e._v(" Create a new block")]),e._v(" "),o("p",[e._v("To create a new block click on the button "),o("button",{staticStyle:{background:"#63b3ed",color:"white",padding:"2px 4px"}},[e._v("Create New")])]),e._v(" "),o("h2",{attrs:{id:"export"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#export"}},[e._v("#")]),e._v(" Export")]),e._v(" "),o("p",[e._v("Clicking on the "),o("button",{staticStyle:{background:"#63b3ed",color:"white",padding:"2px 4px"}},[e._v("Export")]),e._v(" you can export the full current category to a single file (JSON) that can be used to import in other system or used as backup.")]),e._v(" "),o("h2",{attrs:{id:"import"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#import"}},[e._v("#")]),e._v(" Import")]),e._v(" "),o("p",[e._v("MOKAStudio can use blocks previously exported from the app. Click on "),o("button",{staticStyle:{background:"#63b3ed",color:"white",padding:"2px 4px"}},[e._v("Import")])]),e._v(" "),o("p",[e._v("From the blocks gallery you can import a single block or even a complete library (category).\nMOKAStudio will automatically recognize the library category and will save all the blocks in your CMS.")]),e._v(" "),o("h2",{attrs:{id:"gallery-list-view-mode"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gallery-list-view-mode"}},[e._v("#")]),e._v(" Gallery / List view mode")]),e._v(" "),o("p",[e._v("The Blocks Gallery/List has two view modes. In the upper right corner you can have the following icon:")]),e._v(" "),o("p",[o("i",{staticClass:"material-icons"},[e._v("grid_on")]),e._v(" to switch to Gallery view")]),e._v(" "),o("p",[o("i",{staticClass:"material-icons"},[e._v("list")]),e._v(" to switch to List view")]),e._v(" "),o("h2",{attrs:{id:"refresh-blocks-list"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#refresh-blocks-list"}},[e._v("#")]),e._v(" Refresh Blocks list")]),e._v(" "),o("p",[e._v("Click on the "),o("i",{staticClass:"material-icons"},[e._v("refresh")]),e._v(" to refresh the list")]),e._v(" "),o("h2",{attrs:{id:"block-structure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#block-structure"}},[e._v("#")]),e._v(" Block Structure")]),e._v(" "),o("p",[e._v("A block is an object representation of HTML elements.\nIn MOKAStudio there are different types of elements, organized in order to simplify the creation and manipulation of HTML blocks.")]),e._v(" "),o("h3",{attrs:{id:"block-elements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#block-elements"}},[e._v("#")]),e._v(" Block Elements")]),e._v(" "),o("ul",[o("li",[o("p",[o("strong",[e._v("Containers")]),e._v(": containers are HTML elements used to organize the layout of your content. In MOKAStudio you have the following containers:")]),e._v(" "),o("ul",[o("li",[e._v("grid (multicolumn and column span support)")]),e._v(" "),o("li",[e._v("flexbox (column and row direction)")]),e._v(" "),o("li",[e._v("popup (to create popup/modal window)")]),e._v(" "),o("li",[e._v("articles loop (to output dynamic collections of articles, lists)")])])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Text")]),e._v(":")]),e._v(" "),o("ul",[o("li",[e._v("heading: H1 - H6 elements")]),e._v(" "),o("li",[e._v("rich text: paragraph editable with a rich text editor integrated or inline editing")]),e._v(" "),o("li",[e._v("text: simple text, multiline with inline editing support")]),e._v(" "),o("li",[e._v("quote: blockquote element")]),e._v(" "),o("li",[e._v("code: used to input code style text")])])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Media")])]),e._v(" "),o("ul",[o("li",[e._v("image: any web image supported (svg included)")]),e._v(" "),o("li",[e._v("video: mp4/webm support")]),e._v(" "),o("li",[e._v("youtube video")]),e._v(" "),o("li",[e._v("vimeo video")]),e._v(" "),o("li",[e._v("audio")]),e._v(" "),o("li",[e._v("icon (material icons)")])])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Form")])]),e._v(" "),o("ul",[o("li",[e._v("form")]),e._v(" "),o("li",[e._v("input text")]),e._v(" "),o("li",[e._v("input number")]),e._v(" "),o("li",[e._v("input hidden")]),e._v(" "),o("li",[e._v("input email")]),e._v(" "),o("li",[e._v("textarea")]),e._v(" "),o("li",[e._v("checkbox")]),e._v(" "),o("li",[e._v("button")])])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Menu")])]),e._v(" "),o("ul",[o("li",[e._v("horizontal menu")]),e._v(" "),o("li",[e._v("vertical menu")])])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Article")])])])]),e._v(" "),o("p",[e._v("This elements are used to output dynamic content from Strapi CMS Article collection. They are used in templates in order to filter and design the output elements like:")]),e._v(" "),o("ul",[o("li",[e._v("title")]),e._v(" "),o("li",[e._v("excerpt")]),e._v(" "),o("li",[e._v("content")]),e._v(" "),o("li",[e._v("category")]),e._v(" "),o("li",[e._v("image")]),e._v(" "),o("li",[e._v("author")]),e._v(" "),o("li",[e._v("update date")])]),e._v(" "),o("h3",{attrs:{id:"block-hierarchy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#block-hierarchy"}},[e._v("#")]),e._v(" Block hierarchy")]),e._v(" "),o("p",[e._v("Any block "),o("strong",[e._v("must have")]),e._v(" always a "),o("strong",[e._v("container")]),e._v(" as a root element in order to design a layout.")]),e._v(" "),o("p",[e._v("For this reason in MOKAStudio you can add HTML elements only to containers.\nThis is a constrain defined by design in MOKAStudio.")]),e._v(" "),o("p",[o("strong",[e._v("Containers")]),e._v(" like columns and flexbox can be nested so you can create structured layout combining containers and other elements available in MOKAStudio.")]),e._v(" "),o("h4",{attrs:{id:"block-object-example"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#block-object-example"}},[e._v("#")]),e._v(" Block object example")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('    {\n        "id":"moka-q5w0e",\n        "css":"",\n        "tag":"document",\n        "image":null,\n        "blocks":[\n            {\n                "id":"moka-m5fdc",\n                "css":{\n                    "css":"",\n                    "container":"grid md:grid-rows-1 md:grid-cols-4 grid-cols-1 grid-rows-4"\n                },\n                "tag":"container",\n                "cols":4,\n                "icon":"view_column",\n                "link":"",\n                "rows":[],\n                "type":"grid",\n                "image":null,\n                "label":"Columns",\n                "style":"",\n                "content":"",\n                "element":"grid",\n                "semantic":""\n                "blocks":[\n                    {\n                        "id":"moka-13wx5",\n                        "css":{\n                            "css":"",\n                            "container":"flex flex-col md:col-span-1"\n                        },\n                        "tag":"container",\n                        "icon":"highlight_alt",\n                        "link":"",\n                        "rows":[],\n                        "type":"flex",\n                        "image":null,\n                        "label":"Flexbox",\n                        "style":"",\n                        "blocks":[],\n                        "content":"",\n                        "element":"div",\n                        "semantic":""\n                    },\n                    {\n                        "id":"moka-wwh3v",\n                        "css":{\n                            "css":"",\n                            "container":"flex flex-col md:col-span-1"\n                        },\n                        "tag":"container",\n                        "icon":"highlight_alt",\n                        "link":"",\n                        "rows":[],\n                        "type":"flex",\n                        "image":null,\n                        "label":"Flexbox",\n                        "style":"",\n                        "blocks":[],\n                        "content":"",\n                        "element":"div",\n                        "semantic":""\n                    },\n                    {\n                        "id":"moka-2ux51",\n                        "css":{\n                            "css":"",\n                            "container":"flex flex-col md:col-span-2"\n                        },\n                        "tag":"container",\n                        "icon":"highlight_alt",\n                        "link":"",\n                        "rows":[],\n                        "type":"flex",\n                        "image":null,\n                        "label":"Flexbox",\n                        "style":"",\n                        "blocks":[],\n                        "content":"",\n                        "element":"div",\n                        "semantic":""\n                    }\n                ]\n            \n            }\n        ]\n    }\n')])])]),o("h2",{attrs:{id:"how-blocks-are-connected-to-my-strapi-cms-articles-content"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-blocks-are-connected-to-my-strapi-cms-articles-content"}},[e._v("#")]),e._v(" How blocks are connected to my Strapi CMS articles/content?")]),e._v(" "),o("p",[e._v("The concept is very simple but can be misanderstood.")]),e._v(" "),o("h3",{attrs:{id:"_1st-scenario-website-homepage-with-static-content"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1st-scenario-website-homepage-with-static-content"}},[e._v("#")]),e._v(" 1st scenario: website homepage with static content")]),e._v(" "),o("p",[e._v("Normally today homepages (usually not for blogs) are pages designed to give immediate different informations, enriched with graphic elements, video, widgets like sliders, call to action, animations and so on that are not simple text.")]),e._v(" "),o("p",[e._v("With MOKAStudio you can create complex pages and connect directly to a Strapi CMS Article.\nJust create a new article, add a title and connect to a template/page. If your page/template is designed to be the homepage, you will just to mark the article as homepage.")]),e._v(" "),o("p",[e._v("NUXPRESSO will automatically display you MOKAStudio page as homepage")]),e._v(" "),o("h3",{attrs:{id:"_2nd-scenario-internal-dynamic-pages-with-textual-content"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2nd-scenario-internal-dynamic-pages-with-textual-content"}},[e._v("#")]),e._v(" 2nd scenario: internal dynamic pages with textual content")]),e._v(" "),o("p",[e._v("Internal pages normally share the same layout, with some common elements like header, footer, sidebar, etc.")]),e._v(" "),o("p",[e._v("Start with the design of the common elements.\nThen add which article elements you want to output to your block, customize as per your design requirements.")]),e._v(" "),o("p",[e._v("Save the document with Category -> template, click on the "),o("i",{staticClass:"material-icons"},[e._v("settings")]),e._v(" icon in the topbar just after the document title")]),e._v(" "),o("img",{attrs:{src:"https://res.cloudinary.com/moodgiver/image/upload/v1610557813/moka_studio_editor_document_settings_cdffd6ab19.png"}}),e._v(" "),o("ul",[o("li",[e._v("Select Category -> template")]),e._v(" "),o("li",[e._v("Checkout "),o("strong",[e._v("Default template")]),e._v(" to true")])]),e._v(" "),o("p",[e._v("NUXPRESSO will automatically display any page that doesn't have a specific template assigned to use the Default template.")]),e._v(" "),o("h3",{attrs:{id:"_3rd-scenario-a-list-of-articles-loop"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3rd-scenario-a-list-of-articles-loop"}},[e._v("#")]),e._v(" 3rd scenario: a list of articles (loop)")]),e._v(" "),o("p",[e._v("Follow the same procedure above")])])}),[],!1,null,null,null);t.default=i.exports}}]);
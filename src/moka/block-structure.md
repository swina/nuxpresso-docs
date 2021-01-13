# Block Structure

A block is an object representation of HTML elements.
In MOKAStudio there are different types of elements, organized in order to simplify the creation and manipulation of HTML blocks.

## Block Elements

- **Containers**: containers are HTML elements used to organize the layout of your content. In MOKAStudio you have the following containers:
    - grid (multicolumn and column span support)
    - flexbox (column and row direction)
    - popup (to create popup/modal window)
    - articles loop (to output dynamic collections of articles, lists)

- **Text**:
    - heading: H1 - H6 elements
    - rich text: paragraph editable with a rich text editor integrated or inline editing
    - text: simple text, multiline with inline editing support
    - quote: blockquote element
    - code: used to input code style text

- **Media**
    - image: any web image supported (svg included)
    - video: mp4/webm support
    - youtube video
    - vimeo video
    - audio
    - icon (material icons)

- **Form**
    - form
    - input text
    - input number
    - input hidden
    - input email
    - textarea
    - checkbox
    - button

- **Menu**
    - horizontal menu
    - vertical menu

- **Article**

This elements are used to output dynamic content from Strapi CMS Article collection. They are used in templates in order to filter and design the output elements like:

- title
- excerpt
- content
- category
- image
- author
- update date

## Block hierarchy

Any block **must have** always a **container** as a root element in order to design a layout.

For this reason in MOKAStudio you can add HTML elements only to containers.
This is a constrain defined by design in MOKAStudio.

**Containers** like columns and flexbox can be nested so you can create structured layout combining containers and other elements available in MOKAStudio.

## Block object example

```
    {
        "id":"moka-q5w0e",
        "css":"",
        "tag":"document",
        "image":null,
        "blocks":[
            {
                "id":"moka-m5fdc",
                "css":{
                    "css":"",
                    "container":"grid md:grid-rows-1 md:grid-cols-4 grid-cols-1 grid-rows-4"
                },
                "tag":"container",
                "cols":4,
                "icon":"view_column",
                "link":"",
                "rows":[],
                "type":"grid",
                "image":null,
                "label":"Columns",
                "style":"",
                "content":"",
                "element":"grid",
                "semantic":""
                "blocks":[
                    {
                        "id":"moka-13wx5",
                        "css":{
                            "css":"",
                            "container":"flex flex-col md:col-span-1"
                        },
                        "tag":"container",
                        "icon":"highlight_alt",
                        "link":"",
                        "rows":[],
                        "type":"flex",
                        "image":null,
                        "label":"Flexbox",
                        "style":"",
                        "blocks":[],
                        "content":"",
                        "element":"div",
                        "semantic":""
                    },
                    {
                        "id":"moka-wwh3v",
                        "css":{
                            "css":"",
                            "container":"flex flex-col md:col-span-1"
                        },
                        "tag":"container",
                        "icon":"highlight_alt",
                        "link":"",
                        "rows":[],
                        "type":"flex",
                        "image":null,
                        "label":"Flexbox",
                        "style":"",
                        "blocks":[],
                        "content":"",
                        "element":"div",
                        "semantic":""
                    },
                    {
                        "id":"moka-2ux51",
                        "css":{
                            "css":"",
                            "container":"flex flex-col md:col-span-2"
                        },
                        "tag":"container",
                        "icon":"highlight_alt",
                        "link":"",
                        "rows":[],
                        "type":"flex",
                        "image":null,
                        "label":"Flexbox",
                        "style":"",
                        "blocks":[],
                        "content":"",
                        "element":"div",
                        "semantic":""
                    }
                ]
            
            }
        ]
    }
```
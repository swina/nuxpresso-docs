# Block Editor


<video width="100%" controls="true">
    <source src="https://res.cloudinary.com/moodgiver/video/upload/v1611772051/mokastudio_create_page_with_reusable_blocks_b86176ba42.webm"/>
</video>

## Editor Dashboard

The Editor Dashboard is the place where you create, update your blocks.
<img style="border:1px solid #444" src="https://res.cloudinary.com/moodgiver/image/upload/v1610187197/moka_studio_editor_window_25eee4eefd.png"/>

It's a WYSYWYG dashboard organized as follows:

- **topbar** 
- **design board**
- **toolbar**
- **status bar**

### Document

> Since a block can be a set of blocks we refer to a **document** as the global block that is composed of different blocks

## Document settings

Click on the <i class="material-icons">settings</i> located on the Topbar after the block title to open the document settings.

<img src="https://res.cloudinary.com/moodgiver/image/upload/v1610842465/moka_editor_document_settings_64034f2b5b.png" style="border:1px solid #ddd"/>

#### Name
Document name

#### Description
Document description

#### Category
Assign a category to the document
- widget
- page
- template
- slider
- component
- archive
- favorite

#### Type
assign a type to the document

You can define your types clicking on the <i class="material-icons">add</i> icon

#### Body settings
You can assign the body colors for text and background

#### Default template
When checked any article with no page/template assignment will use the document/block checked as default.

#### Loop
When checked any loop page (list of articles) will use the template.
You can set which url will serve the template. The url available are :

- all : any loop page (/articles) will use the current template
- example.com/articles
- example.com/articles/category/_your_category_

Nuxpresso create by default the following friendly urls for loops:

- your_domain/articles : list of articles
- your_domain/articles/category: list of articles by category

(option available only for templates)

#### Pagination

Enable the pagination per loop templates
(option available only for templates)

### Articles per page

Number of articles listed in the loop
(option available only for templates)


## Topbar



<img src="https://res.cloudinary.com/moodgiver/image/upload/v1609779161/moka_editor_main_bar_4bfc13dd2c.png"/>


The **Topbar** is set to:

| Icon | Function 
| :---: | :--- 
| <i class="material-icons" style="color:red">fiber_manual_record</i> | **close** the current editor window clicking on the icon at the top left of the window
|<i class="material-icons" style="color:yellow">fiber_manual_record</i> |**select**: select the current document clicking on the  icon
| <i class="material-icons" style="color:green">fiber_manual_record</i> | **preview** full preview of the current document clicking on the  icon
|<i class="material-icons">settings</i> | document **settings**
|<i class="material-icons">save</i> | **save**
|<i class="material-icons">file_copy</i> | **duplicate** or save as
|<i class="material-icons">web</i> | **create** a new article that will use the document as layout
|<i class="material-icons">system_update_alt</i> | **import** a reusable block
|<i class="material-icons">backup</i> | **export** the current document to file (JSON)
|<i class="material-icons">remove_red_eye</i> | **preview** preview the current document

## Design board

The design board is where the blocks are placed. When you create a new block MOKAStudio automatically create an empty container with a simple text element. It's important to understand the structure that MOKAStudio uses to represent a block and create the correspondent HTML code.

> Please read the [Block Structure](/moka/blocks.html#block-structure) documentation before to proceed.

When blocks are added to the design board, moving the mouse over any block/element a colored dashed border will be displayed. The color codes are:

<div style="border:4px dashed gray;padding:4px;margin-bottom:1rem;">document block</div>

<div style="border:4px dashed blue;padding:4px;margin-bottom:1rem;">grid/columns container</div>

<div style="border:4px dashed red;padding:4px;margin-bottom:1rem;">flexbox container</div>

<div style="border:2px dashed green;padding:4px;margin-bottom:1rem;">all other elements</div>

Clicking on a container/block the border will stay visible, indicating that that block is a current selected one.

### Tip 

> Sometimes elements overlaps so the floating bar icons are not cliccable
> Use the toolbar or the keyboard shortcuts


When you have a selected element you also have:
- a floating bar showing at the top left corner of the element itself

- a toolbar at the bottom of the screen

### Floating bar


<img src="https://res.cloudinary.com/moodgiver/image/upload/v1609838082/thumbnail_moka_editor_floating_bar_control_7467b339de.png"/>


Depending on the element selected the floating bar as different icons as a shortcut for common functions.
Following icons/actions are available for all elements

| Icon | Function | Shortcut
| :---: | :--- | :---
|<i class="material-icons">view_columns</i>| indicates the element type. Clicking on the you can replace the element with another type (all data of the current element will be removed)
|<i class="material-icons">expand_less</i> | move element up *(you can use also the black dot on the right upper corner)*
|<i class="material-icons">edit</i> | (not available for containers) : depending on the current element the edit action can be : edit the text, add image or select icon | Alt + w
|<i class="material-icons">brush</i> | opens the [**customizer**](#customizer) panel where you can customize your element attributes assigning the TailwindCSS pseudo-classes | Alt + z
|<i class="material-icons">delete</i> | removes the element from the design board. A confirmation modal will be displayed. | Alt + r

If the selected element is a container you will have also the following icons/actions
| Icon | Function | Shortcut
| :---: | :--- | :---
|<i class="material-icons">add</i>| add an element to the current selection selecting from the **elements drawer** | Alt + i
|<i class="material-icons">widgets</i> | add a reusable block to the current selection selecting one from the **reusables block drawer** | Alt + u


## Toolbar

The toolbar is fully available when a block is selected.


<img src="https://res.cloudinary.com/moodgiver/image/upload/v1610451439/moka_editor_toolbar_619cb2b163.png"/>

The toolbar gives you the tools to for the current selection (left side of the toolbar):
| Icon | Function | Shortcut
| :---: | :--- | :---
|<i class="material-icons">add</i>| add an element (available only for containers) | Alt + i
|<i class="material-icons">edit</i> | edit the current element content (not available for containers) | Alt + w
|<i class="material-icons">brush</i> | customize the current element design | Alt + z
|<i class="material-icons">widgets</i> | add a reusable block (available only for containers) | Alt + u
|<i class="material-icons">content_copy</i> | copy the current element in the clipboard | Alt + c
|<i class="material-icons">content_paste</i> | paste the copied element to the current element | Alt + v
|<i class="material-icons">file_copy</i> | duplicate the current element | Alt + d
|<i class="material-icons">motion_photos_on</i> | set the animation for the current element | Alt + a
|<i class="material-icons">archive</i> | save current block as reusable block 
|<i class="material-icons">account_tree</i> | display the current element/block tree | Alt + t
|<i class="material-icons">delete</i> | remove the current element/block | Alt + r

On the right side of the toolbar you have tools for the global document
| Icon | Function | Shortcut
| :---: | :--- | :---
| <i class="material-icons">select_all</i> | select the document
| <i class="material-icons">add</i> | add a new block to the document | Alt + i
| <i class="material-icons">widgets</i> | add a reusable block to the document | Alt + u
| <i class="material-icons">remove_red_eye</i> | preview | Alt + b
| <i class="material-icons">save</i> | save the document | Alt + s



## Status Bar

The status bar gives you info about the current selected element.

<img src="https://res.cloudinary.com/moodgiver/image/upload/v1610479440/moka_studio_editor_status_bar_6b73a8d8af.png"/>

### Input custom classes

You can input your custom class in the CSS Class input field. This can be useful when you need to define specific classes (responsive values)

From the Status Bar you can also view/update the CSS Classes for the current element.
| Icon | Function | Shortcut
| :---: | :--- | :---
| <i class="material-icons">edit</i> | open the CSS classes editor and style editor for the element
| <i class="material-icons">brush</i> | open the [**Customizer**](/moka/block-customizer) | Alt + z


## Animations

MOKAStudio includes support to [GSAP](https://greensock.com/gsap/) animation engine by Greensock. 

Thus means that you can assign animations to any block/element directly from the block editor.

I created a set of most common animations ready to use.

To assign an animation to a selected block/element click on the <i class="material-icons">motion_photos_on</i> from the Toolbar or press **Alt + a**

<img src="https://res.cloudinary.com/moodgiver/image/upload/v1610883811/moka_editor_animations_988b956fcd.png"/>

### Animation settings
| Field | Function | Notes
| :--- | :--- | :---
| **Animation** | select an animation from the list | MOKAStudio comes with a set of preset animations. You can add, update or remove them as stated below. 
| **Easing** | select an easing settings from the list | Presets 
| **Duration** | set the animation duration in secs | Will be fired when the item is not off the screen
| **Delay** | set the animation delay (0=plays immediately) | Will be fired only if item is not off the screen

### ScrollTrigger

MOKAStudio animations supports the GSAP ScrollTrigger plugin.

Thus means that the animation **will not be fired** when the element if off the screen but only when it is visible.

### Add animations

You can add your custom animation updating the file 

**Path -** ./src/plugins/animations.js


```
// ---- YOUR ANIMATIONS GO HERE ---


gsap.registerEffect({
    name: "myanimation",
    effect: (targets, config) => {
        return gsap.fromTo(targets, 
            {
                scale:0,
                opacity:0
            },
            {
                scale:1,
                opacity:1,
                duration: config.duration, 
                ease: config.ease,
                delay: config.delay
            }
        );
    },
    defaults: {duration: duration, delay:0, ease:"power1" }, //defaults get applied to any "config" object passed to the effect
    extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
});


// --- END OF YOUR ANIMATIONS ---

...

```


Update ```const gsapEffects``` array adding your animation/s name.

```
// ADD YOUR ANIMATION name to the gsapEffect array
const gsapEffects = [ 'fade' , 'scale' , 'scale-in' , 'flip-x' , 'flip-y' , 'slide-left' , 'slide-right' , 'slide-top' , 'slide-down', 'rotate' , 'rotate-scale' , 'rotate-hover' , 'grow-width' , 'width-reverse' , 'close-left' , 'close-right' , 'grow-height' ]
```

The ```const gsapEase``` are the easing modes available in GSAP. Do not change it. 

> Learn how to write your own animations from the [official GSAP documentation](https://greensock.com/docs/v3/GSAP/gsap.effects) 

## Keyboard shortcuts

### Selected element shortcuts

| Keyboard  | Shortcut
| :---      | :---
| **Alt + q** | add element (only containers)
| **Alt + i** | add element (only containers)
| **Alt + u** | add reusable block (only containers)
| **Alt + m** | move current element up
| **Alt + d** | duplicate element
| **Alt + w** | edit content / add image
| **Alt + z** | open the **Customizer**
| **Alt + r** | remove element (confirmation required)
| **Alt + c** | copy current element to the clipboard
| **Alt + v** | paste the copied element to the current element (must be a container)
| **Alt + g** | copy the design settings to the clipboard (CSS classes)
| **Alt + h** | paste the design settings copied before and apply to the current element
| **Alt + o** | create image of current element

### Editor shortcuts


| Keyboard  | Shortcut
| :---      | :---
| **Alt + s** | save block
| **Alt + b** | preview

### Preview shortcuts

| Keyboard  | Shortcut
| :---      | :---
| **Alt + s** | save block with image preview
| **Alt + x** | close preview
| **Alt + k** | display rendered HTML markup


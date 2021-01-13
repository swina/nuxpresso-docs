# Block Editor


## Editor Dashboard

The Editor Dashboard is the place where you create, update your blocks.
<img src="https://res.cloudinary.com/moodgiver/image/upload/v1610187197/moka_studio_editor_window_25eee4eefd.png"/>

It's a WYSYWYG dashboard organized as follows:

- **topbar** 
- **design board**
- **toolbar**
- **status bar**

### Document

> Since a block can be a set of blocks we refer to a **document** as the global block that is composed of different blocks


## Topbar



<img src="https://res.cloudinary.com/moodgiver/image/upload/v1609779161/moka_editor_main_bar_4bfc13dd2c.png"/>


The **Topbar** is set to:

- **close** the current editor window clicking on the red circle at the top left of the window
- **preview**: full preview of the current document clicking on the green circle
- name of the current document, category and unique ID
- at the right you have a group of icons with the following functions:
    - <i class="material-icons">save</i> **save**
    - <i class="material-icons">file_copy</i> **duplicate** or save as
    - <i class="material-icons">system_update_alt</i> **import** a reusable block
    - <i class="material-icons">backup</i> **export** the current document to file (JSON)
    - <i class="material-icons">remove_red_eye</i> **preview** preview the current document

## Design board

The design board is where the blocks are placed. When you create a new block MOKAStudio automatically create an empty container with a simple text element. It's important to understand the structure that MOKAStudio uses to represent a block and create the correspondent HTML code.

> Please read the [Block Structure](/moka/blocks.html#block-structure) documentation before to proceed.

When blocks are added to the design board, moving the mouse over any block/element a colored dashed border will be displayed. The color codes are:

<div style="border:4px dashed gray;padding:4px;margin-bottom:1rem;">document block</div>

<div style="border:4px dashed blue;padding:4px;margin-bottom:1rem;">grid/columns container</div>

<div style="border:4px dashed red;padding:4px;margin-bottom:1rem;">flexbox container</div>

<div style="border:2px dashed green;padding:4px;margin-bottom:1rem;">all other elements</div>

Clicking on a container/block the border will stay visible, indicating that that block is a current selected one.

When you have a selected element you also have:
- a floating bar showing at the top left corner of the element itself

- a toolbar at the bottom of the screen

### Floating bar


<img src="https://res.cloudinary.com/moodgiver/image/upload/v1609838082/thumbnail_moka_editor_floating_bar_control_7467b339de.png"/>


Depending on the element selected the floating bar as different icons as a shortcut for common functions.
Following icons/actions are available for all elements

- <i class="material-icons">view_columns</i> icon: indicates the element type. Clicking on the you can replace the element with another type (all data of the current element will be removed)

- <i class="material-icons">edit</i> (not available for containers) : depending on the current element the edit action can be :
    - edit the text
    - add image
    - select icon

- <i class="material-icons">brush</i> opens the [**customizer**](#customizer) panel where you can customize your element attributes assigning the TailwindCSS pseudo-classes

- <i class="material-icons">delete</i> removes the element from the design board. A confirmation modal will be displayed.

If the selected element is a container you will have also the following icons/actions

- <i class="material-icons">add</i> add an element to the current selection selecting from the **elements drawer**
- <i class="material-icons">widgets</i> add a reusable block to the current selection selecting one from the **reusables block drawer**


## Toolbar

The toolbar is fully available when a block is selected.


<img src="https://res.cloudinary.com/moodgiver/image/upload/v1610451439/moka_editor_toolbar_619cb2b163.png"/>

The toolbar gives you the tools to for the current selection (left side of the toolbar):

<i class="material-icons">add</i> add an element (available only for containers)

<i class="material-icons">edit</i> edit the current element content (not available for containers)

<i class="material-icons">brush</i> customize the current element design

<i class="material-icons">widgets</i> add a reusable block (available only for containers)

<i class="material-icons">content_copy</i> copy the current element in the clipboard

<i class="material-icons">content_paste</i> paste the copied element to the current element

<i class="material-icons">file_copy</i> duplicate the current element

<i class="material-icons">motion_photos_on</i> set the animation for the current element

<i class="material-icons">archive</i> save current block as reusable block

<i class="material-icons">account_tree</i> display the current element/block tree

<i class="material-icons">delete</i> remove the current element/block 

On the right side of the toolbar you have tools for the global document

<i class="material-icons">select_all</i> select the document

<i class="material-icons">add</i> add a new block to the document

<i class="material-icons">widgets</i> add a reusable block to the document

<i class="material-icons">remove_red_eye</i> preview

<i class="material-icons">save</i> save the document



## Status Bar

The status bar gives you info about the current selected element.

<img src="https://res.cloudinary.com/moodgiver/image/upload/v1610479440/moka_studio_editor_status_bar_6b73a8d8af.png"/>

From the Status Bar you can also view/update the CSS Classes for the current element.

<i class="material-icons">edit</i> open the CSS classes editor and style editor for the element

<i class="material-icons">brush</i> open the **Customizer**



### Customizer


<img src="https://res.cloudinary.com/moodgiver/image/upload/v1609820115/moka_editor_tailwind_panel_e999e42ad8.png"/>

The **Customizer** is the panel that gives you access to the design settings of the current element.
It is a powerful panel that converts your settings to TailwindCSS classes.

Go to [**Block Customizer**](/moka/block-customizer) for a detailed documentation.
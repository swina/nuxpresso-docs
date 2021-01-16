(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{374:function(t,e,a){"use strict";a.r(e);var s=a(42),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"strapi-cms-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strapi-cms-template"}},[t._v("#")]),t._v(" Strapi CMS template")]),t._v(" "),a("p",[a("strong",[t._v("nuxpresso-strapi-template")]),t._v(" is a Strapi CMS template to work with NUXPRESSO.")]),t._v(" "),a("h2",{attrs:{id:"collections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#collections"}},[t._v("#")]),t._v(" Collections")]),t._v(" "),a("p",[t._v("During installation it adds the following collections to the general schema:")]),t._v(" "),a("table",[a("thead",[a("th",[t._v("Collection")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("REST API endpoint")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Articles")]),t._v(" "),a("td",[t._v("your content")]),t._v(" "),a("td",[t._v("/articles")])]),t._v(" "),a("tr",[a("td",[t._v("Categories")]),t._v(" "),a("td",[t._v("your content categories")]),t._v(" "),a("td",[t._v("/categories")])]),t._v(" "),a("tr",[a("td",[t._v("Components")]),t._v(" "),a("td",[t._v("all blocks created with MOKAStudio")]),t._v(" "),a("td",[t._v("/components")])]),t._v(" "),a("tr",[a("td",[t._v("Contacts")]),t._v(" "),a("td",[t._v("\n                collects visitors information populated thru contact form/subscribe form\n            ")]),t._v(" "),a("td",[t._v("/contacts")])]),t._v(" "),a("tr",[a("td",[t._v("Elements")]),t._v(" "),a("td",[t._v("\n                single type collection with the elements definitions used in MOKAStudio to create blocks\n            ")]),t._v(" "),a("td",[t._v("/elements")])]),t._v(" "),a("tr",[a("td",[t._v("Languages")]),t._v(" "),a("td",[t._v("\n                enabled languages \n            ")]),t._v(" "),a("td",[t._v("/languages")])]),t._v(" "),a("tr",[a("td",[t._v("Settings")]),t._v(" "),a("td",[t._v("\n                single type collection with general configuration settings\n            ")]),t._v(" "),a("td",[t._v("/settings")])])])]),t._v(" "),a("h2",{attrs:{id:"roles-and-users"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#roles-and-users"}},[t._v("#")]),t._v(" Roles and users")]),t._v(" "),a("p",[t._v("The administrator user will be created automatically at Strapi CMS bootstrap.")]),t._v(" "),a("p",[a("strong",[t._v("In order to use MOKAStudio you need to create a user (Users collection) and grant full permission to the authenticated role to the collections above mentioned and File Upload endpoints.")])]),t._v(" "),a("blockquote",[a("p",[t._v("My advice is to create a custom role (like Developers) and assign the MOKAStudio user to that role. Then grant full permissions only to this role. In this way you can manage the Authenticated role in a standard way, or as per your needs.")])]),t._v(" "),a("h2",{attrs:{id:"initial-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initial-data"}},[t._v("#")]),t._v(" Initial Data")]),t._v(" "),a("p",[t._v("When you create Strapi CMS using nuxpresso-strapi-template it will create some initial data that can be useful to start with:")]),t._v(" "),a("ul",[a("li",[t._v("a library of blocks (page samples and a default template)")]),t._v(" "),a("li",[t._v("a default article as homepage with a default template")]),t._v(" "),a("li",[t._v("standard settings")])]),t._v(" "),a("h2",{attrs:{id:"custom-config-and-controllers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-config-and-controllers"}},[t._v("#")]),t._v(" Custom config and controllers")]),t._v(" "),a("p",[t._v("Following are the custom configuration and controllers created by nuxpresso-strapi-template")]),t._v(" "),a("h3",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("h4",{attrs:{id:"articles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#articles"}},[t._v("#")]),t._v(" Articles")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// api/articles/models/article.js\n\n'use strict';\nmodule.exports = {\n    lifecycles : {\n        beforeCreate: async ( data ) => {\n            data.slug = data.title.toLowerCase()\n            .replace(/ /g,'-')\n            .replace(/[^\\w-]+/g,'') \n        }\n    }\n};\n")])])]),a("p",[a("strong",[t._v("This create a stripped slug based on the title used by nuxpresso as friendly url")])]),t._v(" "),a("h4",{attrs:{id:"contacts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contacts"}},[t._v("#")]),t._v(" Contacts")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// api/contacts/controllers/contacts.js\n'use strict';\n\nmodule.exports = {\n    async create(ctx){\n        let email = {\n            to: process.env.SITE_EMAIL,\n            from: ctx.request.body.email,\n            subject: 'Contact Us',\n            text: `\n            Name:  ${ctx.request.body.firstname} ${ctx.request.body.lastname} \n            Message: ${ctx.request.body.message}`\n        }\n        if ( ctx.request.body.subscriber ){\n            email = {\n                to: process.env.SITE_EMAIL,\n                from: ctx.request.body.email,\n                subject: 'Subscription',\n                text: `Subscription from ${ctx.request.body.email}`\n            }\n        }\n        await strapi.plugins['email'].services.email.send(\n            email\n        );\n        await strapi.services.contacts.create( ctx.request.body )\n        return ctx\n    }\n};\n")])])]),a("p",[t._v("The controller has 2 scopes:")]),t._v(" "),a("ul",[a("li",[t._v("register the contact basic information")]),t._v(" "),a("li",[t._v("register the contact information with a subscribe flag")])]),t._v(" "),a("p",[t._v("It also automatically send email to site email contact about the new contact registration.")]),t._v(" "),a("p",[t._v("You can update this controller as per your need.")]),t._v(" "),a("h2",{attrs:{id:"graphql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#graphql"}},[t._v("#")]),t._v(" GraphQL")]),t._v(" "),a("p",[t._v("NUXPRESSO take advantages of GraphQL to reduce the fetch overload of using REST API. Thus means that only the required information is sent out from Strapi CMS.")])])}),[],!1,null,null,null);e.default=r.exports}}]);
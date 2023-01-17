import { defineField, defineType } from "sanity";

export default defineType({
    name: "workExperience",
    title: "Work Experience",
    type:"document",
    fields:[
        defineField({
            name: "name",
            title: "Name",
            type: "string",
        }),
        defineField({
            name: "company",
            title: "Company",
            type: "string"
        }),
        defineField({
            name: "desc",
            title: "desc",
            type: "string"
        })
    ]
});
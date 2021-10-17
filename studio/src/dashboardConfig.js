export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "616c2295b1461713e380f139",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-3imnd8ds",
                  apiId: "936c30e6-6808-4900-b237-a122a22106ef",
                },
                {
                  buildHookId: "616c229674687f560117ac28",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-7vkeprn2",
                  apiId: "4db315c3-85b3-4058-aa18-6b9cb01fd4e2",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/ccjohnst/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-7vkeprn2.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};

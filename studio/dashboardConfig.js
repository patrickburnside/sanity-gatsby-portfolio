export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62def7ed60c2890e8b24b38a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-5emgcisc',
                  apiId: 'f43c78b0-1ab4-49f2-b81d-25a8939a5b8e'
                },
                {
                  buildHookId: '62def7eef52a300e20011180',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-68sg1gu6',
                  apiId: '047f1178-1528-46ab-ae4e-ce494b34f847'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/patrickburnside/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-68sg1gu6.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

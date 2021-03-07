export default {
  widgets: [
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
                  buildHookId: '6045255a707d1cbd9ca3db39',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-g4o61588',
                  apiId: '8342991d-bcd1-47d4-96d0-79a29ee3cd83'
                },
                {
                  buildHookId: '6045255a4c11ab489e78dc98',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-riapiz3z',
                  apiId: '54a08265-f94f-426a-b88e-8d077093791a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joakim/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-riapiz3z.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

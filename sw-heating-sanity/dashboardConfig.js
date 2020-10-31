export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'netlify',
      options: {
        description:
          `<strong>NOTE:</strong> Because these sites are static builds, they need to be re-deployed to see the changes when documents are published. 
          <br /><br />
          If you haven't seen your new changes reflected on the website, first try refreshing the webpage, otherwise click the deploy button to re-deploy the website.`,
        sites: [
          {
            buildHookId: '5f7793e6d4a3c1011b774b46',
            title: 'Website',
            name: 'swheatingandsons.co.uk',
            apiId: 'e5bb9d65-08f1-4029-8c33-c70634e2ceb3'
          }
        ]
      },
    },
    {
      name: 'document-list',
      options: { title: 'Services', order: '_createdAt desc', types: ['work'] },
    },
    {
      name: 'document-list',
      options: { title: 'Feedback', order: '_createdAt desc', types: ['feedback'] },
    }
  ]
}

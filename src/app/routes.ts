export const routes = {
  main: {
    routeMain: 'ads',
    routeChosenAd: 'chosen_ad',
    routeMap: 'map',
  },
  admin: {
    admin: 'admin',
    adminChild: {
      moderation: 'moderation',
      edit: 'edit',
      adminChat: 'admin_chat',
      editPage: 'edit/:id',
    },
  },
  client: {
    client: 'client',
    clientChild: {
      myAds: 'my_ads',
      create: 'create',
      editPage: 'edit/:id',
      chatWithAdmin: 'chat_with_admin',
    },
  },
};

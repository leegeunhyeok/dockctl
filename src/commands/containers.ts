import { DockctlMenu } from '../enums';

export default {
  __MENU__: 'CONTAINERS',
  type: 'list',
  title: 'Container menu',
  api: {
    path: '/containers/json',
    parser (res) {
      return {
        _id: res.Id,
        image: res.Image,
        command: res.Command,
        name: res.Names[0],
        ports: res.Ports,
        created: res.Created,
        id: res.Id.slice(0, 12),
        state: res.State,
        status: res.Status,
      };
    }
  },
  items: [
    {
      name: 'list',
      next: DockctlMenu.MAIN
    }
  ]
};

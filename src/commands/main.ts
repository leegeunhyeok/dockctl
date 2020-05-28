import { DockctlMenu } from '../enums';

export default {
  __MENU__: 'MAIN',
  type: 'list',
  title: 'Select menu',
  items: [
    {
      name: 'images',
      next: DockctlMenu.IMAGES
    },
    {
      name: 'containers',
      next: DockctlMenu.CONTAINERS
    },
    {
      name: 'networks',
      next: DockctlMenu.NETWORKS
    },
    {
      name: 'volumes',
      next: DockctlMenu.VOLUMES
    },
    {
      name: 'information',
      next: DockctlMenu.INFO
    },
    {
      name: 'exit',
      next: DockctlMenu.EXIT
    }
  ]
};

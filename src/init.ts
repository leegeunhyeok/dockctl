import { command } from './core';
import { async } from './utils';
import figlet from 'figlet';
import standard from 'figlet/importable-fonts/Standard.js';
import { version } from '../package.json';

export default async (): Promise<string> => {
  const renderTitle = async (apiVersion: string): Promise<void> => {
    figlet.parseFont('Standard', standard);
    const [err, data] = await async(figlet, 'Dockctl');

    if (!err) {
      console.log(data);
      console.log(`Dockctl v${version}`.padStart(34));
      console.log(`Docker API Engine v${apiVersion}\n`.padStart(34));
    }
  };

  const getDockerAPIVersion = async (): Promise<string> => {
    const { data, code } = await command(
      'docker',
      ['version', '-f', '{{json .Client.DefaultAPIVersion}}']
    );

    return code === 0 ? data.toString() : 'unknown';
  };

  const apiVersion = await getDockerAPIVersion();
  if (apiVersion === 'unknown') {
    console.error('Docker(unix:docker.sock) is running?');
    process.exit(1);
  }

  await renderTitle(apiVersion);
  return apiVersion;
};

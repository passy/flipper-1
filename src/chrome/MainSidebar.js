/**
 * Copyright 2018-present Facebook.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * @format
 */

import {FlipperBasePlugin} from '../plugin.js';
import type BaseDevice from '../devices/BaseDevice.js';
import type Client from '../Client.js';
import type {UninitializedClient} from '../UninitializedClient.js';
import type {PluginNotification} from '../reducers/notifications';

import {
  PureComponent,
  Component,
  Sidebar,
  FlexBox,
  colors,
  brandColors,
  Text,
  Glyph,
  styled,
  GK,
  FlipperPlugin,
  FlipperDevicePlugin,
  LoadingIndicator,
} from 'flipper';
import React from 'react';
import NotificationsHub from '../NotificationsHub.js';
import {selectPlugin} from '../reducers/connections.js';
import {connect} from 'react-redux';

const ListItem = styled('div')(({active}) => ({
  paddingLeft: 10,
  display: 'flex',
  alignItems: 'center',
  marginBottom: 2,
  flexShrink: 0,
  backgroundColor: active ? colors.macOSTitleBarIconSelected : 'none',
  color: active ? colors.white : colors.macOSSidebarSectionItem,
  lineHeight: '25px',
  padding: '0 10px',
  '&[disabled]': {
    color: 'rgba(0, 0, 0, 0.5)',
  },
}));

const SidebarHeader = styled(FlexBox)({
  display: 'block',
  alignItems: 'center',
  padding: 3,
  color: colors.macOSSidebarSectionTitle,
  fontSize: 11,
  fontWeight: 500,
  marginLeft: 7,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  flexShrink: 0,
});

const PluginShape = styled(FlexBox)(({backgroundColor}) => ({
  marginRight: 5,
  backgroundColor,
  borderRadius: 3,
  flexShrink: 0,
  width: 18,
  height: 18,
  justifyContent: 'center',
  alignItems: 'center',
}));

const PluginName = styled(Text)(props => ({
  minWidth: 0,
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  flexGrow: 1,
  '::after': {
    fontSize: 12,
    display: props.count ? 'inline-block' : 'none',
    padding: '0 8px',
    lineHeight: '17px',
    height: 17,
    alignSelf: 'center',
    content: `"${props.count}"`,
    borderRadius: '999em',
    color: props.isActive ? colors.macOSTitleBarIconSelected : colors.white,
    backgroundColor: props.isActive
      ? colors.white
      : colors.macOSTitleBarIconSelected,
    fontWeight: 500,
  },
}));

function PluginIcon({
  isActive,
  backgroundColor,
  name,
  color,
}: {
  isActive: boolean,
  backgroundColor?: string,
  name: string,
  color: string,
}) {
  return (
    <PluginShape backgroundColor={backgroundColor}>
      <Glyph size={12} name={name} color={isActive ? colors.white : color} />
    </PluginShape>
  );
}

class PluginSidebarListItem extends Component<{
  onClick: () => void,
  isActive: boolean,
  plugin: Class<FlipperBasePlugin<>>,
  app?: ?string,
}> {
  render() {
    const {isActive, plugin} = this.props;
    const app = this.props.app || 'Facebook';
    let iconColor = brandColors[app];

    if (!iconColor) {
      const pluginColors = [
        colors.seaFoam,
        colors.teal,
        colors.lime,
        colors.lemon,
        colors.orange,
        colors.tomato,
        colors.cherry,
        colors.pink,
        colors.grape,
      ];

      iconColor = pluginColors[parseInt(app, 36) % pluginColors.length];
    }

    return (
      <ListItem active={isActive} onClick={this.props.onClick}>
        <PluginIcon
          isActive={isActive}
          name={plugin.icon}
          backgroundColor={iconColor}
          color={colors.white}
        />
        <PluginName>{plugin.title}</PluginName>
      </ListItem>
    );
  }
}

const Spinner = styled(LoadingIndicator)({
  marginTop: '10px',
  marginBottom: '10px',
  marginLeft: 'auto',
  marginRight: 'auto',
});

type MainSidebarProps = {|
  selectedPlugin: ?string,
  selectedApp: ?string,
  selectedDevice: ?BaseDevice,
  windowIsFocused: boolean,
  selectPlugin: (payload: {
    selectedPlugin: ?string,
    selectedApp: ?string,
    deepLinkPayload: ?string,
  }) => void,
  clients: Array<Client>,
  uninitializedClients: Array<{
    client: UninitializedClient,
    deviceId?: string,
  }>,
  numNotifications: number,
  devicePlugins: Map<string, Class<FlipperDevicePlugin<>>>,
  clientPlugins: Map<string, Class<FlipperPlugin<>>>,
|};

class MainSidebar extends PureComponent<MainSidebarProps> {
  render() {
    const {
      selectedDevice,
      selectedPlugin,
      selectedApp,
      selectPlugin,
      windowIsFocused,
      numNotifications,
    } = this.props;
    let {clients, uninitializedClients} = this.props;

    clients = clients
      .filter(
        (client: Client) =>
          selectedDevice && selectedDevice.supportsOS(client.query.os),
      )
      .sort((a, b) => (a.query.app || '').localeCompare(b.query.app));

    return (
      <Sidebar
        position="left"
        width={200}
        backgroundColor={
          process.platform === 'darwin' && windowIsFocused ? 'transparent' : ''
        }>
        {!GK.get('flipper_disable_notifications') && (
          <ListItem
            active={selectedPlugin === 'notifications'}
            onClick={() =>
              selectPlugin({
                selectedPlugin: 'notifications',
                selectedApp: null,
                deepLinkPayload: null,
              })
            }>
            <PluginIcon
              color={colors.light50}
              name={numNotifications > 0 ? NotificationsHub.icon : 'bell-null'}
              isActive={selectedPlugin === NotificationsHub.id}
            />
            <PluginName
              count={numNotifications}
              isActive={selectedPlugin === NotificationsHub.id}>
              {NotificationsHub.title}
            </PluginName>
          </ListItem>
        )}
        {selectedDevice && (
          <SidebarHeader>{selectedDevice.title}</SidebarHeader>
        )}
        {selectedDevice &&
          Array.from(this.props.devicePlugins.values())
            .filter(plugin => plugin.supportsDevice(selectedDevice))
            .map((plugin: Class<FlipperDevicePlugin<>>) => (
              <PluginSidebarListItem
                key={plugin.id}
                isActive={plugin.id === selectedPlugin}
                onClick={() =>
                  selectPlugin({
                    selectedPlugin: plugin.id,
                    selectedApp: null,
                    deepLinkPayload: null,
                  })
                }
                plugin={plugin}
              />
            ))}
        {clients
          .filter(
            (client: Client) =>
              (selectedDevice &&
                client.query.device_id === selectedDevice.serial) ||
              // Old android sdk versions don't know their device_id
              // Display their plugins under all selected devices until they die out
              client.query.device_id === 'unknown',
          )
          .map((client: Client) => (
            <React.Fragment key={client.id}>
              <SidebarHeader>{client.query.app}</SidebarHeader>
              {Array.from(this.props.clientPlugins.values())
                .filter(
                  (p: Class<FlipperPlugin<>>) =>
                    client.plugins.indexOf(p.id) > -1,
                )
                .map((plugin: Class<FlipperPlugin<>>) => (
                  <PluginSidebarListItem
                    key={plugin.id}
                    isActive={
                      plugin.id === selectedPlugin && selectedApp === client.id
                    }
                    onClick={() =>
                      selectPlugin({
                        selectedPlugin: plugin.id,
                        selectedApp: client.id,
                        deepLinkPayload: null,
                      })
                    }
                    plugin={plugin}
                    app={client.query.app}
                  />
                ))}
            </React.Fragment>
          ))}
        {uninitializedClients.map(entry => (
          <React.Fragment key={JSON.stringify(entry.client)}>
            <SidebarHeader>{entry.client.appName}</SidebarHeader>
            <Spinner size={16} />
          </React.Fragment>
        ))}
      </Sidebar>
    );
  }
}

/* $FlowFixMe(>=0.86.0) This
 * comment suppresses an error found when Flow v0.86 was
 * deployed. To see the error, delete this comment and
 * run Flow. */
export default connect(
  ({
    application: {windowIsFocused},
    connections: {
      selectedDevice,
      selectedPlugin,
      selectedApp,
      clients,
      uninitializedClients,
    },
    notifications: {activeNotifications, blacklistedPlugins},
    plugins: {devicePlugins, clientPlugins},
  }) => ({
    numNotifications: (() => {
      const blacklist = new Set(blacklistedPlugins);
      return activeNotifications.filter(
        (n: PluginNotification) => !blacklist.has(n.pluginId),
      ).length;
    })(),
    windowIsFocused,
    selectedDevice,
    selectedPlugin,
    selectedApp,
    clients,
    uninitializedClients,
    devicePlugins,
    clientPlugins,
  }),
  {
    selectPlugin,
  },
)(MainSidebar);

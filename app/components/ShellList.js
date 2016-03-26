import React, { Component, PropTypes } from 'react';
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import Divider from 'material-ui/lib/divider';
import ActionGrade from 'material-ui/lib/svg-icons/action/grade'
import ContentInbox from 'material-ui/lib/svg-icons/content/inbox'
import ContentDrafts from 'material-ui/lib/svg-icons/content/drafts'
import DeviceStorage from 'material-ui/lib/svg-icons/device/devices'
import CommunicationVpnKey from 'material-ui/lib/svg-icons/communication/vpn-key'
import FileCloud from 'material-ui/lib/svg-icons/file/cloud'
import ActionAccountCircle from 'material-ui/lib/svg-icons/action/account-box'

export default class ShellList extends Component {

  static propTypes = {
    initiallyOpen: PropTypes.bool,
    items: PropTypes.array.isRequired,
    style: PropTypes.object,
    subheader: PropTypes.string,
    subheaderStyle: PropTypes.object
  }

  static defaultProps = {
    initiallyOpen: false
  }

  renderShellItem(item) {
    let itemProps = [];

    if (item.hasOwnProperty('user') && item.user && item.user !== '') {
      itemProps = itemProps.concat(
        <ListItem key='1' disabled={true} primaryText={item.user} leftIcon={<ActionAccountCircle />} />
      )
    }

    if (item.hasOwnProperty('hostName') && item.hostName && item.hostName !== '') {
      itemProps = itemProps.concat(
        <ListItem key='2' disabled={true} primaryText={item.hostName} leftIcon={<FileCloud />} />
      )
    }

    if (item.hasOwnProperty('identityFile') && item.identityFile && item.identityFile !== '') {
      itemProps = itemProps.concat(
        <ListItem key='3' disabled={true} primaryText={item.identityFile} leftIcon={<CommunicationVpnKey />} />
      )
    }

    return itemProps;
  }

  render() {
    const { items, initiallyOpen } = this.props;

    const PrimaryText = ({host}) => (
      <div>
        {'ssh '}<strong>{host}</strong>
      </div>
    )

    return (
      <List {...this.props} >
        {items && items.map((item, key) =>
          (
            <div key={key + item.hostName}>
              <Divider />
              <ListItem
                primaryText={<PrimaryText host={item.host} />}
                leftIcon={<DeviceStorage />}
                primaryTogglesNestedList={true}
                nestedItems={this.renderShellItem(item)}
                initiallyOpen={key === 0 && initiallyOpen}
              />
            </div>
          )
        )}
      </List>
    )
  }
}

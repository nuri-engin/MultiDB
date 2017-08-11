Ext.define('MultiDB.view.DBMenuPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.dbmenupanel',
    width: 150,
    collapsed: true,
    collapsible: true,
    hidden: false,
    itemId: 'menuPanel',
    title: '/// Menu',
    html: '<ul><li><a href=#>Agency Table</a></li><li><a href=#>Employee Table</a></li></ul>',
    style: {color: '#317FCC'},

    initComponent: function () {
        console.log('this is menu view');
        var me = this;
        me.callParent();
    }
});
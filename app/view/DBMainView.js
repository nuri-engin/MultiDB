Ext.define('MultiDB.view.DBMainView', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.dbmainview',
    requires: [
        'MultiDB.view.DBMenuPanel',
        'MultiDB.view.DBGridPanel',
        'MultiDB.view.DBFormPanel'
    ],

    layout: 'border',
    itemId: 'mainView',
    bodyPadding: 10,

    initComponent: function () {
        console.log('this is main view');
        var me = this;
        Ext.apply(me, {
             items: [{
                xtype: 'dbmenupanel',
                region: 'west'
            }, {
                xtype: 'dbgridpanel',
                region: 'center'
            }, {
                xtype: 'dbformpanel',
                region: 'south'
            }]
        });
        me.callParent();
    }
});
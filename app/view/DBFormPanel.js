Ext.define('MultiDB.view.DBFormPanel', {
    extend: 'Ext.form.Panel',
    xtype: 'dbformpanel',

    region: 'south',
    //split: true,
    collapsible: true,
    collapsed: true,
    itemId: 'formPanel',
    title: 'Registration Form',
    html: '  Here will input elements<br><br><br><br>',
    padding: 1,
    height: 200,
    
    initComponent: function () {
        console.log('this is the FORM panel!');
        var me = this;
        me.callParent();
    }
});
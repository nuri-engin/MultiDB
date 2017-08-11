Ext.define('MultiDB.view.DBGridPanel', {
    extend: 'Ext.grid.Panel',
    xtype: 'dbgridpanel',
    store: 'FolioStore',
    requires: [
        'Ext.toolbar.Toolbar',
        'Ext.button.Split',
        'Ext.menu.Menu',
        'Ext.menu.Item'
    ],

    title: 'ORest DB List',
    padding: 1,
    itemId: 'gridPanel',
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'splitbutton',
                    itemId: 'registrationBtn',
                    text: 'Registration Form',
                    menu: {
                        xtype: 'menu',
                        width: 120,
                        items: [
                            {
                                xtype: 'menuitem',
                                opt: 'south',
                                text: 'Open',
                                focusable: true
                            }, {
                                xtype: 'menuitem',
                                opt: 'hide',
                                frame: false,
                                text: 'Hide',
                                focusable: true
                            }
                        ]
                    }
                }
            ]
        }
    ],
    
    initComponent: function () {
        //console.log('this is grid panel!');
        var me = this;
        Ext.apply(me, {
            tools: [{
                type: 'refresh',
                tooltip: 'Refresh the DB',
                handler: function () {alert('Click: Refresh Btn');}
            }],

            columns: [{
                xtype: 'numbercolumn',
                dataIndex: 'roomno',
                flex: 0,
                text: 'Room No'
            }, {
                dataIndex: 'clientname',
                flex: 1,
                text: 'Client Name' 
            }, {
                dataIndex: 'roomtype',
                flex: 1,
                text: 'Room Type'
            }, {
                xtype: 'datecolumn',
                dataIndex: 'checkin',
                flex: 1,
                text: 'Check-In'
            }, {
                xtype: 'datecolumn',
                dataIndex: 'checkout',
                flex: 1,
                text: 'Check-Out'
            }, {
                xtype: 'booleancolumn',
                dataIndex: 'isactive',
                flex: 1,
                text: 'Is-Active'
            }]
        });
        me.callParent();
    }
});
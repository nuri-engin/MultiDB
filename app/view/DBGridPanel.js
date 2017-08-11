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
        var me = this;
        Ext.apply(me, {
            tools: [{
                type: 'refresh',
                itemId: 'refreshBtn',
                tooltip: 'Refresh the DB',
                //handler: function () {alert('Click: Refresh Btn');}
            }],

            columns: [{
                xtype: 'rownumberer'
            }, {
                xtype: 'numbercolumn',
                dataIndex: 'roomno',
                flex: 0,
                text: 'Room No',
                format: '0'
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
            },{
                xtype: 'datecolumn',
                dataIndex: 'citime',
                flex: 1,
                text: 'C-In Time',
                renderer: function (value, record) {
                    if (value == null) {
                        return "N/A";
                    } else {
                        return value;
                    }
                }
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
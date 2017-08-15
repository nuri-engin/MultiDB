Ext.define('MultiDB.view.DBGridPanel', {
    extend: 'Ext.grid.Panel',
    xtype: 'dbgridpanel',
    store: 'FolioStore',
    requires: [
        'Ext.toolbar.Toolbar',
        'Ext.button.Split',
        'Ext.menu.Menu',
        'Ext.menu.Item',
        'Ext.grid.plugin.CellEditing',
        'Ext.grid.column.Column',
        //'Ext.grid.cell.Cell'
    ],

    title: 'ORest DB List',
    padding: 1,
    itemId: 'gridPanel',
    plugins: {ptype: 'cellediting', clicksToEdit: 1},
    headerPosition: 'top',
    bodyBorder: true,
    style: 'border: 2px solid red;',
    titleAlign: 'center',
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
            }, {
                type: 'help',
                tooltip: 'Get Help',
                callback: function (panel, tool, event) {
                    //Here will be Help stuff..
                }
            }],

            columns: [{
                xtype: 'rownumberer'
            }, {
                xtype: 'numbercolumn',
                dataIndex: 'roomno',
                flex: 0,
                align: 'right',
                text: 'Room No',
                format: '0',
                renderer: function (value, metaData, record, rowIndex, store, view) {
                    metaData.style = 'background-color:red !important; opacity: 0.50';
                    return value;
                }
            }, {
                dataIndex: 'clientname',
                flex: 1,
                text: 'Client Name',
                renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                    metaData.css = 'customHighlight';
                    metaData['tdAttr'] = 'data-qtip="' + value + '"';
                    return value;
                },
                style: 'background: yellow' 
            }, {    
                dataIndex: 'roomtype',
                flex: 1,
                text: 'Room Type',
                editor: 'textfield',
                tdCls: 'editable-cell',
            }, {
                xtype: 'datecolumn',
                dataIndex: 'checkin',
                flex: 1,
                text: 'Check-In',
                format: 'l, F, Y'
            }, {
                xtype: 'datecolumn',
                dataIndex: 'checkout',
                flex: 1,
                text: 'Check-Out',
                style: {
                    'border-left': '1px solid red'
                }
            },{
                xtype: 'datecolumn',
                dataIndex: 'citime',
                flex: 1,
                text: 'C-In Time',
                format: 'G:i',
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
                text: 'Is-Active',
                renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {
                    if (value == 1) { return "Yes";} else { return "No";}
                }
            }, {
                dataIndex: 'balanceok',
                flex: 1,
                text: 'Balance',
                renderer: function (value, metaData, record, rowIndex, colIndex, store, view) {                    
                    if (value == 0) {
                        return "All Paid";
                    } else {
                        return record.get('lastbalance');
                    }
                }
            }, {
                //xtype: 'gridcell',
                text: 'TPL',
                tpl: '{roomtype} ({ex$Roomtype})'
            }],

            listeners: {
                itemmouseenter: function (grid, record, item, index, e, eOpts) {
                    var node = grid.getNode(record);
                    var cells = Ext.dom.Query.select('.editable-cell', node);
                    console.debug(cells.length);

                    for (var i = 0; i < cells.length; i++) {
                        Ext.fly(cells[i]).highlight();
                    }
                }
            }
        });
        me.callParent();
    }
});
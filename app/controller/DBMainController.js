Ext.define('MultiDB.controller.DBMainController', {
    extend: 'Ext.app.Controller',
    views: ['DBGridPanel'],

    refs: {
        formPanel: 'dbformpanel#formPanel',
        gridPanel: 'dbgridpanel#gridPanel',
        mainView: 'dbmainview#mainView',
        registrationBtn: 'splitbutton#registrationBtn',
        refreshBtn: 'dbgridpanel#gridPanel tool#refreshBtn'
    },

    init: function (application) {
        this.control({
            "menuitem[opt]": {
                click: this.setFormPanel
            },
            "dbgridpanel#gridPanel tool#refreshBtn": {
                click: this.doRefresh
            }
        });
    },

    setFormPanel: function (item) {
        var me = this,
            gridPanel = me.getGridPanel(),
            formPanel = me.getFormPanel(),
            mainView = me.getMainView(),
            registrationBtn = me.getRegistrationBtn(),
            previewText = 'Registration Card is ' + item.text;

        if (item.opt !== 'hide') {
            if (formPanel.isHidden()) {
                formPanel.show();
            }

            gridPanel.remove(formPanel, false);

            formPanel.region = item.opt;

            mainView.add(formPanel);
        } else {
            if (!formPanel.isHidden()) {
                formPanel.hide();
            }
        }

        registrationBtn.setText(previewText);
    },
    doRefresh: function () {
        console.log('this is doRefresh!');
        this.getGridPanel().getStore().load();
    }

});
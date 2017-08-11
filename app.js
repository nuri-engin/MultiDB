Ext.Loader.setConfig({
    disableCaching: true
});

Ext.application({
    views: ['DBMainView'],
    controllers: ['DBMainController'],
    models: ['FolioModel'],
    stores: ['FolioStore'],
    name: 'MultiDB',

    launch: function () {
        console.log('this is app.js');
        Ext.create('MultiDB.view.DBMainView');
    }
});
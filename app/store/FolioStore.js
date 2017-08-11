Ext.define('MultiDB.store.FolioStore', {
    extend: 'Ext.data.Store',
    requires: ['MultiDB.model.FolioModel'],
    model: 'MultiDB.model.FolioModel',

    proxy: {
        type: 'ajax',
        url: 'http://192.168.0.223:8223/orest/folio/list',
        reader: {
            type: 'json'
        }
    },

    autoLoad: true
});
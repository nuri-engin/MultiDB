Ext.define('MultiDB.model.FolioModel', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'roomno', type: 'integer'},
        {name: 'clientname', type: 'string'},
        {name: 'roomtype', type: 'string'},
        {name: 'checkin', type: 'date'},
        {name: 'checkout', type: 'date'},
        {name: 'citime', type: 'date'},
        {name: 'isactive', type: 'bool'}
    ],

    idProperty: 'gid',

    proxy: {
        type: 'ajax',
        headers: {
            'Content-Type': 'application/json'
        },

        api: {
            read: 'http://192.168.0.223:8223/orest/folio/list'
        },

        reader: {
            type: 'json'
        },

        writer: {
            type: 'json',
            allowSingle: true,
            encode: false,
            writeAllFields: true
        }
    }
});
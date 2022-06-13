const AccessControl = require('accesscontrol');


const allRights = {
    'create:any': ['*'],
    'read:any': ['*'],
    'update:any': ['*'],
    'delete:any': ['*']
}

let grantsObject = {
    admin:{
        // test:allRights,
        profile: allRights,
        articles: allRights,
        categories: allRights
    },
    user:{
        // test:{  'read:any': ['*']  }
        profile:{
            'read:own':['*','!password','!_id'],
            'update:own':['*','!password','!_id']
        },
        articles:{
            'read:any':['*'],
        }
    }
}

const roles = new AccessControl(grantsObject);

module.exports = { roles }
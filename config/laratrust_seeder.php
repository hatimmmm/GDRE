<?php

return [
    /**
     * Control if the seeder should create a user per role while seeding the data.
     */
    'create_users' => false,

    /**
     * Control if all the laratrust tables should be truncated before running the seeder.
     */
    'truncate_tables' => true,

    'roles_structure' => [
        'administrateur' => [
            'utilisateurs' => 'c,r,u,d',
            'dossiers' => 'c,r,u,d',
            'exemplaires' => 'c,r,u,d',
        ],
        'archiviste' => [
            'dossiers' => 'c,r,u',
            'exemplaires' => 'c,r,u'
        ],
        'utilisateur' => [
            'exemplaires' => 'r,u'
        ],
        
    ],

    'permissions_map' => [
        'c' => 'create',
        'r' => 'read',
        'u' => 'update',
        'd' => 'delete',
    ],
];

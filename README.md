# Test interne walaaxy
Liste d'attente d'execution FIFO

1. npm i
2. npx nx test backend
3. npx nx serve frontend && npx serve backend

About the folder structure:

```
├───backend
│   └───src
│       ├───controller
│       ├───models
│       ├───routes
│       ├───types
│       └───utils
└───frontend
    ├───public
    └───src
        ├───api
        ├───components
        │   ├───ActionComponents
        │   └───QueueComponents
        ├───context
        └───styles 
```

Les dependances ajouté :

    "cors": "^2.8.5", Allow xtern request 
    "supertest": "^7.0.0", API testing

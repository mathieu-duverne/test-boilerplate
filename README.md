# Walaaxy test
FIFO queuee

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

Dependencies added:

    "cors": "^2.8.5", Allow extern request 
    "supertest": "^7.0.0", API testing

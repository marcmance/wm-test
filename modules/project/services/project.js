projectViewer.factory('project', ['$resource',

    function ($resource) {

        return {

            service: function (urlMod) {
                return $resource( '/someAPI/project/' + urlMod,
                    {},
                    {
                        'get': {
                            method: 'GET'
                        },
                        'getAll': {
                            method: 'GET',
                            isArray: true
                        },
                        'post': {
                            method: 'POST'
                        },
                    }
                );
            },
            getAll : function () {
                //normally I would return a service call to some endpoint, but I will return mock data instead.

                return this.mockData;

                // return this.service(urlMod).getAll({},
                //     function (response) {
                //         return response;
                //     },
                //     function (failed) {
                //         return failed;
                //     }
                // );
            },
            get : function (id) {

               //normally I would return a service call to some endpoint, but I will return mock data instead.
   
                return this.mockData.projects[id - 1];
                
                // return this.service(id).get({},
                //     function (response) {
                //         return response;
                //     },
                //     function (failed) {
                //         return failed;
                //     }
                // );
            },

            mockData: 
            {
              "projects": [
                {
                  "id": 1,
                  "name": "CS - Recruitment",
                  "description": "Dolore officia sunt esse duis cillum tempor qui eiusmod nulla dolore nisi velit elit. Adipisicing laborum duis deserunt duis consectetur in esse velit exercitation magna officia ad commodo. Ad aliquip magna velit proident ad est do. Nisi qui do in id labore irure. Id officia ex laborum est incididunt laboris dolor Lorem velit laborum labore occaecat commodo deserunt. Qui irure officia minim eiusmod exercitation consectetur eu amet sit in culpa mollit.",
                  "owner": {
                    "name": "Tyrion Lannister",
                    "image": "https://placeimg.com/48/48/people"
                  },
                  "start_date": 1423591316,
                  "end_date": 1424196116,
                  "total_steps": 23,
                  "current_step": 8,
                  "active": true
                },
                {
                  "id": 2,
                  "name": "Accounting System Memo",
                  "description": "Dolore officia sunt esse duis cillum tempor qui eiusmod nulla dolore nisi velit elit. Adipisicing laborum duis deserunt duis consectetur in esse velit exercitation magna officia ad commodo. Ad aliquip magna velit proident ad est do. Nisi qui do in id labore irure. Id officia ex laborum est incididunt laboris dolor Lorem velit laborum labore occaecat commodo deserunt. Qui irure officia minim eiusmod exercitation consectetur eu amet sit in culpa mollit.",
                  "owner": {
                    "name": "Cersei Lannister",
                    "image": "https://placeimg.com/48/48/people"
                  },
                  "start_date": 1424282516,
                  "end_date": 1424887316,
                  "total_steps": 12,
                  "current_step": 11,
                  "active": false
                },
                {
                  "id": 3,
                  "name": "Bugz ProductDev",
                  "description": "Dolore officia sunt esse duis cillum tempor qui eiusmod nulla dolore nisi velit elit. Adipisicing laborum duis deserunt duis consectetur in esse velit exercitation magna officia ad commodo. Ad aliquip magna velit proident ad est do. Nisi qui do in id labore irure. Id officia ex laborum est incididunt laboris dolor Lorem velit laborum labore occaecat commodo deserunt. Qui irure officia minim eiusmod exercitation consectetur eu amet sit in culpa mollit.",
                  "owner": {
                    "name": "Arya Stark",
                    "image": "https://placeimg.com/48/48/people"
                  },
                  "start_date": 1424973716,
                  "end_date": 1425578516,
                  "total_steps": 18,
                  "current_step": 9,
                  "active": false
                },
                {
                  "id": 4,
                  "name": "Assignment Details 2.0",
                  "description": "Dolore officia sunt esse duis cillum tempor qui eiusmod nulla dolore nisi velit elit. Adipisicing laborum duis deserunt duis consectetur in esse velit exercitation magna officia ad commodo. Ad aliquip magna velit proident ad est do. Nisi qui do in id labore irure. Id officia ex laborum est incididunt laboris dolor Lorem velit laborum labore occaecat commodo deserunt. Qui irure officia minim eiusmod exercitation consectetur eu amet sit in culpa mollit.",
                  "owner": {
                    "name": "Jamie Lannister",
                    "image": "https://placeimg.com/48/48/people"
                  },
                  "start_date": 1425664916,
                  "end_date": 1425751316,
                  "total_steps": 1,
                  "current_step": 1,
                  "active": true
                },
                {
                  "id": 5,
                  "name": "Assignment Uploader",
                  "description": "Dolore officia sunt esse duis cillum tempor qui eiusmod nulla dolore nisi velit elit. Adipisicing laborum duis deserunt duis consectetur in esse velit exercitation magna officia ad commodo. Ad aliquip magna velit proident ad est do. Nisi qui do in id labore irure. Id officia ex laborum est incididunt laboris dolor Lorem velit laborum labore occaecat commodo deserunt. Qui irure officia minim eiusmod exercitation consectetur eu amet sit in culpa mollit.",
                  "owner": {
                    "name": "Jon Snow",
                    "image": "https://placeimg.com/48/48/people"
                  },
                  "start_date": 1426356116,
                  "end_date": 1426960916,
                  "total_steps": 1,
                  "current_step": 0,
                  "active": true
                },
                {
                  "id": 6,
                  "name": "Client Service Activity",
                  "description": "Dolore officia sunt esse duis cillum tempor qui eiusmod nulla dolore nisi velit elit. Adipisicing laborum duis deserunt duis consectetur in esse velit exercitation magna officia ad commodo. Ad aliquip magna velit proident ad est do. Nisi qui do in id labore irure. Id officia ex laborum est incididunt laboris dolor Lorem velit laborum labore occaecat commodo deserunt. Qui irure officia minim eiusmod exercitation consectetur eu amet sit in culpa mollit.",
                  "owner": {
                    "name": "Tyrion Lannister",
                    "image": "https://placeimg.com/48/48/people"
                  },
                  "start_date": 1427047316,
                  "end_date": 1427652116,
                  "total_steps": 4,
                  "current_step": 3,
                  "active": false
                },
                {
                  "id": 7,
                  "name": "Groups Redesign",
                  "description": "Dolore officia sunt esse duis cillum tempor qui eiusmod nulla dolore nisi velit elit. Adipisicing laborum duis deserunt duis consectetur in esse velit exercitation magna officia ad commodo. Ad aliquip magna velit proident ad est do. Nisi qui do in id labore irure. Id officia ex laborum est incididunt laboris dolor Lorem velit laborum labore occaecat commodo deserunt. Qui irure officia minim eiusmod exercitation consectetur eu amet sit in culpa mollit.",
                  "owner": {
                    "name": "Cersei Lannister",
                    "image": "https://placeimg.com/48/48/people"
                  },
                  "start_date": 1427738516,
                  "end_date": 1428343316,
                  "total_steps": 17,
                  "current_step": 17,
                  "active": true
                },
                {
                  "id": 8,
                  "name": "Groups (AVI-SPL Requirements)",
                  "description": "Dolore officia sunt esse duis cillum tempor qui eiusmod nulla dolore nisi velit elit. Adipisicing laborum duis deserunt duis consectetur in esse velit exercitation magna officia ad commodo. Ad aliquip magna velit proident ad est do. Nisi qui do in id labore irure. Id officia ex laborum est incididunt laboris dolor Lorem velit laborum labore occaecat commodo deserunt. Qui irure officia minim eiusmod exercitation consectetur eu amet sit in culpa mollit.",
                  "owner": {
                    "name": "Arya Stark",
                    "image": "https://placeimg.com/48/48/people"
                  },
                  "start_date": 1428429716,
                  "end_date": 1429034516,
                  "total_steps": 15,
                  "current_step": 7,
                  "active": false
                },
                {
                  "id": 9,
                  "name": "Moblie API in Clojure",
                  "description": "Dolore officia sunt esse duis cillum tempor qui eiusmod nulla dolore nisi velit elit. Adipisicing laborum duis deserunt duis consectetur in esse velit exercitation magna officia ad commodo. Ad aliquip magna velit proident ad est do. Nisi qui do in id labore irure. Id officia ex laborum est incididunt laboris dolor Lorem velit laborum labore occaecat commodo deserunt. Qui irure officia minim eiusmod exercitation consectetur eu amet sit in culpa mollit.",
                  "owner": {
                    "name": "Jamie Lannister",
                    "image": "https://placeimg.com/48/48/people"
                  },
                  "start_date": 1429120916,
                  "end_date": 1429725716,
                  "total_steps": 14,
                  "current_step": 11,
                  "active": false
                },
                {
                  "id": 10,
                  "name": "Logged In Home page",
                  "description": "Dolore officia sunt esse duis cillum tempor qui eiusmod nulla dolore nisi velit elit. Adipisicing laborum duis deserunt duis consectetur in esse velit exercitation magna officia ad commodo. Ad aliquip magna velit proident ad est do. Nisi qui do in id labore irure. Id officia ex laborum est incididunt laboris dolor Lorem velit laborum labore occaecat commodo deserunt. Qui irure officia minim eiusmod exercitation consectetur eu amet sit in culpa mollit.",
                  "owner": {
                    "name": "Jon Snow",
                    "image": "https://placeimg.com/48/48/people"
                  },
                  "start_date": 1429812116,
                  "end_date": 1430416916,
                  "total_steps": 28,
                  "current_step": 5,
                  "active": false
                },
                {
                  "id": 11,
                  "name": "Groups Refactoring",
                  "description": "Dolore officia sunt esse duis cillum tempor qui eiusmod nulla dolore nisi velit elit. Adipisicing laborum duis deserunt duis consectetur in esse velit exercitation magna officia ad commodo. Ad aliquip magna velit proident ad est do. Nisi qui do in id labore irure. Id officia ex laborum est incididunt laboris dolor Lorem velit laborum labore occaecat commodo deserunt. Qui irure officia minim eiusmod exercitation consectetur eu amet sit in culpa mollit.",
                  "owner": {
                    "name": "Tyrion Lannister",
                    "image": "https://placeimg.com/48/48/people"
                  },
                  "start_date": 1430503316,
                  "end_date": 1431108116,
                  "total_steps": 9,
                  "current_step": 8,
                  "active": true
                },
                {
                  "id": 12,
                  "name": "QA Recruiting",
                  "description": "Dolore officia sunt esse duis cillum tempor qui eiusmod nulla dolore nisi velit elit. Adipisicing laborum duis deserunt duis consectetur in esse velit exercitation magna officia ad commodo. Ad aliquip magna velit proident ad est do. Nisi qui do in id labore irure. Id officia ex laborum est incididunt laboris dolor Lorem velit laborum labore occaecat commodo deserunt. Qui irure officia minim eiusmod exercitation consectetur eu amet sit in culpa mollit.",
                  "owner": {
                    "name": "Cersei Lannister",
                    "image": "https://placeimg.com/48/48/people"
                  },
                  "start_date": 1431194516,
                  "end_date": 1431799316,
                  "total_steps": 11,
                  "current_step": 8,
                  "active": true
                },
                {
                  "id": 13,
                  "name": "Build a Shed",
                  "description": "Dolore officia sunt esse duis cillum tempor qui eiusmod nulla dolore nisi velit elit. Adipisicing laborum duis deserunt duis consectetur in esse velit exercitation magna officia ad commodo. Ad aliquip magna velit proident ad est do. Nisi qui do in id labore irure. Id officia ex laborum est incididunt laboris dolor Lorem velit laborum labore occaecat commodo deserunt. Qui irure officia minim eiusmod exercitation consectetur eu amet sit in culpa mollit.",
                  "owner": {
                    "name": "Arya Stark",
                    "image": "https://placeimg.com/48/48/people"
                  },
                  "start_date": 1431885716,
                  "end_date": 1432490516,
                  "total_steps": 4,
                  "current_step": 1,
                  "active": false
                },
                {
                  "id": 14,
                  "name": "Clean Out Gutters",
                  "description": "Dolore officia sunt esse duis cillum tempor qui eiusmod nulla dolore nisi velit elit. Adipisicing laborum duis deserunt duis consectetur in esse velit exercitation magna officia ad commodo. Ad aliquip magna velit proident ad est do. Nisi qui do in id labore irure. Id officia ex laborum est incididunt laboris dolor Lorem velit laborum labore occaecat commodo deserunt. Qui irure officia minim eiusmod exercitation consectetur eu amet sit in culpa mollit.",
                  "owner": {
                    "name": "Jamie Lannister",
                    "image": "https://placeimg.com/48/48/people"
                  },
                  "start_date": 1432576916,
                  "end_date": 1433181716,
                  "total_steps": 2,
                  "current_step": 2,
                  "active": true
                },
                {
                  "id": 15,
                  "name": "Repair Roof",
                  "description": "Dolore officia sunt esse duis cillum tempor qui eiusmod nulla dolore nisi velit elit. Adipisicing laborum duis deserunt duis consectetur in esse velit exercitation magna officia ad commodo. Ad aliquip magna velit proident ad est do. Nisi qui do in id labore irure. Id officia ex laborum est incididunt laboris dolor Lorem velit laborum labore occaecat commodo deserunt. Qui irure officia minim eiusmod exercitation consectetur eu amet sit in culpa mollit.",
                  "owner": {
                    "name": "Jon Snow",
                    "image": "https://placeimg.com/48/48/people"
                  },
                  "start_date": 1433268116,
                  "end_date": 1433872916,
                  "total_steps": 39,
                  "current_step": 27,
                  "active": true
                },
                {
                  "id": 16,
                  "name": "Cater Lunch",
                  "description": "Dolore officia sunt esse duis cillum tempor qui eiusmod nulla dolore nisi velit elit. Adipisicing laborum duis deserunt duis consectetur in esse velit exercitation magna officia ad commodo. Ad aliquip magna velit proident ad est do. Nisi qui do in id labore irure. Id officia ex laborum est incididunt laboris dolor Lorem velit laborum labore occaecat commodo deserunt. Qui irure officia minim eiusmod exercitation consectetur eu amet sit in culpa mollit.",
                  "owner": {
                    "name": "Tyrion Lannister",
                    "image": "https://placeimg.com/48/48/people"
                  },
                  "start_date": 1433959316,
                  "end_date": 1434564116,
                  "total_steps": 13,
                  "current_step": 10,
                  "active": true
                },
                {
                  "id": 17,
                  "name": "Purchase Black Friday Television",
                  "description": "Dolore officia sunt esse duis cillum tempor qui eiusmod nulla dolore nisi velit elit. Adipisicing laborum duis deserunt duis consectetur in esse velit exercitation magna officia ad commodo. Ad aliquip magna velit proident ad est do. Nisi qui do in id labore irure. Id officia ex laborum est incididunt laboris dolor Lorem velit laborum labore occaecat commodo deserunt. Qui irure officia minim eiusmod exercitation consectetur eu amet sit in culpa mollit.",
                  "owner": {
                    "name": "Cersei Lannister",
                    "image": "https://placeimg.com/48/48/people"
                  },
                  "start_date": 1434650516,
                  "end_date": 1435255316,
                  "total_steps": 6,
                  "current_step": 3,
                  "active": false
                },
                {
                  "id": 18,
                  "name": "Hand Carve a Standing Desk",
                  "description": "Dolore officia sunt esse duis cillum tempor qui eiusmod nulla dolore nisi velit elit. Adipisicing laborum duis deserunt duis consectetur in esse velit exercitation magna officia ad commodo. Ad aliquip magna velit proident ad est do. Nisi qui do in id labore irure. Id officia ex laborum est incididunt laboris dolor Lorem velit laborum labore occaecat commodo deserunt. Qui irure officia minim eiusmod exercitation consectetur eu amet sit in culpa mollit.",
                  "owner": {
                    "name": "Arya Stark",
                    "image": "https://placeimg.com/48/48/people"
                  },
                  "start_date": 1435341716,
                  "end_date": 1435946516,
                  "total_steps": 7,
                  "current_step": 3,
                  "active": true
                },
                {
                  "id": 19,
                  "name": "Fashion a Prosthetic Hand",
                  "description": "Dolore officia sunt esse duis cillum tempor qui eiusmod nulla dolore nisi velit elit. Adipisicing laborum duis deserunt duis consectetur in esse velit exercitation magna officia ad commodo. Ad aliquip magna velit proident ad est do. Nisi qui do in id labore irure. Id officia ex laborum est incididunt laboris dolor Lorem velit laborum labore occaecat commodo deserunt. Qui irure officia minim eiusmod exercitation consectetur eu amet sit in culpa mollit.",
                  "owner": {
                    "name": "Jamie Lannister",
                    "image": "https://placeimg.com/48/48/people"
                  },
                  "start_date": 1436032916,
                  "end_date": 1436637716,
                  "total_steps": 11,
                  "current_step": 8,
                  "active": false
                },
                {
                  "id": 20,
                  "name": "Build a Wall of Ice and Stone",
                  "description": "Dolore officia sunt esse duis cillum tempor qui eiusmod nulla dolore nisi velit elit. Adipisicing laborum duis deserunt duis consectetur in esse velit exercitation magna officia ad commodo. Ad aliquip magna velit proident ad est do. Nisi qui do in id labore irure. Id officia ex laborum est incididunt laboris dolor Lorem velit laborum labore occaecat commodo deserunt. Qui irure officia minim eiusmod exercitation consectetur eu amet sit in culpa mollit.",
                  "owner": {
                    "name": "Jon Snow",
                    "image": "https://placeimg.com/48/48/people"
                  },
                  "start_date": 1436724116,
                  "end_date": 1437328916,
                  "total_steps": 21,
                  "current_step": 13,
                  "active": false
                },
                {
                  "id": 21,
                  "name": "Defend Kings Landing",
                  "description": "Dolore officia sunt esse duis cillum tempor qui eiusmod nulla dolore nisi velit elit. Adipisicing laborum duis deserunt duis consectetur in esse velit exercitation magna officia ad commodo. Ad aliquip magna velit proident ad est do. Nisi qui do in id labore irure. Id officia ex laborum est incididunt laboris dolor Lorem velit laborum labore occaecat commodo deserunt. Qui irure officia minim eiusmod exercitation consectetur eu amet sit in culpa mollit.",
                  "owner": {
                    "name": "Tyrion Lannister",
                    "image": "https://placeimg.com/48/48/people"
                  },
                  "start_date": 1437415316,
                  "end_date": 1438020116,
                  "total_steps": 34,
                  "current_step": 16,
                  "active": false
                },
                {
                  "id": 22,
                  "name": "Manipulate Everyone at Court",
                  "description": "Dolore officia sunt esse duis cillum tempor qui eiusmod nulla dolore nisi velit elit. Adipisicing laborum duis deserunt duis consectetur in esse velit exercitation magna officia ad commodo. Ad aliquip magna velit proident ad est do. Nisi qui do in id labore irure. Id officia ex laborum est incididunt laboris dolor Lorem velit laborum labore occaecat commodo deserunt. Qui irure officia minim eiusmod exercitation consectetur eu amet sit in culpa mollit.",
                  "owner": {
                    "name": "Cersei Lannister",
                    "image": "https://placeimg.com/48/48/people"
                  },
                  "start_date": 1438106516,
                  "end_date": 1438711316,
                  "total_steps": 22,
                  "current_step": 17,
                  "active": true
                },
                {
                  "id": 23,
                  "name": "Learn How To Waterdance",
                  "description": "Dolore officia sunt esse duis cillum tempor qui eiusmod nulla dolore nisi velit elit. Adipisicing laborum duis deserunt duis consectetur in esse velit exercitation magna officia ad commodo. Ad aliquip magna velit proident ad est do. Nisi qui do in id labore irure. Id officia ex laborum est incididunt laboris dolor Lorem velit laborum labore occaecat commodo deserunt. Qui irure officia minim eiusmod exercitation consectetur eu amet sit in culpa mollit.",
                  "owner": {
                    "name": "Arya Stark",
                    "image": "https://placeimg.com/48/48/people"
                  },
                  "start_date": 1438797716,
                  "end_date": 1439402516,
                  "total_steps": 33,
                  "current_step": 2,
                  "active": true
                },
                {
                  "id": 24,
                  "name": "Negotiate With Tywin",
                  "description": "Dolore officia sunt esse duis cillum tempor qui eiusmod nulla dolore nisi velit elit. Adipisicing laborum duis deserunt duis consectetur in esse velit exercitation magna officia ad commodo. Ad aliquip magna velit proident ad est do. Nisi qui do in id labore irure. Id officia ex laborum est incididunt laboris dolor Lorem velit laborum labore occaecat commodo deserunt. Qui irure officia minim eiusmod exercitation consectetur eu amet sit in culpa mollit.",
                  "owner": {
                    "name": "Jamie Lannister",
                    "image": "https://placeimg.com/48/48/people"
                  },
                  "start_date": 1439488916,
                  "end_date": 1440093716,
                  "total_steps": 41,
                  "current_step": 15,
                  "active": true
                },
                {
                  "id": 25,
                  "name": "Infiltrate The Wildlings",
                  "description": "Dolore officia sunt esse duis cillum tempor qui eiusmod nulla dolore nisi velit elit. Adipisicing laborum duis deserunt duis consectetur in esse velit exercitation magna officia ad commodo. Ad aliquip magna velit proident ad est do. Nisi qui do in id labore irure. Id officia ex laborum est incididunt laboris dolor Lorem velit laborum labore occaecat commodo deserunt. Qui irure officia minim eiusmod exercitation consectetur eu amet sit in culpa mollit.",
                  "owner": {
                    "name": "Jon Snow",
                    "image": "https://placeimg.com/48/48/people"
                  },
                  "start_date": 1440180116,
                  "end_date": 1440784916,
                  "total_steps": 7,
                  "current_step": 5,
                  "active": true
                },
                {
                  "id": 26,
                  "name": "Make Wildfire",
                  "description": "Dolore officia sunt esse duis cillum tempor qui eiusmod nulla dolore nisi velit elit. Adipisicing laborum duis deserunt duis consectetur in esse velit exercitation magna officia ad commodo. Ad aliquip magna velit proident ad est do. Nisi qui do in id labore irure. Id officia ex laborum est incididunt laboris dolor Lorem velit laborum labore occaecat commodo deserunt. Qui irure officia minim eiusmod exercitation consectetur eu amet sit in culpa mollit.",
                  "owner": {
                    "name": "Tyrion Lannister",
                    "image": "https://placeimg.com/48/48/people"
                  },
                  "start_date": 1440871316,
                  "end_date": 1441476116,
                  "total_steps": 8,
                  "current_step": 3,
                  "active": false
                },
                {
                  "id": 27,
                  "name": "Have More Blonde Children",
                  "description": "Dolore officia sunt esse duis cillum tempor qui eiusmod nulla dolore nisi velit elit. Adipisicing laborum duis deserunt duis consectetur in esse velit exercitation magna officia ad commodo. Ad aliquip magna velit proident ad est do. Nisi qui do in id labore irure. Id officia ex laborum est incididunt laboris dolor Lorem velit laborum labore occaecat commodo deserunt. Qui irure officia minim eiusmod exercitation consectetur eu amet sit in culpa mollit.",
                  "owner": {
                    "name": "Cersei Lannister",
                    "image": "https://placeimg.com/48/48/people"
                  },
                  "start_date": 1441562516,
                  "end_date": 1442167316,
                  "total_steps": 19,
                  "current_step": 14,
                  "active": true
                },
                {
                  "id": 28,
                  "name": "Masquerade as Arry the Orphan Boy",
                  "description": "Dolore officia sunt esse duis cillum tempor qui eiusmod nulla dolore nisi velit elit. Adipisicing laborum duis deserunt duis consectetur in esse velit exercitation magna officia ad commodo. Ad aliquip magna velit proident ad est do. Nisi qui do in id labore irure. Id officia ex laborum est incididunt laboris dolor Lorem velit laborum labore occaecat commodo deserunt. Qui irure officia minim eiusmod exercitation consectetur eu amet sit in culpa mollit.",
                  "owner": {
                    "name": "Arya Stark",
                    "image": "https://placeimg.com/48/48/people"
                  },
                  "start_date": 1442253716,
                  "end_date": 1442858516,
                  "total_steps": 12,
                  "current_step": 5,
                  "active": true
                },
                {
                  "id": 29,
                  "name": "Manage the Kingsguard",
                  "description": "Dolore officia sunt esse duis cillum tempor qui eiusmod nulla dolore nisi velit elit. Adipisicing laborum duis deserunt duis consectetur in esse velit exercitation magna officia ad commodo. Ad aliquip magna velit proident ad est do. Nisi qui do in id labore irure. Id officia ex laborum est incididunt laboris dolor Lorem velit laborum labore occaecat commodo deserunt. Qui irure officia minim eiusmod exercitation consectetur eu amet sit in culpa mollit.",
                  "owner": {
                    "name": "Jamie Lannister",
                    "image": "https://placeimg.com/48/48/people"
                  },
                  "start_date": 1442944916,
                  "end_date": 1443549716,
                  "total_steps": 25,
                  "current_step": 20,
                  "active": true
                },
                {
                  "id": 30,
                  "name": "Watchers on the Wall",
                  "description": "Dolore officia sunt esse duis cillum tempor qui eiusmod nulla dolore nisi velit elit. Adipisicing laborum duis deserunt duis consectetur in esse velit exercitation magna officia ad commodo. Ad aliquip magna velit proident ad est do. Nisi qui do in id labore irure. Id officia ex laborum est incididunt laboris dolor Lorem velit laborum labore occaecat commodo deserunt. Qui irure officia minim eiusmod exercitation consectetur eu amet sit in culpa mollit.",
                  "owner": {
                    "name": "Jon Snow",
                    "image": "https://placeimg.com/48/48/people"
                  },
                  "start_date": 1443636116,
                  "end_date": 1444240916,
                  "total_steps": 21,
                  "current_step": 21,
                  "active": false
                }
              ]
            }
        };
    }
]);
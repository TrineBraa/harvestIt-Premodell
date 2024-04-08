//Login
const model = {
    app: {
        loggedInUser: '',
        darkMode: false,
        lang: 'no',
        page: [
            'loginPage',
            'mainPage',
            'registerFindingsPage',
            'profilePage',
            'findingsPage', // siden hvor man ser info om bær/sopp/fisk (slide 6)
            'mushroomPage',
            'berryPage',
            'fishPage',
        ]
    },
    inputs: {
        loginInputs: {
            email: '',
            password: '',
        },
        startPage: {
            searchBar: 'Kantarell i Larvik',
        },
        registerUser: {
            userInputName: '',
            userInputAddress: '',
            userInputPassword: '',
            userInputEmail: '',
        },
        registerSighting: {
            nameInput: 'blåbær',
            lastHarvestInput: '2024-10-22',
            locationInput: 'blåbærskogen i Tønsberg',
            imageInput: '',
        },
        findingsPage: {
            locationBar: '',
        },
    },
    data: {
        users: [
            { 
                id: 'Linn',
                Password: 'Linn',
                friends: ['Trine', 'Audun S', 'Even'],
                profilePic: '',
            },
            { 
                id: 'Trine',
                Password: 'Trine',
                friends: [],
                profilePic: '', 
            },
            { 
                id: 'Audun S', 
                Password: 'Audun S',
                friends: [],
                profilePic: '',
            },
            { 
                id: 'Even', 
                Password: 'Even',
                friends: [],
                profilePic: '',
            }, 
        ],
        sightings: [
            { 
                id: 1,
                name: 'blåbær',
                Category: model.data.categories[0],
                lastHarvest: '2024-10-22',
                location: 'blåbærskogen i Tønsberg', 
                image: '', 
                foundBy: 'Linn'
            },
        ],
        categories: [
            {
                name: 'Berry',
                numberOfSightings: '',
                registeredInCategory: [],
            },
            {
                name: 'Mushroom',
                numberOfSightings: '',
                registeredInCategory: [],
            },
            {
                name: 'Fish',
                numberOfSightings: '',
                registeredInCategory: [],
            },
        ]
    },
}

// modelLogin: {
//     app: {
//         page:'',
//     },
//     inputs: {
//         email: '',
//         password: '',
//     },
//     data: {
//         users: [
//             { id: 'Linn', Password: 'Linn' },
//             { id: 'Trine', Password: 'Trine' },
//             { id: 'Audun S', Password: 'Audun S' },
//             { id: 'Even', Password: 'Even' },
//         ],
//     },


// },

// //Hovedside
// modelMain: {
//     app: {
//         User: modelLogin.data.users[i],
//     },
//     inputs: {
//         searchBar: 'Kantarell i Larvik',
//     },
//     data: {

//     }
// },

// //RegistrerNytt
// modelRegister: { // ikke tegnet på dette skjermbilde, men bør kanskje ha en "hjem"-knapp/gå tilbake knapp
//     app: {

//     },
//     inputs: {
//         Name,
//         Category: ['mushroom', 'fish', 'berry'],
//         location,
//         lastHarvest,
//     },
//     data: {
//         berries: [
//             { name: 'blåbær', lastHarvest: '2024-10-22', location: 'blåbærskogen i Tønsberg' },

//         ],
//     }
// },


// //Profil
// modelProfile: {
//     app: {
//         user: 'Linn',
//     },
//     inputs: {
//         userInputName: 'Linn',
//         userInputAddress: 'null',
//         userInputRegistrations: 'null',
//         userInputEarnedBadges: 'null',
//         userInputNextReward: 'null',
//         userInputYourRegistrations: 'null',

//     },
//     image: {
//         userProfilePic: '',
//         friendProfilePics: [Lisa, Edvinas, Trine, Audun, Even],
//         latestBadge: '',

//     },
//     data: {

//     }
// },

// //Bær
// modelBerries: {
//     app: {
//         Map: locationAroundUser,
//     },
//     inputs: {
//         locationBar,//Velge avstander fra din lokasjon
//     },
//     data: {
//         berries: [
//             { name: 'Blåbær', location: 'blåbærskogen i Tønsberg', lastHarvest: '2024-10-22', },
//             { name: 'Bringebær', location: 'ved storelva i byen', lastHarvest: '2023-06-15', },

//         ],
//     }
// },

// //Sopp
// modelMushrooms: {
//     app: {
//         Map: locationAroundUser,
//     },
//     inputs: {
//         locationBar,
//     },
//     data: {
//         mushrooms: [
//             {name: 'Kantarell', location: 'soppskauen på Senja', lastHarvest: '2023-07-14'},
//             {},
//         ]
//     }
// },

// //Fisk
// modelFish: {
//     app: {
//         Map: locationAroundUser,
//     },
//     inputs: {
//         locationBar, 
//     },
//     data: {
//         fishes: [
//             {name: 'laks', location: 'lakselva i Finnmark', lastHarvest: '2024-03-14'},
//             {},
//         ]
//     }
// },

// //Sidebar
// modelSidebar:{
//     app: {
//         user: modelLogin.app.user
//     },
//     inputs: {
        
//     },
//     data: {

//     }
// },
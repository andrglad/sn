let state = {
    myposts: {
        posts: [
            { id: 1, message: "Hi, how are you?", likes: 18 },
            { id: 2, message: "It's my first post", likes: 20 },
            { id: 3, message: "It's my second post", likes: 120 }
        ]
    },
    dialogs: {
        users: [
            { id: 1, name: "Andrey" },
            { id: 2, name: "Vadim" },
            { id: 3, name: "Pavel" },
            { id: 4, name: "Igor" },
            { id: 5, name: "Anton" },
            { id: 6, name: "Ilya" }
        ],
        messages: [
            { id: 1, message: "Hi!" },
            { id: 2, message: "How are you?" },
            { id: 3, message: "I'm fine!" },
            { id: 4, message: "Should we stay or should we go! Should we stay or should we go! Should we stay or should we go!" },
            { id: 5, message: "Yep" },
            { id: 6, message: "Yo" }
        ]
    },
    friendsBlock: {
        friends: [
            { id: 1, firstName: 'Andrey', secondName: 'Gladilin' },
            { id: 1, firstName: 'Ivan', secondName: 'Petrov' },
            { id: 1, firstName: 'Andrey', secondName: 'Petrom' }
        ]
    }
}

export default state;
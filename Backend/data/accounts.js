
// _id variable is created upon insertion
const initialAccounts = {
    name: "Lukasz Matwiejczyk",
    password: "password1",
    contact: {
        email: "lukaszjmat@gmail.com",
        mobile: "9732706811",
    },
    locations: [
        {
            label: "Home",
            address: "4 Timothy Ct",
            city: "Morristown",
            state: "NJ",
            zip: "07960"
        }
    ],
    packages: [
        {
            packageID: "Initializer",
            wardrobeType: 0,
            tailorings: 2,
            cleanings: 2,
            created_date: "12/31/2023",
        }
    ],
    orders: [
        {
            packageID: "Initializer",
            service: "Tailoring",
            due_date: "12/31/2023",
        }
    ]
};

module.exports = { initialAccounts };
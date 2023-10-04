import React, { useState } from 'react';


const arr = [
    {
        title: "Koenigsegg",
        sport: "Sport",
        oil: "90L",
        manual: "Manual",
        people: "2 people",
        price: "$99/",
        rent: "Rent Now",
        img: Car,
        isLiked: false,
        id: 1,
    },
    {
        title: "Nissan GT - R",
        sport: "Sport",
        oil: "80L",
        manual: "Manual",
        people: "2 people",
        price: "$80/",
        rent: "Rent Now",
        isLiked: false,
        img: Car1,
        id: 2,
    },

    {
        title: "Rolls - Royce",
        sport: "Sedan",
        oil: "70L",
        manual: "Manual",
        people: "2 people",
        price: "$96/",
        rent: "Rent Now",
        isLiked: false,
        img: Car2,
        id: 3,
    },
    {
        title: "Nissan GT - R",
        sport: "Sport",
        oil: "80L",
        manual: "Manual",
        people: "2 people",
        price: "$80/",
        rent: "Rent Now",
        isLiked: false,
        img: Car3,
        id: 4,
    },
    {
        title: "All New Rush",
        sport: "SUV",
        oil: "70L",
        manual: "Manual",
        people: "2 people",
        price: "$72/",
        rent: "Rent Now",
        img: Car3,
        isLiked: false,
        id: 5,
    },

    {
        title: "CR  - V",
        sport: "SUV",
        oil: "80L",
        manual: "Manual",
        people: "2 people",
        price: "$80/",
        rent: "Rent Now",
        img: Car,
        isLiked: false,
        id: 6,
    },
    {
        title: "All New Terios",
        sport: "SUV",
        oil: "90L",
        manual: "Manual",
        people: "2 people",
        price: "$74/",
        rent: "Rent Now",
        img: Car3,
        isLiked: false,
        id: 7,
    },
    {
        title: "CR  - V",
        sport: "Suv",
        oil: "80L",
        manual: "Manual",
        people: "2 people",
        price: "$80/",
        rent: "Rent Now",
        img: Car2,
        isLiked: false,
        id: 8,
    },

    {
        title: "MG ZX Exclusice",
        sport: "Hatchback",
        oil: "70L",
        manual: "Manual",
        people: "2 people",
        price: "$76/",
        rent: "Rent Now",
        img: Car1,
        isLiked: false,
        id: 9,
    },
    {
        title: "Koenigsegg",
        sport: "Sport",
        oil: "90L",
        manual: "Manual",
        people: "2 people",
        price: "$99/",
        rent: "Rent Now",
        img: Car1,
        isLiked: false,
        id: 10,
    },
    {
        title: "New MG ZS",
        sport: "SUV",
        oil: "80L",
        manual: "Manual",
        people: "2 people",
        price: "$80/",
        rent: "Rent Now",
        img: Car2,
        isLiked: false,
        id: 11,
    },

    {
        title: "MG ZX Excite",
        sport: "Hatchback",
        oil: "90L",
        manual: "Manual",
        people: "2 people",
        price: "$74/",
        rent: "Rent Now",
        img: Car3,
        isLiked: false,
        id: 12,
    },
];

const UserList = (arr) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter the users based on the search input
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>User List</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};


export default UserList;

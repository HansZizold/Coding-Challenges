const users = [
    {
      id: 001,
      name: 'Alice',
      startDate: '2021-01-03',
    },
    {
      id: 002,
      name: 'Bob',
      startDate: '2020-02-01',
    },
    {
      id: 003,
      name: 'Claire',
      startDate: '2019-03-01',
    },
  ];

  const newUser = [
    {
     firstname: 'Johnson'
    },
    {
      firstname: 'Micheal'
     },
     {
      firstname: 'Amos'
     },
    
  ];

  const newArray = [];

  const getNames = (users) => {
    // Your solution
    users.map(user => newArray.push(user.name));
    newUser.map(user => newArray.push(user.firstname));
    return (newArray);
  };
  
  console.log(getNames(users)); // ['Alice', 'Bob', 'Claire', 'Johnson', 'Micheal', 'Amos']

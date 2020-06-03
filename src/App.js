import React from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': 'John',
    'birthday': '961222',
    'gender': 'Male',
    'job': 'Student'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': 'Chris',
    'birthday': '950309',
    'gender': 'Male',
    'job': 'Advisor'
    },
    {
      'id': 3,
      'image': 'https://placeimg.com/64/64/3',
      'name': 'Ellie',
      'birthday': '931028',
      'gender': 'Female',
      'job': 'Designer'
      }
]

function App() {
  return (
    <div>
     {
       customers.map(c => {
         return (
           <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
           />
         );
       })
     }
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Customer from './components/Customers'

const customers = [
  {
    'id': 1,
    'image': "https://placeimg.com/64/64/1",
    'name': "윤수빈",
    'birthday': "941207",
    'gender': "여자"
  },
  {
    'id': 2,
    'image': "https://placeimg.com/64/64/2",
    'name': "박정규",
    'birthday': "920713",
    'gender': "남자"
  },
  {
    'id': 3,
    'image': "https://placeimg.com/64/64/3",
    'name': "김희람",
    'birthday': "930705",
    'gender': "여자"
  }
]
function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              key = {c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
            />
          )
        })
      }
      </div>
  );
}

export default App;

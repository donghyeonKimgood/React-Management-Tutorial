import './App.css';
import React, { Component } from 'react';
import Customer from './components/Customer';

const customer =[
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/any',
    'name' : '김동현',
    'birthday' : '961222',
    'gender' : '남자',
    'job' : '대학생'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/any',
    'name' : '김기동',
    'birthday' : '960305',
    'gender' : '남자',
    'job' : '프로그래머'
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/any',
    'name' : '김서방',
    'birthday' : '981111',
    'gender' : '남자',
    'job' : '백수'
  },
]

class App extends Component{
  render(){
    return(
      <div>
        {
          customer.map(c => {
            return(
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
}


export default App;

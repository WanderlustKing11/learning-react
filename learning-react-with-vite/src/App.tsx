import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const user = {
  name: 'Master Chief',
  imageUrl:
    'https://ca-times.brightspotcdn.com/dims4/default/2159208/2147483647/strip/true/crop/1200x800+0+0/resize/1024x683!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb5%2Fec%2Fd0a3ed234205bb2ea4b8837d0582%2Fhalo-101-2087-rt.jpg',
};

const avatar = {
  imageSize: 150,
  borderRadius: '50%'
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>count is {count}</button>;
}

function App() {
  return (
    <>
      <p>We're working with</p>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <h2>{user.name}</h2>
        <img
          src={user.imageUrl}
          alt={'Image of ' + user.name}
          style={{
            width : avatar.imageSize,
            height: avatar.imageSize,
            borderRadius: avatar.borderRadius,
          }}
        />
        <div className='card'>
          <MyButton />
        </div>
      </div>

      <div className='card'>
        <MyButton />
      </div>
      <div className='card'>
        <MyButton />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

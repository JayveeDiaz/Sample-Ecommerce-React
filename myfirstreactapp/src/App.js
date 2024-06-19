
import './App.css';
import MyHeader from './components/MyHeader'; 
import MyFooter from './components/MyFooter';
import Content from './components/Content';

export default function App() {
  return (
    <div className='m-0 p-0 '>
       <MyHeader /> 

       <div class="m-auto w-1">
  <Content/>
</div>




    <MyFooter />
</div>

  )
}

import { hot } from "react-hot-loader/root";
import React from "react";
import "./main.global.css";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from './shared/CardsList';
import { GenericList } from "./shared/GenericList";
import { generateId, generateRandomString } from "./utils/react/generateRandomIndex";
import { Dropdown } from "./shared/Dropdown";
import { merge } from "./utils/js/merge";

const LIST = [
  {text: 'some'},
  {text: 'some two'},
  {text: 'some three'},
].map(generateId)

function AppComponent() {

  const [list, setList] = React.useState(LIST);

  const handleAdd = () => {
    setList(list.concat(generateId({text: generateRandomString()})))
  }

  const handleItemClick = (id: string) => {
    setList(list.filter(item => item.id!==id));
  }

  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />

        <div style={{'padding': '0 0 10px 10px'}}> 
          <Dropdown 
            button={<button>button</button>}
            isOpen={false}
            onOpen={()=>console.log('open')}
            onClose={()=>console.log('close')}
            >
            <ul>
              <li>one</li>
            </ul>
          </Dropdown>
        </div>

        <button onClick={handleAdd}>Add Item List</button>
        <GenericList list={list.map(merge({onClick: handleItemClick}))}/>
        
      </Content>
    </Layout>
  );
}
export const App = hot(() => <AppComponent />);

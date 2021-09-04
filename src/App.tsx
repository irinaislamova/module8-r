
import React, {useState, useEffect} from 'react';
import './main.global.css';

import { generateId } from './utils/react/generateRandomIndex';
import { generateRandomString } from './utils/react/generateRandomIndex';
import { merge } from './utils/js/merge';
import { IItem } from './GenericList';

import { GenericList } from './GenericList';

import { DropdownTest } from './DropdownTest';

import { Header } from './Header';
import { Menu } from './Header/SortBlock/Menu';
import { SortBlock } from './Header/SortBlock/SortBlock';
import { Content} from './Content';
import { Layout } from './Layout';
import { CardList } from './CardList';
import { getValue } from './utils/react/pickFromSyntheticEvent';
import { InputExample } from './compose.example';
import { Text } from './Text';
import { EColor } from './Text/Text';

function App() {	

	const [token, setToken] = useState('');	
	

	useEffect(() => {
		const url = new URL(window.location.href);
		console.log(url.searchParams);
		if (url.searchParams.get('token')) {
			setToken(url?.searchParams?.get('token') || '')
		}
    }, []);
// http://localhost:5000/auth/#access_token=1036547822850-TC9WRBv5AiKBvZaFJge1jpcZAWm1dw&token_type=bearer&state=random_string&expires_in=3600&scope=identity+read+submit

    	

	return (
		<Layout>
		<Header token={token} />
		<Menu />
        <SortBlock />
		<Content>
		    <CardList />	
		    <div>qwerty123</div>	
		    <div style = {{ padding: 20}}>
		      <br />
		      <DropdownTest 
		        onClose={() => console.log('closed')}
		        onOpen={() => console.log('opened')}
		        isOpen = {false} 
		        button = {<button>Test button</button>}>
		         {/*<GenericList list = {[]}/>*/}
		         <CardList />			                 
		      </DropdownTest>
		    </div>
		    <Text size={20} mobileSize={28} bold>Label1</Text>	
		    <Text size={20} As='h1'>Label2</Text>
		    <Text size={20} mobileSize={16} color={EColor.orange}>Label3</Text>		   
		</Content>
		</Layout>
		)
}


export default App;



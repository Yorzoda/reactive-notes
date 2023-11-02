import './App.css';
import JouranlItem from './components/NoteItem/NoteItem';
import CardButton from './components/CardButton/CardButton';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import NoteAddButton from './components/NoteAddButton/NoteAddButton';
import NoteList from './components/NoteList/NoteList';
import NoteForm from './components/NoteForm/NoteForm';
import { useState } from 'react';

function App() {
	const staticData = [
	// 	{
	// 		id:1,
	// 		title:'Lorem Ipsum',
	// 		text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
	// 		date:new Date()
	// 	},
	// 	{
	// 		id:2,
	// 		title:'Li Europan lingues',
	// 		text:'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth',
	// 		date:new Date()
	// 	},
	// 	{
	// 		id:3,
	// 		title:'Far far away',
	// 		text:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
	// 		date:new Date()
	// 	}
	];

	const [itemData,setItemData] = useState(staticData);	
 
	const addItemData = item => {
		setItemData(oldItemData => [...oldItemData,{
			...item,
			id:oldItemData.length > 0 ? Math.max(...oldItemData.map(i =>i.id)) + 1: 1,
			date: item.date? new Date(item.date) : Date.now()
		}]);
	};

	const sortItems = (a,b) => {
		if (a.date > b.date) {
			return -1;
		} else {
			return 1;
		} 
	};

	return (
		<div className='app'>
			<LeftPanel>
				<Header/>
				<NoteAddButton/>
				<NoteList>
					{itemData.length === 0 && <p>No any notes here</p>}
					{itemData.length > 0 && itemData.sort(sortItems).map(element => (
						<CardButton key={element.id}>
							<JouranlItem 
								title={element.title} 
								text={element.text} 
								date={element.date}/>
						</CardButton>
					))}
				</NoteList>
			</LeftPanel>
			<Body>
				<NoteForm submitItem={addItemData}/>
			</Body>
		
		</div>
    
	);
}

export default App;

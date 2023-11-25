import './App.css';
import NoteItem from './components/NoteItem/NoteItem';
import CardButton from './components/CardButton/CardButton';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import NoteAddButton from './components/NoteAddButton/NoteAddButton';
import NoteList from './components/NoteList/NoteList';
import NoteForm from './components/NoteForm/NoteForm';
import { useEffect, useState } from 'react';

function App() {

	const [itemData,setItemData] = useState([]);	
	
	useEffect(()=>{
		const data = JSON.parse(localStorage.getItem('data'));
		if (data) {
			setItemData(data.map(item => ({
				...item,
				date:new Date(item.date)
			})));
		}
	},[]);

	useEffect(()=>{
		if (itemData.length) {
			console.log('writed');
			localStorage.setItem('data',JSON.stringify(itemData));
		}
	},[itemData]);
	
	const addItemData = item => {
		setItemData(oldItemData => [...oldItemData,{
			title:item.title,
			text:item.text,
			id:oldItemData.length > 0 ? Math.max(...oldItemData.map(i =>i.id)) + 1: 1,
			date:new Date(item.date) 
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
							<NoteItem 
								title={element.title} 
								date={element.date}
								text={element.text} 
							/>
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

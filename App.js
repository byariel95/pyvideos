import React ,{Component} from 'react';
import { Text} from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/player/containers/suggestion-list';
import CategoryList from './src/player/containers/category-list';
import Api from './src/Api/api-suggestions';
import Player from  './src/videos/containers/player';

export default class App extends Component {

	state ={
		suggestionList: [],
		categoryList: [],
	}

   	async componentDidMount() {
		const movies = await Api.getSuggestion(24);
		const categories = await Api.getMovies();
		this.setState({
			suggestionList: movies,
			categoryList: categories

		});

	}

	render(){
		return(
			<Home>
				<Header />
				<Text>BUSCADOR DOOPLY</Text>
				<Player/>
				<CategoryList 
				 list={this.state.categoryList}
				/>
				<SuggestionList 
				 list={this.state.suggestionList}
				/>	
			</Home>	
			
		)
	}
};




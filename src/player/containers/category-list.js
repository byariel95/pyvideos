import React, { Component } from 'react';
import { FlatList,StyleSheet } from 'react-native';
import Layout from '../components/category-list-layout';
import Empty from '../components/empty';
import Separator from '../../sections/components/horizontal-separator';
import Category from '../components/category';

class CategoryList extends Component {

    keyExtractor = (item) => item.id.toString();

    renderEmpty= () => <Empty text ="No Hay Sugerencias"/>
    
    itemSeparator = () => <Separator /> 
    
    renderItem = ({item})=> {
        return(
            <Category {...item}/>
        )    
    }

    render() {

        return (
            <Layout 
                title="Categorias">
                <FlatList
                    horizontal
                    keyExtractor={this.keyExtractor}
                    data={this.props.list}
                    ListEmptyComponent = {this.renderEmpty}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={this.renderItem}/>    
            </Layout>
            
        )
    }

}

export default CategoryList;

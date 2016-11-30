'use strict';

import React, { Component } from 'react';
import  {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Dimensions,
    RefreshControl
} from 'react-native';
import ViewPager from 'react-native-viewpager';
const BANNER_IMGS = [
    require('../images/banner/1.jpg'),
    require('../images/banner/2.jpg'),
    require('../images/banner/3.jpg'),
    require('../images/banner/4.jpg')
];

export default class NewsBaner extends Component {

    constructor(props) {
        super(props);
        // 用于构建DataSource对象
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });
        // 实际的DataSources存放在state中
        this.state = {
            dataSource: dataSource.cloneWithPages(BANNER_IMGS),
            isRefreshing: false,
            loaded: 0,
            rowData: Array.from(new Array(20)).map(
            (val, i) => ({text: 'Initial row ' + i, clicks: 0})),
            }
    }

    _renderPage(data, pageID) {
        return (
            <Image
                source={data}
                style={styles.page}/>
        );
    }
    _onRefresh =()=>{
      this.setState({isRefreshing: true});
    setTimeout(() => {
      // prepend 10 items
      const rowData = Array.from(new Array(10))
      .map((val, i) => ({
        text: 'Loaded row ' + (+this.state.loaded + i),
        clicks: 0,
      }))
      .concat(this.state.rowData);

      this.setState({
        loaded: this.state.loaded + 10,
        isRefreshing: false,
        rowData: rowData,
      });
    }, 5000);
    }

    render() {

        const rows = this.state.rowData.map((row, ii) => {
      return <View style={{ borderColor: 'grey',
    borderWidth: 1,
    padding: 20,
    backgroundColor: '#3a5795',
    margin: 5,}}  ><Text>{row.text}</Text></View>;
    });

        return (
            <ScrollView style={{  flex: 1 }}
                refreshControl={
                <RefreshControl
                    refreshing={this.state.isRefreshing}
                    onRefresh={this._onRefresh}
                    tintColor="#ff0000"
                    title="Loading..."
                    titleColor="#00ff00"
                    colors={['#ff0000', '#00ff00', '#0000ff']}
                    progressBackgroundColor="#ffff00"
                />}
                >   
                <ViewPager
                    style={{height:130}}
                    dataSource={this.state.dataSource}
                    renderPage={this._renderPage}
                    isLoop={true}
                    autoPlay={true}/>
                    {rows}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        width:Dimensions.get('window').width, // 此处修复宽度不一样问题
        flex: 1,
        height: 130,
        resizeMode: 'stretch'
    },
});
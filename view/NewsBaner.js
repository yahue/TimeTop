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
            dataSource: dataSource.cloneWithPages(BANNER_IMGS)
        }
    }

    _renderPage(data, pageID) {
        return (
            <Image
                source={data}
                style={styles.page}/>
        );
    }

    render() {
        return (
            <View style={{  flex: 1,  
        flexDirection: 'row',  
        alignItems: 'flex-start',  
        paddingTop:5,  
        paddingLeft:5,  
        backgroundColor:'#999999',  
        paddingRight:5,  
        paddingBottom:5, }}>
                <ViewPager
                    style={{height:130}}
                    dataSource={this.state.dataSource}
                    renderPage={this._renderPage}
                    isLoop={true}
                    autoPlay={true}/>
            </View>
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